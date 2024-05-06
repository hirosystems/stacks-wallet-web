import type { RuneToken } from '@leather-wallet/query';

import { RunesAssetItemLayout } from './runes-asset-item.layout';

interface RunesAssetListProps {
  runes: RuneToken[];
}
export function RunesAssetList({ runes }: RunesAssetListProps) {
  return runes.map((rune, i) => (
    <RunesAssetItemLayout key={`${rune.tokenData.rune_id}${i}`} rune={rune} />
  ));
}
