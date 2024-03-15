import { type ReactNode } from 'react';

import { Circle } from 'leather-styles/jsx';

import { TransactionTypeIconWrapper } from '@app/components/transaction/transaction-type-icon-wrapper';
import { StxAvatarIcon } from '@app/ui/components/avatar/stx-avatar-icon';

interface TxTransferIconWrapperProps {
  icon: ReactNode;
}
export function TxTransferIconWrapper({ icon }: TxTransferIconWrapperProps) {
  return (
    <Circle position="relative">
      <StxAvatarIcon />
      <TransactionTypeIconWrapper icon={icon} />
    </Circle>
  );
}
