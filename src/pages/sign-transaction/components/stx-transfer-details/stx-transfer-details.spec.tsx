import React from 'react';
import { render, waitFor } from '@testing-library/react';

import { ProviderWithWalletAndStxTransferRequestToken } from '@tests/state-utils';
import { STX_TRANSFER_DECODED } from '@tests/mocks';
import { setupHeystackEnv } from '@tests/mocks/heystack';

import { StxTransferDetails } from './stx-transfer-details';

describe('<StxTransferDetails />', () => {
  setupHeystackEnv();
  it('correctly displays the contract address and function name', async () => {
    const { getByText } = render(
      <ProviderWithWalletAndStxTransferRequestToken>
        <StxTransferDetails />
      </ProviderWithWalletAndStxTransferRequestToken>
    );
    await waitFor(() => {
      getByText(STX_TRANSFER_DECODED.amount);
      getByText(STX_TRANSFER_DECODED.recipient);
    });
  });
});
