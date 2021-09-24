import {
  AnchorMode,
  deserializeCV,
  makeContractCall,
  makeContractDeploy,
  makeSTXTokenTransfer,
  StacksTransaction,
} from '@stacks/transactions';
import BN from 'bn.js';
import { getPostConditions } from '@common/transactions/post-condition-utils';
import { ChainID } from '@stacks/common';
import { StacksMainnet, StacksTestnet } from '@stacks/network';
import {
  ContractCallOptions,
  ContractDeployOptions,
  TokenTransferOptions,
} from '@common/transactions/transactions';
import {
  AddressTransactionWithTransfers,
  CoinbaseTransaction,
  MempoolTransaction,
  Transaction,
  TransactionEventFungibleAsset,
} from '@stacks/stacks-blockchain-api-types';
import { displayDate, isoDateToLocalDateSafe, todaysIsoDate } from '@common/date-utils';
import { getContractName, truncateMiddle } from '@stacks/ui-utils';
import { stacksValue } from '@common/stacks-utils';
import { BigNumber } from 'bignumber.js';
import { AssetWithMeta } from '@common/asset-types';

type Tx = MempoolTransaction | Transaction;

export interface StxTransfer {
  amount: string;
  sender?: string;
  recipient?: string;
}

export interface FtTransfer {
  asset_identifier: string;
  amount: string;
  sender?: string;
  recipient?: string;
}

export const generateContractCallTx = ({
  txData,
  senderKey,
  nonce,
  fee,
}: {
  txData: ContractCallOptions;
  senderKey: string;
  nonce?: number;
  fee?: number;
}) => {
  const {
    contractName,
    contractAddress,
    functionName,
    functionArgs,
    sponsored,
    postConditionMode,
    postConditions,
  } = txData;
  const args = functionArgs.map(arg => {
    return deserializeCV(Buffer.from(arg, 'hex'));
  });

  let network = txData.network;

  if (typeof txData.network?.getTransferFeeEstimateApiUrl !== 'function') {
    const Builder = txData.network?.chainId === ChainID.Testnet ? StacksTestnet : StacksMainnet;
    network = new Builder();
    if (txData.network?.coreApiUrl) network.coreApiUrl = txData.network?.coreApiUrl;
    if (txData.network?.bnsLookupUrl) network.bnsLookupUrl = txData.network?.bnsLookupUrl;
  }

  const options = {
    contractName,
    contractAddress,
    functionName,
    senderKey,
    anchorMode: AnchorMode.Any,
    functionArgs: args,
    nonce: nonce !== undefined ? new BN(nonce, 10) : undefined,
    fee: !fee ? new BN(0) : new BN(fee, 10),
    postConditionMode: postConditionMode,
    postConditions: getPostConditions(postConditions),
    network,
    sponsored,
  };
  return makeContractCall(options);
};

export const generateContractDeployTx = ({
  txData,
  senderKey,
  nonce,
  fee,
}: {
  txData: ContractDeployOptions;
  senderKey: string;
  nonce?: number;
  fee?: number;
}) => {
  const { contractName, codeBody, network, postConditions, postConditionMode } = txData;
  const options = {
    contractName,
    codeBody,
    nonce: nonce !== undefined ? new BN(nonce, 10) : undefined,
    fee: !fee ? new BN(0) : new BN(fee, 10),
    senderKey,
    anchorMode: AnchorMode.Any,
    postConditionMode: postConditionMode,
    postConditions: getPostConditions(postConditions),
    network,
  };
  return makeContractDeploy(options);
};

export const generateSTXTransferTx = ({
  txData,
  senderKey,
  nonce,
  fee,
}: {
  txData: TokenTransferOptions;
  senderKey: string;
  nonce?: number;
  fee?: number;
}) => {
  const { recipient, memo, amount, network } = txData;
  const options = {
    recipient,
    memo,
    senderKey,
    anchorMode: AnchorMode.Any,
    amount: new BN(amount),
    nonce: nonce !== undefined ? new BN(nonce, 10) : undefined,
    fee: !fee ? new BN(0) : new BN(fee, 10),
    network,
  };
  return makeSTXTokenTransfer(options);
};

export const stacksTransactionToHex = (transaction: StacksTransaction) =>
  `0x${transaction.serialize().toString('hex')}`;

function txHasTime(tx: Tx) {
  return !!(
    ('burn_block_time_iso' in tx && tx.burn_block_time_iso) ||
    ('parent_burn_block_time_iso' in tx && tx.parent_burn_block_time_iso)
  );
}

export function isAddressTransactionWithTransfers(
  transaction: AddressTransactionWithTransfers | Tx
): transaction is AddressTransactionWithTransfers {
  return 'tx' in transaction;
}

function groupTxsByDateMap(txs: (AddressTransactionWithTransfers | MempoolTransaction)[]) {
  return txs.reduce((txsByDate, atx) => {
    const tx = isAddressTransactionWithTransfers(atx) ? atx.tx : atx;
    const time =
      ('burn_block_time_iso' in tx && tx.burn_block_time_iso) ||
      ('parent_burn_block_time_iso' in tx && tx.parent_burn_block_time_iso);
    const date = time ? isoDateToLocalDateSafe(time) : undefined;
    if (date && txHasTime(tx)) {
      if (!txsByDate.has(date)) {
        txsByDate.set(date, []);
      }
      txsByDate.set(date, [...(txsByDate.get(date) || []), atx]);
    }
    if (!txHasTime(tx)) {
      const today = todaysIsoDate();
      txsByDate.set(today, [...(txsByDate.get(today) || []), atx]);
    }
    return txsByDate;
  }, new Map<string, (AddressTransactionWithTransfers | MempoolTransaction)[]>());
}

function formatTxDateMapAsList(
  txMap: Map<string, (AddressTransactionWithTransfers | MempoolTransaction)[]>
) {
  return [...txMap.keys()].map(date => ({
    date,
    displayDate: displayDate(date),
    txs: txMap.get(date) ?? [],
  }));
}

function countTxIds(txs: (AddressTransactionWithTransfers | MempoolTransaction)[]) {
  return txs.reduce((acc, e) => {
    const txId = isAddressTransactionWithTransfers(e) ? e.tx.tx_id : e.tx_id;
    return acc.set(txId, (acc.get(txId) || 0) + 1);
  }, new Map());
}

function filterDuplicateTx(txs: (AddressTransactionWithTransfers | MempoolTransaction)[]) {
  const countOfTxIds = countTxIds(txs);

  return txs.filter(atx => {
    const tx = isAddressTransactionWithTransfers(atx) ? atx.tx : atx;
    const isDropped = tx.tx_status.includes('dropped');
    if (countOfTxIds.get(tx.tx_id) === 1 && !isDropped) return true;
    return tx.tx_status === 'success' || tx.tx_status.includes('abort');
  });
}

export function createTxDateFormatList(
  txs: (AddressTransactionWithTransfers | MempoolTransaction)[]
) {
  return formatTxDateMapAsList(groupTxsByDateMap(filterDuplicateTx(txs)));
}

export const getTxCaption = (transaction: Tx) => {
  switch (transaction.tx_type) {
    case 'smart_contract':
      return truncateMiddle(transaction.smart_contract.contract_id, 4);
    case 'contract_call':
      return transaction.contract_call.contract_id.split('.')[1];
    case 'token_transfer':
    case 'coinbase':
    case 'poison_microblock':
      return truncateMiddle(transaction.tx_id, 4);
    default:
      return null;
  }
};

const getAssetTransfer = (tx: Tx): TransactionEventFungibleAsset | null => {
  if (tx.tx_type !== 'contract_call') return null;
  if (tx.tx_status !== 'success') return null;
  const transfer = tx.events.find(event => event.event_type === 'fungible_token_asset');
  if (transfer?.event_type !== 'fungible_token_asset') return null;
  return transfer;
};

export const getTxValue = (tx: Tx, isOriginator: boolean): number | string | null => {
  if (tx.tx_type === 'token_transfer') {
    return `${isOriginator ? '-' : ''}${stacksValue({
      value: tx.token_transfer.amount,
      withTicker: false,
    })}`;
  }
  const transfer = getAssetTransfer(tx);
  if (transfer) return new BigNumber(transfer.asset.amount).toFormat();
  return null;
};

export const getTxTitle = (tx: Tx) => {
  switch (tx.tx_type) {
    case 'token_transfer':
      return 'Stacks Token';
    case 'contract_call':
      return tx.contract_call.function_name;
    case 'smart_contract':
      return getContractName(tx.smart_contract.contract_id);
    case 'coinbase':
      return `Coinbase ${(tx as CoinbaseTransaction).block_height}`;
    case 'poison_microblock':
      return 'Poison Microblock';
  }
};

// calculate the real amount of the token based on the decimal number
// specified in the corresponding token smart contract
export const calculateTokenTransferAmount = (
  asset: AssetWithMeta | undefined,
  amount: number | string | BigNumber
) => {
  if (!asset || !asset.meta) return;
  return new BigNumber(amount).shiftedBy(-asset.meta.decimals);
};
