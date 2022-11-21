import { useCallback, useMemo } from 'react';

import { stxToMicroStx } from '@stacks/ui-utils';
import BigNumber from 'bignumber.js';
import * as yup from 'yup';

import { STX_DECIMALS } from '@shared/constants';
import { Money, createMoney } from '@shared/models/money.model';
import { isNumber } from '@shared/utils';

import { formatInsufficientBalanceError, formatPrecisionError } from '@app/common/error-formatters';
import { SendFormErrorMessages } from '@app/common/error-messages';
import { useWallet } from '@app/common/hooks/use-wallet';
import { countDecimals } from '@app/common/utils';
import { stxAmountSchema } from '@app/common/validation/currency-schema';
import { nonceSchema } from '@app/common/validation/nonce-schema';
import {
  stxAddressNetworkValidatorFactory,
  stxAddressSchema,
  stxNotCurrentAddressValidatorFactory,
} from '@app/common/validation/stx-address-schema';
import { useFeeSchema } from '@app/common/validation/use-fee-schema';
import { transactionMemoSchema } from '@app/common/validation/validate-memo';
import { useSelectedAssetBalance } from '@app/pages/send-tokens/hooks/use-selected-asset-balance';
import { useCurrentStacksAccountAnchoredBalances } from '@app/query/stacks/balance/balance.hooks';
import { useStacksClient } from '@app/store/common/api-clients.hooks';

function makeStacksFungibleTokenSchema(balance: Money) {
  const { amount, symbol, decimals } = balance;
  return yup
    .number()
    .test((value: unknown, context) => {
      if (!isNumber(value)) return false;
      if (!decimals && countDecimals(value) > 0)
        return context.createError({
          message: SendFormErrorMessages.DoesNotSupportDecimals,
        });
      if (countDecimals(value) > decimals) {
        return context.createError({ message: formatPrecisionError(symbol, decimals) });
      }
      return true;
    })
    .test({
      message: formatInsufficientBalanceError(amount, symbol),
      test(value: unknown) {
        if (!isNumber(value) || !amount) return false;
        return new BigNumber(value).isLessThanOrEqualTo(amount);
      },
    });
}

export function useFungibleTokenAmountSchema(selectedAssetId: string) {
  const { selectedAssetBalance } = useSelectedAssetBalance(selectedAssetId);
  return useCallback(
    () => makeStacksFungibleTokenSchema(selectedAssetBalance?.balance ?? createMoney(0, 'STX')),
    [selectedAssetBalance]
  );
}

interface UseSendFormValidationArgs {
  selectedAssetId: string;
  setAssetError(error: string | undefined): void;
}
export const useSendFormValidation = ({
  selectedAssetId,
  setAssetError,
}: UseSendFormValidationArgs) => {
  const { currentNetwork, currentAccountStxAddress } = useWallet();
  const { data: stacksBalances } = useCurrentStacksAccountAnchoredBalances();
  const { isStx, selectedAssetBalance } = useSelectedAssetBalance(selectedAssetId);
  const fungibleTokenSchema = useFungibleTokenAmountSchema(selectedAssetId);
  const feeSchema = useFeeSchema();
  const client = useStacksClient();

  // TODO: Can this be removed?
  const selectedAssetSchema = useCallback(
    () =>
      yup.mixed().test(() => {
        if (!selectedAssetBalance) {
          setAssetError(SendFormErrorMessages.MustSelectAsset);
        } else {
          setAssetError(undefined);
        }
        return !!selectedAssetBalance;
      }),
    [selectedAssetBalance, setAssetError]
  );

  const stxAmountFormSchema = useCallback(
    () =>
      stxAmountSchema(formatPrecisionError('STX', STX_DECIMALS)).test({
        message: formatInsufficientBalanceError(stacksBalances?.stx.availableStx.amount, 'STX'),
        test(value: unknown) {
          const fee = stxToMicroStx(this.parent.fee);
          if (!stacksBalances || !isNumber(value)) return false;
          const availableBalanceLessFee = stacksBalances?.stx.availableStx.amount.minus(fee);
          return availableBalanceLessFee.isGreaterThanOrEqualTo(stxToMicroStx(value));
        },
      }),
    [stacksBalances]
  );

  const amountSchema = useCallback(
    () =>
      yup
        .number()
        .required()
        .positive(SendFormErrorMessages.MustNotBeZero)
        .concat(isStx ? stxAmountFormSchema() : fungibleTokenSchema()),
    [fungibleTokenSchema, isStx, stxAmountFormSchema]
  );

  const addressSchema = stxAddressSchema(SendFormErrorMessages.InvalidAddress)
    .test({
      message: SendFormErrorMessages.IncorrectAddressMode,
      test: stxAddressNetworkValidatorFactory(currentNetwork),
    })
    .test({
      message: SendFormErrorMessages.SameAddress,
      test: stxNotCurrentAddressValidatorFactory(currentAccountStxAddress || ''),
    });

  const recipientAddressOrBnsNameSchema = yup.string().test({
    name: 'recipientAddressOrBnsName',
    test: async value => {
      try {
        await addressSchema.validate(value);
        return true;
      } catch (e) {}
      try {
        const res = await client.namesApi.getNameInfo({ name: value ?? '' });
        if (typeof res.address !== 'string' || res.address.length === 0) return false;
        return true;
      } catch (e) {
        return false;
      }
    },
  });

  const recipientSchema = addressSchema;

  return useMemo(
    () =>
      yup.object({
        amount: amountSchema(),
        fee: feeSchema(),
        memo: transactionMemoSchema(SendFormErrorMessages.MemoExceedsLimit),
        nonce: nonceSchema,
        recipient: recipientSchema,
        recipientAddressOrBnsName: recipientAddressOrBnsNameSchema,
        selectedAsset: selectedAssetSchema(),
      }),
    [recipientAddressOrBnsNameSchema, amountSchema, feeSchema, recipientSchema, selectedAssetSchema]
  );
};
