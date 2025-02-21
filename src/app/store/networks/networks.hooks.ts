import { useMemo } from 'react';
import { useSelector } from 'react-redux';

import {
  ChainId,
  STACKS_MAINNET,
  STACKS_TESTNET,
  StacksNetwork,
  TransactionVersion,
} from '@stacks/network';
import { StacksNetwork as StacksNetworkV6 } from '@stacks/network-v6';
import { ChainID, TransactionVersion as TransactionVersionV6 } from '@stacks/transactions-v6';

import {
  type BitcoinNetworkModes,
  HIRO_API_BASE_URL_NAKAMOTO_TESTNET,
  bitcoinNetworkToNetworkMode,
} from '@leather.io/models';
import { whenStacksChainId } from '@leather.io/stacks';

import { useAppDispatch } from '@app/store';

import { networksActions } from './networks.actions';
import { selectAppRequestedNetworkId, useCurrentNetwork } from './networks.selectors';
import { PersistedNetworkConfiguration } from './networks.slice';

export function getStacksNetworkFromChainId(chainId: number) {
  if (chainId === ChainId.Mainnet) return STACKS_MAINNET;
  if (chainId === ChainId.Testnet) return STACKS_TESTNET;
  throw new Error(`Unknown chain ID: ${chainId}`);
}

export function useCurrentNetworkState() {
  const currentNetwork = useCurrentNetwork();

  return useMemo(() => {
    const isTestnet = currentNetwork.chain.stacks.chainId === ChainId.Testnet;
    const isNakamotoTestnet =
      currentNetwork.chain.stacks.url === HIRO_API_BASE_URL_NAKAMOTO_TESTNET;
    const mode = (isTestnet ? 'testnet' : 'mainnet') as BitcoinNetworkModes;
    return { ...currentNetwork, isTestnet, isNakamotoTestnet, mode };
  }, [currentNetwork]);
}

export function useCurrentStacksNetworkStateV6(): StacksNetworkV6 {
  const currentNetwork = useCurrentNetwork();

  return useMemo(() => {
    if (!currentNetwork) throw new Error('No current network');

    const stacksNetwork = new StacksNetworkV6({ url: currentNetwork.chain.stacks.url });
    stacksNetwork.version = whenStacksChainId(currentNetwork.chain.stacks.chainId)({
      [ChainID.Mainnet]: TransactionVersionV6.Mainnet,
      [ChainID.Testnet]: TransactionVersionV6.Testnet,
    });

    // Use actual chainId on network object, since it's used for signing
    stacksNetwork.chainId =
      currentNetwork.chain.stacks.subnetChainId ?? currentNetwork.chain.stacks.chainId;

    stacksNetwork.bnsLookupUrl = currentNetwork.chain.stacks.url || '';
    return stacksNetwork;
  }, [currentNetwork]);
}

export function useCurrentStacksNetworkState(): StacksNetwork {
  const currentNetwork = useCurrentNetwork();

  return useMemo(
    () => ({
      ...getStacksNetworkFromChainId(currentNetwork.chain.stacks.chainId),
      transactionVersion: whenStacksChainId(currentNetwork.chain.stacks.chainId)({
        [ChainId.Mainnet]: TransactionVersion.Mainnet,
        [ChainId.Testnet]: TransactionVersion.Testnet,
      }),
      client: {
        baseUrl: currentNetwork.chain.stacks.url,
      },
      chainId: currentNetwork.chain.stacks.subnetChainId ?? currentNetwork.chain.stacks.chainId,
      bnsLookupUrl: currentNetwork.chain.stacks.url || '',
    }),
    [currentNetwork]
  );
}

export function useNetworksActions() {
  const dispatch = useAppDispatch();

  return useMemo(
    () => ({
      addNetwork({
        id,
        name,
        chainId,
        subnetChainId,
        url,
        bitcoinNetwork,
        bitcoinUrl,
      }: PersistedNetworkConfiguration) {
        dispatch(
          networksActions.addNetwork({
            id,
            name,
            chainId,
            subnetChainId,
            url,
            bitcoinNetwork,
            mode: bitcoinNetworkToNetworkMode(bitcoinNetwork),
            bitcoinUrl,
          })
        );
        dispatch(networksActions.changeNetwork(id));
        return;
      },
      changeNetwork(id: string) {
        return dispatch(networksActions.changeNetwork(id));
      },
      removeNetwork(id: string) {
        return dispatch(networksActions.removeNetwork(id));
      },
    }),
    [dispatch]
  );
}

export function useAppRequestedNetworkId() {
  return useSelector(selectAppRequestedNetworkId);
}
