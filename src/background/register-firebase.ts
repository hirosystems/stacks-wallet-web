import { initializeApp } from 'firebase/app';
import { type MessagePayload, type Messaging, getToken } from 'firebase/messaging';
import { getMessaging, onBackgroundMessage } from 'firebase/messaging/sw';

import { isString } from '@leather.io/utils';

import { logger } from '@shared/logger';

const firebaseConfig = {
  apiKey: 'AIzaSyCNWvmvdt_qqObnEUdeDPNhsRKXeLVrsZk',
  authDomain: 'leather-b5081.firebaseapp.com',
  projectId: 'leather-b5081',
  storageBucket: 'leather-b5081.firebasestorage.app',
  messagingSenderId: '915379517791',
  appId: '1:915379517791:web:c84472be91fd5e8c789eea',
};

async function getOrCreateFirebaseToken(messaging: Messaging) {
  const { fcmRegistrationToken } = await chrome.storage.local.get('fcmRegistrationToken');
  if (!isString(fcmRegistrationToken)) throw new Error('Invalid fcmRegistrationToken');
  if (!fcmRegistrationToken) {
    const fcmRegistrationToken = await getToken(messaging, {
      serviceWorkerRegistration: (self as any).registration,
    });
    chrome.storage.local.set({ fcmRegistrationToken });
    return fcmRegistrationToken;
  }
  return fcmRegistrationToken;
}

export function initializeFirebaseCloudMessaging() {
  const app = initializeApp(firebaseConfig);

  chrome.runtime.onStartup.addListener(async () => {
    const messaging = getMessaging(app);
    await getOrCreateFirebaseToken(messaging);
  });

  function onPushNotification(callback: (payload: MessagePayload) => void) {
    onBackgroundMessage(getMessaging(app), payload => {
      logger.info('Push notification', payload);
      callback(payload);
    });
  }

  return { app, onPushNotification };
}
