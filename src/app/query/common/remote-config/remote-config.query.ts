import { useMemo } from 'react';

import { useRemoteConfig } from '@leather.io/query';
import { getPrincipalFromContractId } from '@leather.io/utils';

import { useWalletType } from '@app/common/use-wallet-type';
import { useHasCurrentBitcoinAccount } from '@app/store/accounts/blockchain/bitcoin/bitcoin.hooks';
import { useCurrentNetwork } from '@app/store/networks/networks.selectors';

export {
  HiroMessage,
  AvailableRegions,
  ActiveFiatProvider,
  useRemoteLeatherMessages,
  useActiveFiatProviders,
  useHasFiatProviders,
  useRecoverUninscribedTaprootUtxosFeatureEnabled,
  useConfigNftMetadataEnabled,
  useConfigRunesEnabled,
  useConfigSwapsEnabled,
} from '@leather.io/query';

export function useConfigBitcoinEnabled() {
  const { whenWallet } = useWalletType();
  const config = useRemoteConfig();
  const hasBitcoinAccount = useHasCurrentBitcoinAccount();
  return whenWallet({
    ledger: (config?.bitcoinEnabled ?? true) && hasBitcoinAccount,
    software: config?.bitcoinEnabled ?? true,
  });
}

export function useConfigBitcoinSendEnabled() {
  const { whenWallet } = useWalletType();
  const config = useRemoteConfig();
  const hasBitcoinAccount = useHasCurrentBitcoinAccount();
  return whenWallet({
    ledger: config?.bitcoinSendEnabled && hasBitcoinAccount,
    software: config?.bitcoinSendEnabled ?? true,
  });
}

// Update in mono repo
interface SbtcConfig {
  enabled: boolean;
  contracts: Record<'mainnet' | 'testnet', { address: string }>;
  emilyApiUrl: string;
  leatherSponsorApiUrl: string;
  swapsEnabled: boolean;
}

export function useConfigSbtc() {
  const config = useRemoteConfig();
  const network = useCurrentNetwork();
  const sbtc = config?.sbtc as SbtcConfig;

  return useMemo(() => {
    const displayPromoCardOnNetworks = (sbtc as any)?.showPromoLinkOnNetworks ?? [];
    const contractIdMainnet = sbtc?.contracts.mainnet.address ?? '';
    const contractIdTestnet = sbtc?.contracts.testnet.address ?? '';

    return {
      isSbtcEnabled: sbtc?.enabled ?? false,
      isSbtcSwapsEnabled: (sbtc?.enabled && sbtc?.swapsEnabled) ?? false,
      emilyApiUrl: sbtc?.emilyApiUrl ?? '',
      leatherSponsorApiUrl: sbtc?.leatherSponsorApiUrl ?? '',
      contractId: network.chain.bitcoin.mode === 'mainnet' ? contractIdMainnet : contractIdTestnet,
      isSbtcContract(contract: string) {
        return (
          contract === getPrincipalFromContractId(contractIdMainnet) ||
          contract === getPrincipalFromContractId(contractIdTestnet)
        );
      },
      shouldDisplayPromoCard: displayPromoCardOnNetworks.includes(network.id),
    };
  }, [network.chain.bitcoin.mode, network.id, sbtc]);
}
