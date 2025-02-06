import { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

import { RouteUrls } from '@shared/route-urls';
import { closeWindow } from '@shared/utils';
import { analytics } from '@shared/utils/analytics';

import {
  useHandleQueuedBackgroundAnalytics,
  useInitalizeAnalytics,
} from '@app/common/app-analytics';
import { ContainerLayout } from '@app/components/layout';
import { LoadingSpinner } from '@app/components/loading-spinner';
import { SwitchAccountSheet } from '@app/features/dialogs/switch-account-sheet/switch-account-sheet';
import { InAppMessages } from '@app/features/hiro-messages/in-app-messages';
import { useOnChangeAccount } from '@app/routes/hooks/use-on-change-account';
import { useOnSignOut } from '@app/routes/hooks/use-on-sign-out';
import { useOnWalletLock } from '@app/routes/hooks/use-on-wallet-lock';
import { useAppDispatch, useHasStateRehydrated } from '@app/store';
import { stxChainSlice } from '@app/store/chains/stx-chain.slice';

import { useRestoreFormState } from '../popup-send-form-restoration/use-restore-form-state';
import { useInitPushNotifications } from '../push-notifications/push-notifications';

export function Container() {
  const { pathname: locationPathname } = useLocation();
  const pathname = locationPathname as RouteUrls;
  const [isShowingSwitchAccount, setIsShowingSwitchAccount] = useState(false);
  const dispatch = useAppDispatch();

  const hasStateRehydrated = useHasStateRehydrated();

  useOnWalletLock(() => closeWindow());
  useOnSignOut(() => closeWindow());
  useRestoreFormState();
  useInitalizeAnalytics();
  useInitPushNotifications();
  useHandleQueuedBackgroundAnalytics();
  useOnChangeAccount(index => dispatch(stxChainSlice.actions.switchAccount(index)));
  useEffect(() => void analytics.page('view', `${pathname}`), [pathname]);

  if (!hasStateRehydrated) return <LoadingSpinner />;

  return (
    <>
      {isShowingSwitchAccount && (
        <SwitchAccountSheet
          isShowing={isShowingSwitchAccount}
          onClose={() => setIsShowingSwitchAccount(false)}
        />
      )}
      <InAppMessages />
      <ContainerLayout>
        <Outlet context={{ isShowingSwitchAccount, setIsShowingSwitchAccount }} />
      </ContainerLayout>
    </>
  );
}
