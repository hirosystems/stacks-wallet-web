import { useMemo } from 'react';

import { HomePageSelectors } from '@tests/selectors/home.selectors';
import { css } from 'leather-styles/css';
import { Stack } from 'leather-styles/jsx';

import { useAlexSwappableAssets } from '@leather.io/query';
import {
  Avatar,
  Brc20AvatarIcon,
  BtcAvatarIcon,
  RunesAvatarIcon,
  Src20AvatarIcon,
  StxAvatarIcon,
} from '@leather.io/ui';
import { isString } from '@leather.io/utils';

import { copyToClipboard } from '@app/common/utils/copy-to-clipboard';
import { useToast } from '@app/features/toasts/use-toast';
import { useConfigRunesEnabled } from '@app/query/common/remote-config/remote-config.query';
import { useCurrentNetwork } from '@app/store/networks/networks.selectors';

import { receiveTabStyle } from '../receive-dialog';
import { ReceiveItem } from './receive-item';

interface ReceiveTokensProps {
  btcAddressNativeSegwit: string;
  btcAddressTaproot: string;
  stxAddress: string;
  onClickQrBtc(): void;
  onClickQrStx(): void;
}
export function ReceiveTokens({
  btcAddressNativeSegwit,
  btcAddressTaproot,
  stxAddress,
  onClickQrBtc,
  onClickQrStx,
}: ReceiveTokensProps) {
  const toast = useToast();
  const network = useCurrentNetwork();
  const runesEnabled = useConfigRunesEnabled();
  const { data: swapAssets = [] } = useAlexSwappableAssets(stxAddress);

  const receivableAssets = useMemo(
    () =>
      swapAssets
        .filter(asset => asset.name !== 'STX')
        .map(asset => ({
          ...asset,
          address: stxAddress,
        })),
    [stxAddress, swapAssets]
  );

  return (
    <Stack className={css(receiveTabStyle)}>
      <ReceiveItem
        address={btcAddressNativeSegwit}
        icon={<BtcAvatarIcon />}
        dataTestId={HomePageSelectors.ReceiveBtcNativeSegwitQrCodeBtn}
        onCopyAddress={async () => {
          await copyToClipboard(btcAddressNativeSegwit);
          toast.success('Copied to clipboard!');
        }}
        onClickQrCode={onClickQrBtc}
        title="Bitcoin (BTC)"
      />
      <ReceiveItem
        address={stxAddress}
        icon={<StxAvatarIcon />}
        dataTestId={HomePageSelectors.ReceiveStxQrCodeBtn}
        onCopyAddress={async () => {
          await copyToClipboard(stxAddress);
          toast.success('Copied to clipboard!');
        }}
        onClickQrCode={onClickQrStx}
        title="Stacks (STX)"
      />
      <ReceiveItem
        address={btcAddressTaproot}
        icon={<Brc20AvatarIcon />}
        dataTestId={HomePageSelectors.ReceiveBtcTaprootQrCodeBtn}
        onCopyAddress={async () => {
          await copyToClipboard(btcAddressTaproot);
          toast.success('Copied to clipboard!');
        }}
        // onClickQrCode={onClickQrOrdinal}
        title="BRC-20"
      />
      <ReceiveItem
        address={btcAddressNativeSegwit}
        icon={<Src20AvatarIcon />}
        // onClickQrCode={onClickQrStamp}
        onCopyAddress={async () => {
          await copyToClipboard(btcAddressNativeSegwit);
          toast.success('Copied to clipboard!');
        }}
        title="SRC-20"
      />
      {(network.chain.bitcoin.mode === 'testnet' || runesEnabled) && (
        <ReceiveItem
          address={btcAddressTaproot}
          icon={<RunesAvatarIcon />}
          // onClickQrCode={onClickQrStamp}
          onCopyAddress={async () => {
            await copyToClipboard(btcAddressTaproot);
            toast.success('Copied to clipboard!');
          }}
          title="Runes"
        />
      )}

      {receivableAssets.map(asset => (
        <ReceiveItem
          key={asset.name}
          address={asset.address}
          icon={
            isString(asset.icon) ? (
              <Avatar image={asset.icon} fallback={asset.fallback} />
            ) : (
              asset.icon
            )
          }
          // onClickQrCode={() => null}
          onCopyAddress={async () => {
            await copyToClipboard(asset.address);
            toast.success('Copied to clipboard!');
          }}
          title={asset.name}
        />
      ))}
    </Stack>
  );
}
