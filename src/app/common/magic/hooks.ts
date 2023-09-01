import { useCurrentNetworkState } from '@app/store/networks/networks.hooks';

import { getMagicContracts, initMagicClient } from '.';
import { useCurrentStacksAccount } from '@app/store/accounts/blockchain/stacks/stacks-account.hooks';
import { fetchSwapperId, fetchSuppliers } from './fetch';
import { MagicFetchContextWithElectrum } from './fetch/constants';
import { MagicSupplier } from './models';
import { convertBtcToSats } from './utils';
import { bytesToHex, intToBigInt } from '@stacks/common';
import { useElectrumClient } from '../electrum/provider';
import { randomBytes } from '@stacks/encryption';
import { useSwapActions } from '../hooks/use-swap-actions';

export function useMagicClient() {
  const network = useCurrentNetworkState();
  const client = initMagicClient({ network: network.id });

  return client;
}

export function useMagicSwap() {
  const { createInboundSwap } = useInboundMagicSwap();

  return {
    createInboundSwap,
    createOutboundSwap: () => { return; }
  }
}

export function useInboundMagicSwap() {
  const { createSwap } = useSwapActions();
  const account = useCurrentStacksAccount();
  const network = useCurrentNetworkState();

  const magicClient = useMagicClient();
  const electrumClient = useElectrumClient();

  const magicContracts = getMagicContracts(network.id);

  const fetchContext = {
    network: network.id,
    electrumClient,
    magicContracts,
    magicClient,
  }

  async function createInboundSwap(btcAmount: number) {
    const suppliers = await fetchSuppliers(fetchContext);
    const swapperId = await fetchSwapperId(account?.address || '', fetchContext);

    const bestSupplier = await getBestSupplier(btcAmount, false, fetchContext);

    const supplier = suppliers.find(s => s.id === bestSupplier.id);

    if (!account || !supplier) {
      throw new Error('Invalid user state.');
    }

    const secret = randomBytes(32);
    const publicKey = account.dataPublicKey;
    const expiration = 10;

    const createdAt = new Date().getTime();

    const swap = createSwap({
      type: 'magic',
      direction: 'inbound',
      id: createdAt.toString(),
      secret: bytesToHex(secret),
      amount: convertBtcToSats(btcAmount).toString(),
      expiration,
      createdAt,
      publicKey,
      swapperId,
      supplier,
    });

    // Generate HTLC address ..

    return swap.payload;
  }

  return {
    createInboundSwap,
  }
}

function getSwapFees(supplier: MagicSupplier, isOutbound: boolean) {
  const baseFee = isOutbound ? supplier.outboundBaseFee : supplier.inboundBaseFee;
  const feeRate = isOutbound ? supplier.outboundFee : supplier.inboundFee;

  return {
    baseFee,
    feeRate,
  };
}

async function getSuppliers(isOutbound: boolean, context: MagicFetchContextWithElectrum) {
  const suppliers = await fetchSuppliers(context);

  return suppliers
    .map(supplier => {
      const { baseFee, feeRate } = getSwapFees(supplier, isOutbound);
      const capacity = isOutbound ? supplier.btc : supplier.funds;

      return {
        baseFee,
        feeRate,
        capacity: BigInt(capacity),
        id: supplier.id,
        controller: supplier.controller,
      };
    })
    .sort(supplier => -supplier.baseFee);
}

function getSwapAmount(amount: bigint, feeRate: number, baseFee: number | null) {
  const withBps = (amount * (10000n - intToBigInt(feeRate, true))) / 10000n;

  if (baseFee !== null) {
    return withBps - BigInt(baseFee);
  }

  return withBps;
}

async function getBestSupplier(btcAmount: number, isOutbound: boolean, context: MagicFetchContextWithElectrum) {
  const suppliers = await getSuppliers(isOutbound, context);
  const [defaultSupplier] = suppliers;

  const satsAmount = convertBtcToSats(btcAmount);
  const suppliersWithCapacity = suppliers.filter(op => satsAmount < op.capacity);

  if (suppliersWithCapacity.length === 0) {
    return defaultSupplier;
  }

  const sortedFee = suppliersWithCapacity.sort((left, right) => {
    const leftAmount = getSwapAmount(satsAmount, left.feeRate, left.baseFee);
    const rightAmount = getSwapAmount(satsAmount, right.feeRate, right.baseFee);

    if (leftAmount > rightAmount) {
      return -1;
    } else if (leftAmount < rightAmount) {
      return 1;
    } else {
      return 0;
    }
  });

  return sortedFee[0];

}
