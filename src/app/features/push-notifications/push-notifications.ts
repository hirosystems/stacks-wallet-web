import { useMemo } from 'react';

import type { HDKey } from '@scure/bip32';
import type { P2Ret } from '@scure/btc-signer/payment';
import axios from 'axios';

import {
  type SupportedPaymentType,
  deriveAddressIndexZeroFromAccount,
  getNativeSegwitPaymentFromAddressIndex,
  getTaprootPaymentFromAddressIndex,
  isSupportedMessageSigningPaymentType,
} from '@leather.io/bitcoin';
import type { BitcoinNetworkModes } from '@leather.io/models';
import { createNullArrayOfLength, isDefined } from '@leather.io/utils';

import { useOnMount } from '@app/common/hooks/use-on-mount';
import { useGenerateNativeSegwitAccount } from '@app/store/accounts/blockchain/bitcoin/native-segwit-account.hooks';
import { useGenerateTaprootAccount } from '@app/store/accounts/blockchain/bitcoin/taproot-account.hooks';
import { useStacksChain } from '@app/store/chains/stx-chain.selectors';

const paymentFnMap: Record<
  SupportedPaymentType,
  (keychain: HDKey, network: BitcoinNetworkModes) => P2Ret
> = {
  p2tr: getTaprootPaymentFromAddressIndex,
  p2wpkh: getNativeSegwitPaymentFromAddressIndex,
};

isSupportedMessageSigningPaymentType;

export function useInitPushNotifications() {
  const { highestAccountIndex } = useStacksChain().default;
  const createNativeSegwitAccount = useGenerateNativeSegwitAccount();
  const createTaprootAccount = useGenerateTaprootAccount();

  const addresses = useMemo(
    () =>
      createNullArrayOfLength(highestAccountIndex).flatMap((_, index) =>
        [createNativeSegwitAccount(index), createTaprootAccount(index)]
          .filter(isDefined)
          .map(account => {
            // console.log(account);
            const addressIndexKeychain = deriveAddressIndexZeroFromAccount(account.keychain);
            if (account.type !== 'p2tr' && account.type !== 'p2wpkh') return undefined;
            const payment = paymentFnMap[account.type](addressIndexKeychain, 'mainnet');
            return payment.address;
          })
      ),
    [createNativeSegwitAccount, createTaprootAccount, highestAccountIndex]
  );

  useOnMount(async () => {
    // console.log('addresses', addresses);

    const { fcmRegistrationToken } = await chrome.storage.local.get('fcmRegistrationToken');

    // const resp = await axios.post(
    //   'https://leather-api-gateway-staging.wallet-6d1.workers.dev/v1/notifications/register',
    //   {
    //     addresses,
    //     network: 'mainnet',
    //     chain: 'bitcoin',
    //     notificationToken: fcmRegistrationToken,
    //   }
    // );

    // eslint-disable-next-line no-console
    // console.log({ resp });
  });
}
