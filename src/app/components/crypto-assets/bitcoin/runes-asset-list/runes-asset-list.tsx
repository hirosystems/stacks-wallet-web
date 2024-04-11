import type { RuneToken } from '@app/query/bitcoin/bitcoin-client';

import { RunesAssetItemLayout } from './runes-asset-item.layout';

interface RunesAssetListProps {
  runes: RuneToken[];
}
export function RunesAssetList({ runes }: RunesAssetListProps) {
  return runes.map(rune => <RunesAssetItemLayout key={rune.rune_id} rune={rune} />);
}
