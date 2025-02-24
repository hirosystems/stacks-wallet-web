import { BrowserContext, Page } from '@playwright/test';
import { TEST_ACCOUNT_2_STX_ADDRESS } from '@tests/mocks/constants';

import type { RpcParams, stxTransferSip10Ft } from '@leather.io/rpc';

import { RpcErrorMessage } from '@shared/rpc/methods/validation.utils';

import { test } from '../../fixtures/fixtures';

test.describe('RPC: stx_transferSip10Ft', () => {
  test.beforeEach(async ({ extensionId, globalPage, onboardingPage, page }) => {
    await globalPage.setupAndUseApiCalls(extensionId);
    await onboardingPage.signInWithTestAccount(extensionId);
    await page.goto('localhost:3000', { waitUntil: 'networkidle' });
  });

  function checkVisibleContent(context: BrowserContext) {
    return async (buttonToPress: 'Cancel' | 'Confirm') => {
      const popup = await context.waitForEvent('page');
      await popup.waitForSelector('text="LEO"');
      await popup.waitForSelector('text="0.001"');
      await popup.waitForSelector('text="transfer"');
      await popup.waitForSelector('text="SP1A…2CT6.leo-token"');
      await popup.waitForSelector('text="SPXH3HNBPM5YP15VH16ZXZ9AX6CK289K3MCXRKCB"');
      await popup.waitForSelector('text="none"');
      await popup.waitForTimeout(500);
      const btn = popup.locator('text="Confirm"');

      if (buttonToPress === 'Confirm') {
        await btn.click();
      } else {
        await popup.close();
      }
    };
  }

  function initiateSip30RpcTransferSip10Ft(page: Page) {
    return async (params: RpcParams<typeof stxTransferSip10Ft>) =>
      page.evaluate(
        async params =>
          (window as any).LeatherProvider.request('stx_transferSip10Ft', {
            ...params,
          }).catch((e: unknown) => e),
        { ...params }
      );
  }

  test('SIP-30 transfer sip10 fungible token', async ({ page, context }) => {
    const [result] = await Promise.all([
      initiateSip30RpcTransferSip10Ft(page)({
        amount: 1000,
        asset: 'SP1AY6K3PQV5MRT6R4S671NWW2FRVPKM0BR162CT6.leo-token::leo',
        recipient: TEST_ACCOUNT_2_STX_ADDRESS,
      }),
      checkVisibleContent(context)('Cancel'),
    ]);

    delete result.id;

    test.expect(result).toEqual({
      jsonrpc: '2.0',
      error: {
        code: 4001,
        message: RpcErrorMessage.UserRejectedSigning,
      },
    });
  });
});
