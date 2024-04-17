import { validate } from 'bitcoin-address-validation';

import type { RpcSendTransferRecipient } from '@shared/rpc/methods/send-transfer';

import { UtxoResponseItem } from '@app/query/bitcoin/bitcoin-client';

import {
  filterUneconomicalUtxos,
  filterUneconomicalUtxosMultipleRecipients,
  getSizeInfo,
  getSizeInfoMultipleRecipients,
} from '../utils';

export interface DetermineUtxosForSpendArgs {
  amount: number;
  feeRate: number;
  recipient: string;
  utxos: UtxoResponseItem[];
}

export class InsufficientFundsError extends Error {
  constructor() {
    super('Insufficient funds');
  }
}

export function determineUtxosForSpendAll({
  amount,
  feeRate,
  recipient,
  utxos,
}: DetermineUtxosForSpendArgs) {
  if (!validate(recipient)) throw new Error('Cannot calculate spend of invalid address type');
  const filteredUtxos = filterUneconomicalUtxos({ utxos, feeRate, address: recipient });

  const sizeInfo = getSizeInfo({
    inputLength: filteredUtxos.length,
    outputLength: 1,
    recipient,
  });

  // Fee has already been deducted from the amount with send all
  const outputs = [{ value: BigInt(amount), address: recipient }];

  const fee = Math.ceil(sizeInfo.txVBytes * feeRate);

  return {
    inputs: filteredUtxos,
    outputs,
    size: sizeInfo.txVBytes,
    fee,
  };
}

export function determineUtxosForSpend({
  amount,
  feeRate,
  recipient,
  utxos,
}: DetermineUtxosForSpendArgs) {
  if (!validate(recipient)) throw new Error('Cannot calculate spend of invalid address type');

  const orderedUtxos = utxos.sort((a, b) => b.value - a.value);

  const filteredUtxos = filterUneconomicalUtxos({
    utxos: orderedUtxos,
    feeRate,
    address: recipient,
  });

  const neededUtxos = [];
  let sum = 0n;
  let sizeInfo = null;

  for (const utxo of filteredUtxos) {
    sizeInfo = getSizeInfo({
      inputLength: neededUtxos.length,
      outputLength: 2,
      recipient,
    });
    if (sum >= BigInt(amount) + BigInt(Math.ceil(sizeInfo.txVBytes * feeRate))) break;

    sum += BigInt(utxo.value);
    neededUtxos.push(utxo);
  }

  if (!sizeInfo) throw new InsufficientFundsError();

  const fee = Math.ceil(sizeInfo.txVBytes * feeRate);

  const outputs = [
    // outputs[0] = the desired amount going to recipient
    { value: BigInt(amount), address: recipient },
    // outputs[1] = the remainder to be returned to a change address
    { value: sum - BigInt(amount) - BigInt(fee) },
  ];

  return {
    filteredUtxos,
    inputs: neededUtxos,
    outputs,
    size: sizeInfo.txVBytes,
    fee,
  };
}

export interface DetermineUtxosForSpendArgsMultipleRecipients {
  amount: number;
  feeRate: number;
  recipients: RpcSendTransferRecipient[];
  utxos: UtxoResponseItem[];
}

interface DetermineUtxosForSpendAllArgsMultipleRecipients {
  feeRate: number;
  recipients: RpcSendTransferRecipient[];
  utxos: UtxoResponseItem[];
}

export function determineUtxosForSpendAllMultipleRecipients({
  feeRate,
  recipients,
  utxos,
}: DetermineUtxosForSpendAllArgsMultipleRecipients) {
  recipients.forEach(recipient => {
    if (!validate(recipient.address))
      throw new Error('Cannot calculate spend of invalid address type');
  });
  const filteredUtxos = filterUneconomicalUtxosMultipleRecipients({ utxos, feeRate, recipients });

  const sizeInfo = getSizeInfoMultipleRecipients({
    inputLength: filteredUtxos.length,
    isSendMax: true,
    recipients,
  });

  // Fee has already been deducted from the amount with send all
  const outputs = recipients.map(({ address, amount }) => ({
    value: BigInt(amount.amount.toNumber()),
    address,
  }));

  const fee = Math.ceil(sizeInfo.txVBytes * feeRate);

  return {
    inputs: filteredUtxos,
    outputs,
    size: sizeInfo.txVBytes,
    fee,
  };
}

export function determineUtxosForSpendMultipleRecipients({
  amount,
  feeRate,
  recipients,
  utxos,
}: DetermineUtxosForSpendArgsMultipleRecipients) {
  recipients.forEach(recipient => {
    if (!validate(recipient.address))
      throw new Error('Cannot calculate spend of invalid address type');
  });

  const orderedUtxos = utxos.sort((a, b) => b.value - a.value);

  const filteredUtxos = filterUneconomicalUtxosMultipleRecipients({
    utxos: orderedUtxos,
    feeRate,
    recipients,
  });

  const neededUtxos = [];
  let sum = 0n;
  let sizeInfo = null;

  for (const utxo of filteredUtxos) {
    sizeInfo = getSizeInfoMultipleRecipients({
      inputLength: neededUtxos.length,
      recipients,
    });
    if (sum >= BigInt(amount) + BigInt(Math.ceil(sizeInfo.txVBytes * feeRate))) break;

    sum += BigInt(utxo.value);
    neededUtxos.push(utxo);
  }

  if (!sizeInfo) throw new InsufficientFundsError();

  const fee = Math.ceil(sizeInfo.txVBytes * feeRate);

  const outputs: {
    value: bigint;
    address?: string;
  }[] = [
    // outputs[0] = the desired amount going to recipient
    ...recipients.map(({ address, amount }) => ({
      value: BigInt(amount.amount.toNumber()),
      address,
    })),
    // outputs[recipients.length] = the remainder to be returned to a change address
    { value: sum - BigInt(amount) - BigInt(fee) },
  ];

  return {
    filteredUtxos,
    inputs: neededUtxos,
    outputs,
    size: sizeInfo.txVBytes,
    fee,
  };
}
