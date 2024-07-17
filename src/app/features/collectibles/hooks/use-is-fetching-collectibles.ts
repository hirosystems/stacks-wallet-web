import { useIsFetching } from '@tanstack/react-query';

import { BitcoinQueryPrefixes, StacksQueryPrefixes } from '@leather.io/query';
import { sumNumbers } from '@leather.io/utils';

function areAnyQueriesFetching(...args: number[]) {
  return sumNumbers(args).toNumber() > 0;
}

export function useIsFetchingCollectiblesRelatedQuery() {
  // Ordinal inscriptions
  const n1 = useIsFetching({ queryKey: [BitcoinQueryPrefixes.TaprootAddressUtxos] });
  const n2 = useIsFetching({ queryKey: [BitcoinQueryPrefixes.InscriptionsByAddress] });
  const n3 = useIsFetching({ queryKey: [BitcoinQueryPrefixes.InscriptionMetadata] });
  const n4 = useIsFetching({ queryKey: [BitcoinQueryPrefixes.OrdinalTextContent] });
  const n5 = useIsFetching({ queryKey: [BitcoinQueryPrefixes.GetInscriptions] });

  // BNS
  const n6 = useIsFetching({ queryKey: [StacksQueryPrefixes.GetBnsNamesByAddress] });

  // NFTs
  const n7 = useIsFetching({ queryKey: [StacksQueryPrefixes.GetNftMetadata] });

  return areAnyQueriesFetching(n1, n2, n3, n4, n5, n6, n7);
}
