import { useCallback, useMemo } from 'react';
import { useAsync } from 'react-async-hook';
import toast from 'react-hot-toast';

import { TransactionTypes } from '@stacks/connect';
import {
  FungibleConditionCode,
  PostCondition,
  StacksTransaction,
  TransactionSigner,
  createAssetInfo,
  createStacksPrivateKey,
  makeStandardFungiblePostCondition,
} from '@stacks/transactions';
import BN from 'bn.js';

import { finalizeTxSignature } from '@shared/actions/finalize-tx-signature';
import { logger } from '@shared/logger';
import { StacksTransactionFormValues } from '@shared/models/form.model';
import { isString, isUndefined } from '@shared/utils';

import { useDefaultRequestParams } from '@app/common/hooks/use-default-request-search-params';
import { stxToMicroStx } from '@app/common/money/unit-conversion';
import { validateStacksAddress } from '@app/common/stacks-utils';
import { broadcastTransaction } from '@app/common/transactions/stacks/broadcast-transaction';
import {
  GenerateUnsignedTransactionOptions,
  generateUnsignedTransaction,
} from '@app/common/transactions/stacks/generate-unsigned-txs';
import { useNextNonce } from '@app/query/stacks/nonce/account-nonces.hooks';
import {
  useCurrentAccount,
  useCurrentAccountStxAddressState,
} from '@app/store/accounts/blockchain/stacks/stacks-account.hooks';
import {
  useCurrentNetworkState,
  useCurrentStacksNetworkState,
} from '@app/store/networks/networks.hooks';
import { useSubmittedTransactionsActions } from '@app/store/submitted-transactions/submitted-transactions.hooks';

import { usePostConditionState } from './post-conditions.hooks';
import { useTransactionRequest, useTransactionRequestState } from './requests.hooks';
import { prepareTxDetailsForBroadcast } from './transaction';

export function useTransactionPostConditions() {
  return usePostConditionState();
}

function useTransactionAttachment() {
  return useTransactionRequestState()?.attachment;
}

export function useUnsignedStacksTransactionBaseState() {
  const network = useCurrentStacksNetworkState();
  const { data: nextNonce } = useNextNonce();
  const stxAddress = useCurrentAccountStxAddressState();
  const payload = useTransactionRequestState();
  const postConditions = useTransactionPostConditions();
  const account = useCurrentAccount();

  const options = useMemo(
    () => ({
      fee: 0,
      publicKey: account?.stxPublicKey,
      nonce: nextNonce?.nonce ?? 0,
      txData: { ...payload, postConditions, network },
    }),
    [account?.stxPublicKey, network, nextNonce?.nonce, payload, postConditions]
  );

  const transaction = useAsync(async () => {
    return generateUnsignedTransaction(options as GenerateUnsignedTransactionOptions);
  }, [account, nextNonce?.nonce, payload, stxAddress]).result;

  return useMemo(() => {
    if (!account || !payload || !stxAddress) return { transaction: undefined, options };

    if (
      payload.txType === TransactionTypes.ContractCall &&
      !validateStacksAddress(payload.contractAddress)
    ) {
      return { transaction: undefined, options };
    }

    return { transaction, options };
  }, [account, options, payload, stxAddress, transaction]);
}

export function useUnsignedPrepareTransactionDetails(values: StacksTransactionFormValues) {
  const unsignedStacksTransaction = useUnsignedStacksTransaction(values);
  return useMemo(() => unsignedStacksTransaction, [unsignedStacksTransaction]);
}

export function useSignTransactionSoftwareWallet() {
  const account = useCurrentAccount();
  return useCallback(
    (tx: StacksTransaction) => {
      if (account?.type !== 'software') {
        [toast.error, logger.error].forEach(fn =>
          fn('Cannot use this method to sign a non-software wallet transaction')
        );
        return;
      }
      const signer = new TransactionSigner(tx);
      if (!account) return null;
      signer.signOrigin(createStacksPrivateKey(account.stxPrivateKey));
      return tx;
    },
    [account]
  );
}

export function useTransactionBroadcast() {
  const submittedTransactionsActions = useSubmittedTransactionsActions();
  const { tabId } = useDefaultRequestParams();
  const requestToken = useTransactionRequest();
  const attachment = useTransactionAttachment();
  const network = useCurrentNetworkState();

  return async ({ signedTx }: { signedTx: StacksTransaction }) => {
    try {
      const { isSponsored, serialized, txRaw } = prepareTxDetailsForBroadcast(signedTx);
      const result = await broadcastTransaction({
        isSponsored,
        serialized,
        txRaw,
        attachment,
        networkUrl: network.chain.stacks.url,
      });

      if (isString(result.txId)) {
        submittedTransactionsActions.newTransactionSubmitted({
          rawTx: result.txRaw,
          txId: result.txId,
        });
      }

      // If there's a request token, this means it's a transaction request
      // In which case we need to return to the app the results of the tx
      // Otherwise, it's a send form tx and we don't want to
      if (requestToken && tabId) {
        finalizeTxSignature({ requestPayload: requestToken, tabId, data: result });
      }
      return Promise.resolve();
    } catch (error) {
      return Promise.reject(error);
    }
  };
}

export function useSoftwareWalletTransactionRequestBroadcast() {
  const { data: nextNonce } = useNextNonce();
  const signSoftwareWalletTx = useSignTransactionSoftwareWallet();
  const stacksTxBaseState = useUnsignedStacksTransactionBaseState();
  const { tabId } = useDefaultRequestParams();
  const requestToken = useTransactionRequest();
  const account = useCurrentAccount();
  const txBroadcast = useTransactionBroadcast();

  return async (values: StacksTransactionFormValues) => {
    if (!stacksTxBaseState) return;
    const { options } = stacksTxBaseState as any;
    const unsignedStacksTransaction = await generateUnsignedTransaction({
      ...options,
      fee: stxToMicroStx(values.fee).toNumber(),
      nonce: Number(values.nonce) ?? nextNonce?.nonce,
    });

    if (!account || !requestToken || !unsignedStacksTransaction) {
      return { error: { message: 'No pending transaction' } };
    }

    if (!tabId) throw new Error('tabId not defined');

    const signedTx = signSoftwareWalletTx(unsignedStacksTransaction);
    if (!signedTx) {
      logger.error('Cannot sign transaction, no account in state');
      return;
    }
    return txBroadcast({ signedTx });
  };
}

interface PostConditionsOptions {
  contractAddress: string;
  contractAssetName: string;
  contractName: string;
  stxAddress: string;
  amount: string | number;
}
export function makePostCondition(options: PostConditionsOptions): PostCondition {
  const { contractAddress, contractAssetName, contractName, stxAddress, amount } = options;

  const assetInfo = createAssetInfo(contractAddress, contractName, contractAssetName);
  return makeStandardFungiblePostCondition(
    stxAddress,
    FungibleConditionCode.Equal,
    new BN(amount, 10).toString(),
    assetInfo
  );
}

export function useGenerateUnsignedStacksTransaction() {
  const stacksTxBaseState = useUnsignedStacksTransactionBaseState();
  const { data: nextNonce } = useNextNonce();

  return useCallback(
    (values: StacksTransactionFormValues) => {
      if (!stacksTxBaseState || isUndefined(nextNonce?.nonce)) return undefined;
      const { options } = stacksTxBaseState as any;
      return generateUnsignedTransaction({
        ...options,
        fee: stxToMicroStx(values.fee).toNumber(),
        nonce: Number(values.nonce) ?? nextNonce?.nonce,
      });
    },
    [nextNonce?.nonce, stacksTxBaseState]
  );
}

function useUnsignedStacksTransaction(values: StacksTransactionFormValues) {
  const generateTx = useGenerateUnsignedStacksTransaction();

  const tx = useAsync(async () => {
    return generateTx(values ?? undefined);
  }, [values]);

  return tx.result;
}
