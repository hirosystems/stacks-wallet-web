import { useSelector } from 'react-redux';

import { RootState } from '@app/store';

export const selectStacksChain = (state: RootState) => state.chains.stx;

export function useStacksChain() {
  return useSelector(selectStacksChain);
}
