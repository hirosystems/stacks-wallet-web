import { SwapSelectors } from '@tests/selectors/swap.selectors';
import { sanitize } from 'dompurify';

import { type SwapAsset, isFtAsset, useGetFungibleTokenMetadataQuery } from '@leather.io/query';
import { Avatar, ItemLayout, Pressable } from '@leather.io/ui';
import { formatMoneyWithoutSymbol, isString } from '@leather.io/utils';

import { convertSwapAssetBalanceToFiat } from '@app/pages/swap/swap.utils';

interface SwapAssetItemProps {
  asset: SwapAsset;
  onClick(): void;
}
export function SwapAssetItem({ asset, onClick }: SwapAssetItemProps) {
  const { data: ftMetadata } = useGetFungibleTokenMetadataQuery(asset.principal);

  const ftMetadataName = ftMetadata && isFtAsset(ftMetadata) ? ftMetadata.name : asset.name;
  const displayName = asset.displayName ?? ftMetadataName;
  const fallback = asset.name.slice(0, 2);
  const fiatBalance = convertSwapAssetBalanceToFiat(asset);

  return (
    <Pressable data-testid={SwapSelectors.SwapAssetListItem} onClick={onClick} my="space.02">
      <ItemLayout
        img={
          isString(asset.icon) ? (
            <Avatar image={sanitize(asset.icon)} fallback={fallback} />
          ) : (
            asset.icon
          )
        }
        titleLeft={displayName}
        captionLeft={asset.name}
        titleRight={formatMoneyWithoutSymbol(asset.balance)}
        captionRight={fiatBalance}
      />
    </Pressable>
  );
}
