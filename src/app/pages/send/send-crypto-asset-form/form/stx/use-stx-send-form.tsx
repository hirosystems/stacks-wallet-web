import { useMemo } from 'react';

import { FormikHelpers } from 'formik';
import * as yup from 'yup';

import { STX_DECIMALS } from '@leather.io/constants';
import {
  useCalculateStacksTxFees,
  useStacksValidateFeeByNonce,
  useStxCryptoAssetBalance,
} from '@leather.io/query';
import { convertAmountToBaseUnit, createMoney } from '@leather.io/utils';

import { logger } from '@shared/logger';
import { StacksSendFormValues } from '@shared/models/form.model';

import {
  stxAmountValidator,
  stxAvailableBalanceValidator,
} from '@app/common/validation/forms/amount-validators';
import { stxFeeValidator } from '@app/common/validation/forms/fee-validators';
import { useUpdatePersistedSendFormValues } from '@app/features/popup-send-form-restoration/use-update-persisted-send-form-values';
import { useCurrentStacksAccountAddress } from '@app/store/accounts/blockchain/stacks/stacks-account.hooks';
import {
  useGenerateStxTokenTransferUnsignedTx,
  useStxTokenTransferUnsignedTxState,
} from '@app/store/transactions/token-transfer.hooks';

import { useStacksCommonSendForm } from '../../family/stacks/use-stacks-common-send-form';
import { useSendFormNavigate } from '../../hooks/use-send-form-navigate';

export function useStxSendForm() {
  const unsignedTx = useStxTokenTransferUnsignedTxState();
  const { data: stxFees } = useCalculateStacksTxFees(unsignedTx);
  const generateTx = useGenerateStxTokenTransferUnsignedTx();
  const { onFormStateChange } = useUpdatePersistedSendFormValues();
  const sendFormNavigate = useSendFormNavigate();
  const address = useCurrentStacksAccountAddress();
  const { changeFeeByNonce } = useStacksValidateFeeByNonce(address);

  // get stx balance
  const { filteredBalanceQuery } = useStxCryptoAssetBalance(address);
  const { data: balance } = filteredBalanceQuery;
  const availableBalance = balance?.availableUnlockedBalance ?? createMoney(0, 'STX');

  const sendMaxBalance = useMemo(() => {
    const standardFee = stxFees?.estimates[1]?.fee.amount || 0;
    return convertAmountToBaseUnit(availableBalance.amount.minus(standardFee), STX_DECIMALS);
  }, [availableBalance.amount, stxFees?.estimates]);

  const { initialValues, checkFormValidation, recipient, memo, nonce } = useStacksCommonSendForm({
    symbol: 'STX',
    availableTokenBalance: availableBalance,
  });

  return {
    availableBalance,
    initialValues,
    onFormStateChange,
    sendMaxBalance,
    stxFees,

    validationSchema: yup.object({
      amount: stxAmountValidator(availableBalance).concat(
        stxAvailableBalanceValidator(availableBalance)
      ),
      fee: stxFeeValidator(availableBalance),
      recipient,
      memo,
      nonce,
    }),

    async previewTransaction(
      values: StacksSendFormValues,
      formikHelpers: FormikHelpers<StacksSendFormValues>
    ) {
      const isFormValid = await checkFormValidation(values, formikHelpers);

      if (!isFormValid) return;
      const initialFee = values.fee;
      values.fee = changeFeeByNonce({
        nonce: Number(values.nonce),
        fee: Number(values.fee),
      });

      // if fee has changed, show info message
      const showFeeChangeWarning = initialFee !== values.fee;

      const tx = await generateTx(values);
      if (!tx) return logger.error('Attempted to generate unsigned tx, but tx is undefined');
      sendFormNavigate.toConfirmAndSignStxTransaction(tx, showFeeChangeWarning);
    },
  };
}
