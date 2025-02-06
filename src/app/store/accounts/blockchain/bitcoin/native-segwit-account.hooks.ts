import { useMemo } from 'react';
import { useSelector } from 'react-redux';

import { createSelector } from '@reduxjs/toolkit';
import { Psbt } from 'bitcoinjs-lib';

import {
  deriveAddressIndexZeroFromAccount,
  deriveNativeSegwitAccountFromRootKeychain,
  getNativeSegwitPaymentFromAddressIndex,
  lookUpLedgerKeysByPath,
  makeNativeSegwitAccountDerivationPath,
} from '@leather.io/bitcoin';
import { extractAddressIndexFromPath } from '@leather.io/crypto';
import { bitcoinNetworkToNetworkMode } from '@leather.io/models';
import { useBitcoinClient } from '@leather.io/query';
import { reverseBytes } from '@leather.io/utils';

import { BitcoinInputSigningConfig } from '@shared/crypto/bitcoin/signer-config';
import { analytics } from '@shared/utils/analytics';

import { mnemonicToRootNode } from '@app/common/keychain/keychain';
import { selectCurrentNetwork } from '@app/store/networks/networks.selectors';
import { selectCurrentAccountIndex } from '@app/store/software-keys/software-key.selectors';

import { useCurrentAccountIndex } from '../../account';
import {
  bitcoinAccountBuilderFactory,
  useBitcoinExtendedPublicKeyVersions,
} from './bitcoin-keychain';
import {
  bitcoinAddressIndexSignerFactory,
  useMakeBitcoinNetworkSignersForPaymentType,
} from './bitcoin-signer';

const selectNativeSegwitAccountBuilder = bitcoinAccountBuilderFactory(
  deriveNativeSegwitAccountFromRootKeychain,
  lookUpLedgerKeysByPath(makeNativeSegwitAccountDerivationPath)
);

const selectCurrentNetworkNativeSegwitAccountBuilder = createSelector(
  selectNativeSegwitAccountBuilder,
  selectCurrentNetwork,
  (nativeSegwitKeychains, network) =>
    nativeSegwitKeychains[bitcoinNetworkToNetworkMode(network.chain.bitcoin.bitcoinNetwork)]
);

export function useGenerateNativeSegwitAccount() {
  return useSelector(selectCurrentNetworkNativeSegwitAccountBuilder);
}

const selectCurrentNativeSegwitAccount = createSelector(
  selectCurrentNetworkNativeSegwitAccountBuilder,
  selectCurrentAccountIndex,
  (generateAccount, accountIndex) => generateAccount(accountIndex)
);

export function useCurrentNativeSegwitAccount() {
  return useSelector(selectCurrentNativeSegwitAccount);
}

export function useNativeSegwitNetworkSigners() {
  const { mainnet: mainnetKeychain, testnet: testnetKeychain } = useSelector(
    selectNativeSegwitAccountBuilder
  );

  return useMakeBitcoinNetworkSignersForPaymentType(
    mainnetKeychain,
    testnetKeychain,
    getNativeSegwitPaymentFromAddressIndex
  );
}

export function useNativeSegwitSigner(accountIndex: number) {
  const account = useGenerateNativeSegwitAccount()(accountIndex);
  const extendedPublicKeyVersions = useBitcoinExtendedPublicKeyVersions();

  return useMemo(() => {
    if (!account) return;
    return bitcoinAddressIndexSignerFactory({
      accountIndex,
      accountKeychain: account.keychain,
      paymentFn: getNativeSegwitPaymentFromAddressIndex,
      network: account.network,
      extendedPublicKeyVersions,
    });
  }, [account, accountIndex, extendedPublicKeyVersions]);
}

export function useCurrentAccountNativeSegwitSigner() {
  const currentAccountIndex = useCurrentAccountIndex();
  return useNativeSegwitSigner(currentAccountIndex);
}

// TODO: as ledger users are able to have only stacks account on their devices, this hook throws an unnecessary error.
// To alleviate that, use useCurrentAccountNativeSegwitIndexZeroSignerNullable
export function useCurrentAccountNativeSegwitIndexZeroSigner() {
  const signer = useCurrentAccountNativeSegwitSigner();
  return useMemo(() => {
    if (!signer) throw new Error('No signer');
    return signer(0);
  }, [signer]);
}

export function useCurrentAccountNativeSegwitIndexZeroSignerNullable() {
  const signer = useCurrentAccountNativeSegwitSigner();
  return useMemo(() => {
    if (!signer) return undefined;
    return signer(0);
  }, [signer]);
}

/**
 * @deprecated Use signer.address instead
 */
export function useCurrentAccountNativeSegwitAddressIndexZero() {
  const signer = useCurrentAccountNativeSegwitSigner();
  return useMemo(() => signer?.(0).payment.address, [signer]) as string;
}

/**
 * @deprecated Use signer.address instead
 */
export function useNativeSegwitAccountIndexAddressIndexZero(accountIndex: number) {
  const signer = useNativeSegwitSigner(accountIndex)?.(0);
  // could it be this?
  return signer?.payment.address as string;
}

export function getNativeSegwitMainnetAddressFromMnemonic(secretKey: string) {
  return (accountIndex: number) => {
    const rootNode = mnemonicToRootNode(secretKey);
    const account = deriveNativeSegwitAccountFromRootKeychain(rootNode, 'mainnet')(accountIndex);
    return getNativeSegwitPaymentFromAddressIndex(
      deriveAddressIndexZeroFromAccount(account.keychain),
      'mainnet'
    );
  };
}

export function useUpdateLedgerSpecificNativeSegwitUtxoHexForAdddressIndexZero() {
  const bitcoinClient = useBitcoinClient();

  return async (tx: Psbt, inputSigningConfig: BitcoinInputSigningConfig[]) => {
    const inputsTxHex = await Promise.all(
      tx.txInputs.map(input =>
        bitcoinClient.transactionsApi.getBitcoinTransactionHex(
          // txids are encoded onchain in reverse byte order
          reverseBytes(input.hash).toString('hex')
        )
      )
    );

    inputSigningConfig.forEach(({ index }) => {
      // decorate input with nonWitnessUtxo unless it already exists
      if (!tx.data.inputs[index].nonWitnessUtxo) {
        tx.updateInput(index, {
          nonWitnessUtxo: Buffer.from(inputsTxHex[index], 'hex'),
        });
        void analytics.track('ledger_nativesegwit_add_nonwitnessutxo', {
          action: 'add_nonwitness_utxo',
        });
      } else {
        void analytics.track('ledger_nativesegwit_add_nonwitnessutxo', {
          action: 'skip_add_nonwitness_utxo',
        });
      }
    });
  };
}

export function useUpdateLedgerSpecificNativeSegwitBip32DerivationForAdddressIndexZero() {
  const createNativeSegwitSigner = useCurrentAccountNativeSegwitSigner();

  return async (tx: Psbt, fingerprint: string, inputSigningConfig: BitcoinInputSigningConfig[]) => {
    inputSigningConfig.forEach(({ index, derivationPath }) => {
      const nativeSegwitSigner = createNativeSegwitSigner?.(
        extractAddressIndexFromPath(derivationPath)
      );

      if (!nativeSegwitSigner)
        throw new Error(`Unable to update input for path ${derivationPath}}`);

      tx.updateInput(index, {
        bip32Derivation: [
          {
            masterFingerprint: Buffer.from(fingerprint, 'hex'),
            pubkey: Buffer.from(nativeSegwitSigner.publicKey),
            path: derivationPath,
          },
        ],
      });
    });
  };
}
