import { BrowserContext, Page } from '@playwright/test';
import { TEST_ACCOUNT_2_STX_ADDRESS } from '@tests/mocks/constants';

import type { RpcParams, stxTransferSip9Nft } from '@leather.io/rpc';

import { RpcErrorMessage } from '@shared/rpc/methods/validation.utils';

import { test } from '../../fixtures/fixtures';

test.describe('RPC: stx_transferSip9Nft', () => {
  test.beforeEach(async ({ extensionId, globalPage, onboardingPage, page }) => {
    await globalPage.setupAndUseApiCalls(extensionId);
    await onboardingPage.signInWithTestAccount(extensionId);
    await page.goto('localhost:3000', { waitUntil: 'networkidle' });
  });

  function checkVisibleContent(context: BrowserContext) {
    return async (buttonToPress: 'Cancel' | 'Confirm') => {
      const popup = await context.waitForEvent('page');
      await popup.waitForSelector('text="LIV"');
      await popup.waitForSelector('text="transfer"');
      await popup.waitForSelector('text="SP2X…G3PJ.living-leather"');
      await popup.waitForSelector('text="u647"');
      await popup.waitForSelector('text="SPXH3HNBPM5YP15VH16ZXZ9AX6CK289K3MCXRKCB"');
      await popup.waitForTimeout(500);
      const btn = popup.locator('text="Confirm"');

      if (buttonToPress === 'Confirm') {
        await btn.click();
      } else {
        await popup.close();
      }
    };
  }

  function initiateSip30RpcTransferSip9Nft(page: Page) {
    return async (params: RpcParams<typeof stxTransferSip9Nft>) =>
      page.evaluate(
        async params =>
          (window as any).LeatherProvider.request('stx_transferSip9Nft', {
            ...params,
          }).catch((e: unknown) => e),
        { ...params }
      );
  }

  test('SIP-30 transfer sip9 non-fungible token', async ({ page, context }) => {
    const [result] = await Promise.all([
      initiateSip30RpcTransferSip9Nft(page)({
        assetId: '0100000000000000000000000000000287', // serializeCV(uintCV(647))
        asset: 'SP2XMGYYTA1KRBKBYJHTW8CFWB2QYZKZE4BMHG3PJ.living-leather::living-leather',
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
