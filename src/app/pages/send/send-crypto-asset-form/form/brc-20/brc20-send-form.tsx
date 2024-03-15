import { Outlet, useLocation } from 'react-router-dom';

import { Form, Formik } from 'formik';
import { Box, styled } from 'leather-styles/jsx';
import get from 'lodash.get';

import { openInNewTab } from '@app/common/utils/open-in-new-tab';
import { Brc20AvatarIcon } from '@app/ui/components/avatar/brc20-avatar-icon';
import { Callout } from '@app/ui/components/callout/callout';
import { Link } from '@app/ui/components/link/link';

import { AmountField } from '../../components/amount-field';
import { FormFooter } from '../../components/form-footer';
import { SelectedAssetField } from '../../components/selected-asset-field';
import { SendCryptoAssetFormLayout } from '../../components/send-crypto-asset-form.layout';
import { SendMaxButton } from '../../components/send-max-button';
import { defaultSendFormFormikProps } from '../../send-form.utils';
import { useBrc20SendForm } from './use-brc20-send-form';

function useBrc20SendFormRouteState() {
  const { state } = useLocation();
  return {
    balance: get(state, 'balance', '') as string,
    ticker: get(state, 'ticker', '') as string,
    decimals: get(state, 'decimals', '') as number,
    holderAddress: get(state, 'holderAddress', '') as string,
  };
}

export function Brc20SendForm() {
  const { balance, ticker, decimals, holderAddress } = useBrc20SendFormRouteState();
  const {
    initialValues,
    chooseTransactionFee,
    validationSchema,
    formRef,
    onFormStateChange,
    moneyBalance,
  } = useBrc20SendForm({ balance, ticker, decimals, holderAddress });

  return (
    <Box pb="space.04" width="100%">
      <Formik
        initialValues={initialValues}
        onSubmit={chooseTransactionFee}
        validationSchema={validationSchema}
        innerRef={formRef}
        {...defaultSendFormFormikProps}
      >
        {props => {
          onFormStateChange(props.values);
          return (
            <Form>
              <SendCryptoAssetFormLayout>
                <AmountField
                  balance={moneyBalance}
                  bottomInputOverlay={
                    <SendMaxButton
                      balance={moneyBalance}
                      sendMaxBalance={moneyBalance.amount.toString()}
                    />
                  }
                  autoComplete="off"
                />
                <SelectedAssetField icon={<Brc20AvatarIcon />} name={ticker} symbol={ticker} />
                <Callout variant="info" title="Sending BRC-20 tokens requires two steps">
                  <styled.ol mb="space.02">
                    <li>1. Create transfer inscription with amount to send</li>
                    <li>2. Send transfer inscription to recipient of choice</li>
                  </styled.ol>
                  <Link
                    onClick={() => {
                      openInNewTab(
                        'https://leather.gitbook.io/guides/bitcoin/sending-brc-20-tokens'
                      );
                    }}
                    textStyle="body.02"
                  >
                    Learn more
                  </Link>
                </Callout>
              </SendCryptoAssetFormLayout>

              <FormFooter
                balance={moneyBalance}
                balanceTooltipLabel="Total balance minus any amounts already represented by transfer inscriptions in your wallet."
              />
              <Outlet />
            </Form>
          );
        }}
      </Formik>
    </Box>
  );
}
