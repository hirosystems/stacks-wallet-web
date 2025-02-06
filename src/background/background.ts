//
// This file is the entrypoint to the extension's background script
// https://developer.chrome.com/docs/extensions/mv3/architecture-overview/#background_script
import { onBackgroundMessage } from 'firebase/messaging/sw';

import { logger } from '@shared/logger';
import { CONTENT_SCRIPT_PORT, type LegacyMessageFromContentScript } from '@shared/message-types';
import { WalletRequests } from '@shared/rpc/rpc-methods';
import { warnUsersAboutDevToolsDangers } from '@shared/utils/dev-tools-warning-log';

import { initContextMenuActions } from './init-context-menus';
import { internalBackgroundMessageHandler } from './messaging/internal-methods/message-handler';
import {
  handleLegacyExternalMethodFormat,
  isLegacyMessage,
} from './messaging/legacy/legacy-external-message-handler';
import { rpcMessageHandler } from './messaging/rpc-message-handler';
import { initializeFirebaseCloudMessaging } from './register-firebase';

initContextMenuActions();
warnUsersAboutDevToolsDangers();

const { onPushNotification } = initializeFirebaseCloudMessaging();

onPushNotification(payload => {
  console.log('payload in');
  const notification = payload.notification;
  if (!notification) return;
  console.log('firing notification');
  chrome.notifications.create(
    {
      title: notification.title ?? 'default notification',
      message: notification.body ?? 'default body',
      iconUrl: notification.icon ?? 'https://placekittens.com/200/300',
      type: 'basic',
    },
    notificationId => {
      console.log('notificationId', notificationId);
    }
  );
});

chrome.runtime.onInstalled.addListener(async details => {
  if (details.reason === 'install' && process.env.WALLET_ENVIRONMENT !== 'testing') {
    await chrome.tabs.create({
      url: chrome.runtime.getURL(`index.html`),
    });
  }
});

// Listen for connection to the content-script - port for two-way communication
chrome.runtime.onConnect.addListener(port => {
  if (port.name !== CONTENT_SCRIPT_PORT) return;

  port.onMessage.addListener((message: LegacyMessageFromContentScript | WalletRequests, port) => {
    if (!port.sender?.tab?.id)
      return logger.error('Message reached background script without a corresponding tab');

    // Chromium/Firefox discrepancy
    const originUrl = port.sender?.origin ?? port.sender?.url;

    if (!originUrl)
      return logger.error('Message reached background script without a corresponding origin');

    // Legacy JWT format messages
    if (isLegacyMessage(message)) {
      void handleLegacyExternalMethodFormat(message, port);
      return;
    }

    // TODO:
    // Here we'll handle all messages using the rpc style comm method
    // For now all messages are handled as legacy format
    void rpcMessageHandler(message, port);
  });
});

//
// Events from the extension frames script
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  void internalBackgroundMessageHandler(message, sender, sendResponse);
  // Listener fn must return `true` to indicate the response will be async
  return true;
});
