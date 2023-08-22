export interface MagicSupplier {
  controller: string;
  inboundFee: number;
  outboundFee: number;
  outboundBaseFee: number;
  inboundBaseFee: number;
  publicKey: string;
  funds: number;
  id: number;
}

export interface MagicInboundSwap {
  expiration: bigint;
  hash: Uint8Array;
  supplier: bigint;
  swapper: bigint;
  xbtc: bigint;
}
