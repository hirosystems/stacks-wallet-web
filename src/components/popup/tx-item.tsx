import React from 'react';
import type {
  CoinbaseTransaction,
  MempoolTransaction,
  Transaction,
  TransactionEventFungibleAsset,
} from '@stacks/stacks-blockchain-api-types';
import { Box, BoxProps, Button, color, Stack } from '@stacks/ui';
import { getContractName, isPendingTx, truncateMiddle } from '@stacks/ui-utils';
import BigNumber from 'bignumber.js';

import { stacksValue } from '@common/stacks-utils';
import { useExplorerLink } from '@common/hooks/use-explorer-link';

import { Caption, Title } from '@components/typography';
import { SpaceBetween } from '@components/space-between';
import { StacksTransactionItemIcon, TxItemIcon } from '@components/tx-icon';
import { Tooltip } from '@components/tooltip';
import { useCurrentAccount } from '@store/accounts/account.hooks';
import { usePressable } from '@components/item-hover';
import { useRawTxIdState } from '@store/transactions/raw.hooks';
import { FiFastForward } from 'react-icons/all';
import { PayloadType, StacksTransaction } from '@stacks/transactions';
import { getTxSenderAddress } from '@store/accounts/account-activity.utils';

type Tx = MempoolTransaction | Transaction;

const getAssetTransfer = (tx: Tx): TransactionEventFungibleAsset | null => {
  if (tx.tx_type !== 'contract_call') return null;
  if (tx.tx_status !== 'success') return null;
  const transfer = tx.events.find(event => event.event_type === 'fungible_token_asset');
  if (transfer?.event_type !== 'fungible_token_asset') return null;
  return transfer;
};

const getTxValue = (tx: Tx, isOriginator: boolean): number | string | null => {
  if (tx.tx_type === 'token_transfer') {
    return `${isOriginator ? '-' : ''}${stacksValue({
      value: tx.token_transfer.amount,
      withTicker: false,
    })}`;
  }
  const transfer = getAssetTransfer(tx);
  if (transfer) return new BigNumber(transfer.asset.amount).toFormat();
  return null;
};

interface TxItemProps {
  transaction: Tx;
}

const getTxCaption = (transaction: Tx) => {
  if (!transaction) return null;
  switch (transaction.tx_type) {
    case 'smart_contract':
      return truncateMiddle(transaction.smart_contract.contract_id, 4);
    case 'contract_call':
      return transaction.contract_call.contract_id.split('.')[1];
    case 'token_transfer':
    case 'coinbase':
    case 'poison_microblock':
      return truncateMiddle(transaction.tx_id, 4);
    default:
      return null;
  }
};

const Status: React.FC<{ transaction: Tx } & BoxProps> = ({ transaction, ...rest }) => {
  const isPending = isPendingTx(transaction as any);
  const isFailed = !isPending && transaction.tx_status !== 'success';
  return isFailed || isPending ? (
    <Box {...rest}>
      {isPending && (
        <Caption variant="c2" color={color('feedback-alert')}>
          Pending
        </Caption>
      )}
      {isFailed && (
        <Tooltip
          placement="bottom"
          label={
            // TODO: better language around failure
            transaction.tx_status
          }
        >
          <Caption variant="c2" color={color('feedback-error')}>
            Failed
          </Caption>
        </Tooltip>
      )}
    </Box>
  ) : null;
};

const SpeedUpButton = ({
  txid,
  isHovered,
  isEnabled,
}: {
  txid: string;
  isHovered: boolean;
  isEnabled: boolean;
}) => {
  const [rawTxId, setTxId] = useRawTxIdState();
  const isSelected = rawTxId === txid;
  const isActive = isEnabled && !isSelected && isHovered;
  return (
    <Button
      size="sm"
      mode="tertiary"
      fontSize={0}
      onClick={e => {
        setTxId(txid);
        e.stopPropagation();
      }}
      zIndex={999}
      ml="auto"
      opacity={!isActive ? 0 : 1}
      pointerEvents={!isActive ? 'none' : 'all'}
      color={color('text-body')}
      _hover={{
        color: color('text-title'),
      }}
    >
      <Box mr="3px" as={FiFastForward} color={color('accent')} />
      Increase fee
    </Button>
  );
};

export const TxItem: React.FC<TxItemProps & BoxProps> = ({ transaction, ...rest }) => {
  const [component, bind, { isHovered }] = usePressable(true);
  const { handleOpenTxLink } = useExplorerLink();
  const currentAccount = useCurrentAccount();

  if (!transaction) {
    return null;
  }

  const isOriginator = transaction.sender_address === currentAccount?.address;

  const isPending = isPendingTx(transaction as MempoolTransaction);

  const getTxTitle = (tx: Tx) => {
    switch (tx.tx_type) {
      case 'token_transfer':
        return 'Stacks Token';
      case 'contract_call':
        return tx.contract_call.function_name;
      case 'smart_contract':
        return getContractName(tx.smart_contract.contract_id);
      case 'coinbase':
        return `Coinbase ${(tx as CoinbaseTransaction).block_height}`;
      case 'poison_microblock':
        return 'Poison Microblock';
    }
  };

  const value = getTxValue(transaction, isOriginator);

  return (
    <Box position="relative" cursor="pointer" {...bind} {...rest}>
      <Stack
        alignItems="center"
        spacing="base-loose"
        isInline
        position="relative"
        zIndex={2}
        onClick={() => handleOpenTxLink(transaction.tx_id)}
      >
        <TxItemIcon transaction={transaction} />
        <SpaceBetween flexGrow={1}>
          <Stack spacing="base-tight">
            <Title as="h3" fontWeight="normal">
              {getTxTitle(transaction as any)}
            </Title>
            <Stack isInline flexWrap="wrap">
              <Status transaction={transaction} />
              <Caption variant="c2">{getTxCaption(transaction)}</Caption>
            </Stack>
          </Stack>
          <Stack alignItems="flex-end" spacing="base-tight">
            {value && (
              <Title as="h3" fontWeight="normal">
                {value}
              </Title>
            )}
            <SpeedUpButton
              isEnabled={isPending && isOriginator}
              isHovered={isHovered}
              txid={transaction.tx_id}
            />
          </Stack>
        </SpaceBetween>
      </Stack>
      {component}
    </Box>
  );
};

export const LocalTxItem: React.FC<{ transaction: StacksTransaction; txid: string } & BoxProps> = ({
  transaction,
  txid,
  ...rest
}) => {
  const [component, bind] = usePressable(true);
  const { handleOpenTxLink } = useExplorerLink();

  if (!transaction) {
    return null;
  }

  const getTxTitle = () => {
    switch (transaction.payload.payloadType) {
      case PayloadType.TokenTransfer:
        return 'Stacks Token';
      case PayloadType.ContractCall:
        return transaction.payload.functionName.content;
      case PayloadType.SmartContract:
        return transaction.payload.contractName.content;
      // this should never be reached
      default:
        return null;
    }
  };

  const value = () => {
    switch (transaction.payload.payloadType) {
      case PayloadType.TokenTransfer:
        return `-${stacksValue({
          value: transaction.payload.amount.toNumber(),
          withTicker: false,
        })}`;

      case PayloadType.ContractCall:
      // TODO: this is a good improvement to have, currently we do not show the asset amount transfered, but we can!
      // return transaction.payload.functionName.content === 'transfer'
      //   ? cvToValue(transaction.payload.functionArgs[0])
      //   : null;
      case PayloadType.SmartContract:
      default:
        return null;
    }
  };

  const txCaption = () => {
    switch (transaction.payload.payloadType) {
      case PayloadType.TokenTransfer:
        return getTxCaption({
          tx_type: 'token_transfer',
          tx_id: txid,
        } as Tx);
      case PayloadType.ContractCall:
        return getTxCaption({
          tx_type: 'contract_call',
          contract_call: {
            contract_id: `.${transaction.payload.contractName.content}`,
          },
        } as unknown as Tx);
      case PayloadType.SmartContract:
        return getTxCaption({
          tx_type: 'smart_contract',
          contract_call: {
            contract_id: `${getTxSenderAddress(transaction)}.${
              transaction.payload.contractName.content
            }`,
          },
        } as unknown as Tx);
      // this should never be reached
      default:
        return null;
    }
  };

  return (
    <Box position="relative" cursor="pointer" {...bind} {...rest}>
      <Stack
        alignItems="center"
        spacing="base-loose"
        isInline
        position="relative"
        zIndex={2}
        onClick={() => handleOpenTxLink(txid)}
      >
        <StacksTransactionItemIcon transaction={transaction} />
        <SpaceBetween flexGrow={1}>
          <Stack spacing="base-tight">
            <Title as="h3" fontWeight="normal">
              {getTxTitle()}
            </Title>
            <Stack isInline flexWrap="wrap">
              <Status transaction={{ tx_status: 'pending' } as Tx} />
              <Caption variant="c2">{txCaption()}</Caption>
            </Stack>
          </Stack>
          <Stack alignItems="flex-end" spacing="base-tight">
            {value() && (
              <Title as="h3" fontWeight="normal">
                {value()}
              </Title>
            )}
          </Stack>
        </SpaceBetween>
      </Stack>
      {component}
    </Box>
  );
};
