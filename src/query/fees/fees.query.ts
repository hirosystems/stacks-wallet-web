import { useQuery, UseQueryResult } from 'react-query';

import { fetcher } from '@common/api/wrapped-fetch';
import { defaultNetworks } from '@common/constants';
import { TransactionFeeEstimation } from '@models/fees-types';

const STALE_TIME = 15 * 60 * 1000; // 15 min

const feeEstimationsQueryOptions = {
  keepPreviousData: true,
  cacheTime: STALE_TIME,
  refetchOnMount: false,
  refetchInterval: false,
  refetchOnReconnect: false,
} as const;

export function useGetFeeEstimations(transactionPayload: string, estimatedLen: number | null) {
  const fetchFeeEstimations = async () => {
    if (!transactionPayload) return;
    const response = await fetcher(defaultNetworks.testnet.url + '/v2/fees/transaction', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        transaction_payload: transactionPayload,
        estimated_len: estimatedLen,
      }),
    });
    const data = await response.json();
    return data as TransactionFeeEstimation;
  };

  return useQuery({
    queryKey: ['fee-estimations', transactionPayload],
    queryFn: fetchFeeEstimations,
    ...feeEstimationsQueryOptions,
  }) as UseQueryResult<TransactionFeeEstimation, Error>;
}
