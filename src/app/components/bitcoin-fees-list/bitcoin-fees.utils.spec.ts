import { describe, expect, it, vi } from 'vitest';

import { mockUtxos } from '@leather.io/query';
import { createMoney } from '@leather.io/utils';

import {
  getApproximateFee,
  getBitcoinFee,
  getBitcoinSendMaxFee,
  getBtcFeeValue,
} from './bitcoin-fees.utils';

describe('bitcoin-fees.utils', () => {
  const mockRecipients = [
    {
      address: 'bc1qps90ws94pvk548y9jg03gn5lwjqnyud4lg6y56',
      amount: createMoney(300, 'BTC'),
    },
  ];

  describe('getBitcoinFee', () => {
    it('returns fee when calculation succeeds', () => {
      const result = getBitcoinFee({
        recipients: mockRecipients,
        utxos: mockUtxos,
        feeRate: 1,
      });
      expect(result).toBe(141);
    });

    it('returns null when calculation fails', () => {
      const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {});
      const result = getBitcoinFee({
        recipients: [],
        utxos: [],
        feeRate: 0,
      });
      expect(result).toBeNull();
      consoleSpy.mockRestore();
    });
  });

  describe('getBitcoinSendMaxFee', () => {
    it('returns fee when calculation succeeds', () => {
      const result = getBitcoinSendMaxFee({
        recipients: mockRecipients,
        utxos: mockUtxos,
        feeRate: 1,
      });
      expect(result).toBe(110);
    });

    it('returns null when calculation fails', () => {
      const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {});
      const result = getBitcoinSendMaxFee({
        recipients: mockRecipients,
        utxos: [],
        feeRate: 1,
      });
      expect(result).toBeNull();
      consoleSpy.mockRestore();
    });
  });

  describe('getApproximateFee', () => {
    it('calculates approximate fee correctly', () => {
      const result = getApproximateFee({
        feeRate: 10,
        recipients: mockRecipients,
        utxos: mockUtxos,
      });
      expect(result).toBeGreaterThan(0);
    });
  });

  describe('getBtcFeeValue', () => {
    it('formats BTC fee value correctly', () => {
      const result = getBtcFeeValue(1000);
      expect(result).toBe('0.00001000 BTC');
    });
  });
});
