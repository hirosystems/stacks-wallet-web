import { Box, BoxProps, Circle, color } from '@stacks/ui';

import { BitcoinTransaction } from '@shared/models/transactions/bitcoin-transaction.model';
import { StacksTx } from '@shared/models/transactions/stacks-transaction.model';

import { TransactionTypeIcon } from './transaction-type-icon';

interface TransactionIconWrapperProps extends BoxProps {
  icon: React.FC;
  transaction: StacksTx | BitcoinTransaction;
}
export function TransactionIconWrapper({
  icon: Icon,
  transaction,
  ...rest
}: TransactionIconWrapperProps) {
  return (
    <Circle
      bg={color('accent')}
      color={color('bg')}
      flexShrink={0}
      position="relative"
      size="36px"
      {...rest}
    >
      <Box as={Icon} />
      <TransactionTypeIcon transaction={transaction} />
    </Circle>
  );
}
