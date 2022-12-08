import { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

import { bytesToHex, signatureVrsToRsv } from '@stacks/common';
import {
  ClarityAbiType,
  ClarityType,
  ClarityValue,
  bufferCV,
  contractPrincipalCV,
  falseCV,
  intCV,
  listCV,
  noneCV,
  parseToCV,
  responseErrorCV,
  responseOkCV,
  serializeCV,
  someCV,
  standardPrincipalCV,
  trueCV,
  uintCV,
} from '@stacks/transactions';
import { stringCV } from '@stacks/transactions/dist/clarity/types/stringCV';
import { stringAsciiCV, stringUtf8CV, tupleCV } from '@stacks/transactions/dist/esm/clarity';
import { LedgerError } from '@zondax/ledger-stacks';
import get from 'lodash.get';

import { finalizeMessageSignature } from '@shared/actions/finalize-message-signature';
import { logger } from '@shared/logger';
import { SignedMessage, whenSignedMessage } from '@shared/signature/signature-types';

import { useLocationStateWithCache } from '@app/common/hooks/use-location-state';
import { useScrollLock } from '@app/common/hooks/use-scroll-lock';
import { delay } from '@app/common/utils';
import { BaseDrawer } from '@app/components/drawer/base-drawer';
import {
  getAppVersion,
  prepareLedgerDeviceConnection,
  signLedgerStructuredMessage,
  signLedgerUtf8Message,
  useActionCancellableByUser,
  useLedgerResponseState,
} from '@app/features/ledger/ledger-utils';
import { useCurrentAccount } from '@app/store/accounts/account.hooks';
import { useSignatureRequestSearchParams } from '@app/store/signatures/requests.hooks';

import { useLedgerAnalytics } from '../../hooks/use-ledger-analytics.hook';
import { useLedgerNavigate } from '../../hooks/use-ledger-navigate';
import { useVerifyMatchingLedgerPublicKey } from '../../hooks/use-verify-matching-public-key';
import { LedgerMessageSigningContext, LedgerMsgSigningProvider } from './ledger-sign-msg.context';
import { useSignedMessageType } from './use-message-type';

export function LedgerSignMsgContainer() {
  useScrollLock(true);

  const location = useLocation();

  const ledgerNavigate = useLedgerNavigate();
  const ledgerAnalytics = useLedgerAnalytics();
  const account = useCurrentAccount();
  const verifyLedgerPublicKey = useVerifyMatchingLedgerPublicKey();
  const { tabId, requestToken } = useSignatureRequestSearchParams();

  const [latestDeviceResponse, setLatestDeviceResponse] = useLedgerResponseState();
  const canUserCancelAction = useActionCancellableByUser();

  const [awaitingDeviceConnection, setAwaitingDeviceConnection] = useState(false);

  const unsignedMessage = useSignedMessageType();
  if (unsignedMessage === null) return null;

  async function signMessage() {
    if (!account || !unsignedMessage) return;
    const stacksApp = await prepareLedgerDeviceConnection({
      setLoadingState: setAwaitingDeviceConnection,
      onError() {
        ledgerNavigate.toErrorStep();
      },
    });

    const versionInfo = await getAppVersion(stacksApp);
    ledgerAnalytics.trackDeviceVersionInfo(versionInfo);
    setLatestDeviceResponse(versionInfo);
    if (versionInfo.deviceLocked) {
      setAwaitingDeviceConnection(false);
      return;
    }

    if (!tabId || !requestToken) {
      logger.warn('Cannot sign message without corresponding `tabId` or `requestToken');
      return;
    }

    ledgerNavigate.toDeviceBusyStep(`Verifying public key on Ledger…`);
    await verifyLedgerPublicKey(stacksApp);

    try {
      ledgerNavigate.toConnectionSuccessStep();
      await delay(1000);
      ledgerNavigate.toAwaitingDeviceOperation({ hasApprovedOperation: false });

      async function signLedgerMessage(msg: SignedMessage) {
        // if (msg.messageType === 'utf8') {
        //   const resp = await signLedgerUtf8Message(stacksApp)(msg, account.index);
        // }

        return whenSignedMessage(msg)({
          utf8(msg) {
            return signLedgerUtf8Message(stacksApp)(msg, account.index);
          },
          structured(domain, msg) {},
        });
      }

      const resp = signLedgerMessage(unsignedMessage);

      // const parsedDomain = bytesToHex(serializeCV(domain as unknown as ClarityValue));
      // const parsedMessage = bytesToHex(serializeCV(message as unknown as ClarityValue));
      // console.log({ parsedDomain, parsedMessage });

      // const resp = await signLedgerStructuredMessage(stacksApp)(
      //   parsedDomain,
      //   parsedMessage,
      //   account.index
      // );
      // console.log(resp);
      // const resp = await signLedgerUtf8Message(stacksApp)(message, account.index);
      // Assuming here that public keys are wrong. Alternatively, we may want
      // to proactively check the key before signing
      if (resp.returnCode === LedgerError.DataIsInvalid) {
        ledgerNavigate.toDevicePayloadInvalid();
        return;
      }

      if (resp.returnCode === LedgerError.TransactionRejected) {
        ledgerNavigate.toOperationRejectedStep(`Message signing operation rejected`);
        ledgerAnalytics.utf8MessageSignedOnLedgerRejected();
        finalizeMessageSignature({ requestPayload: requestToken, tabId, data: 'cancel' });
        return;
      }
      if (resp.returnCode !== LedgerError.NoErrors) {
        throw new Error('Some other error');
      }
      ledgerNavigate.toAwaitingDeviceOperation({ hasApprovedOperation: true });
      await delay(1000);

      ledgerAnalytics.utf8MessageSignedOnLedgerSuccessfully();

      finalizeMessageSignature({
        requestPayload: requestToken,
        tabId,
        data: {
          signature: signatureVrsToRsv(resp.signatureVRS.toString('hex')),
          publicKey: account.stxPublicKey,
        },
      });

      await stacksApp.transport.close();
    } catch (e) {
      console.log(e);
      ledgerNavigate.toDeviceDisconnectStep();
    }
  }

  const allowUserToGoBack = get(location.state, 'goBack');

  const onCancelConnectLedger = allowUserToGoBack
    ? ledgerNavigate.cancelLedgerActionAndReturnHome
    : ledgerNavigate.cancelLedgerAction;

  const ledgerContextValue: LedgerMessageSigningContext = {
    message: unsignedMessage,
    signMessage,
    latestDeviceResponse,
    awaitingDeviceConnection,
  };

  return (
    <LedgerMsgSigningProvider value={ledgerContextValue}>
      <BaseDrawer
        enableGoBack={allowUserToGoBack}
        isShowing
        isWaitingOnPerformedAction={awaitingDeviceConnection || canUserCancelAction}
        onClose={onCancelConnectLedger}
        pauseOnClickOutside
        waitingOnPerformedActionMessage="Ledger device in use"
      >
        <Outlet />
      </BaseDrawer>
    </LedgerMsgSigningProvider>
  );
}
