import SbtcAvatarIconSrc from '@assets/avatars/sbtc-avatar-icon.png';
import { HStack } from 'leather-styles/jsx';

import { Avatar, Caption, Link, Title } from '@leather.io/ui';
import { satToBtc, truncateMiddle } from '@leather.io/utils';

import { analytics } from '@shared/utils/analytics';

import { useBitcoinExplorerLink } from '@app/common/hooks/use-bitcoin-explorer-link';
import { openInNewTab } from '@app/common/utils/open-in-new-tab';
import { SbtcDeposit, SbtcStatus } from '@app/query/sbtc/sbtc-deposits.query';

import { TransactionItemLayout } from '../transaction-item/transaction-item.layout';

function getDepositStatus(status: SbtcStatus) {
  switch (status) {
    case 'pending':
    case 'reprocessing':
      return 'Pending deposit';
    case 'accepted':
      return 'Pending mint';
    case 'failed':
      return 'Failed';
    case 'confirmed':
    default:
      return '';
  }
}

function getDepositStatusTextColor(status: SbtcStatus) {
  switch (status) {
    case 'pending':
    case 'reprocessing':
    case 'accepted':
      return 'yellow.action-primary-default';
    case 'failed':
      return 'red.action-primary-default';
    case 'confirmed':
    default:
      return '';
  }
}

const sbtcReclaimUrl = 'https://app.stacks.co/reclaim?depositTxId=';

interface SbtcDepositTransactionItemProps {
  deposit: SbtcDeposit;
}
export function SbtcDepositTransactionItem({ deposit }: SbtcDepositTransactionItemProps) {
  const { handleOpenBitcoinTxLink: handleOpenTxLink } = useBitcoinExplorerLink();
  const { bitcoinTxid, status } = deposit;
  const depositFailed = status === 'failed';

  function openTxLink() {
    void analytics.track('view_bitcoin_transaction');
    handleOpenTxLink({ txid: bitcoinTxid });
  }

  function openReclaimLink() {
    return openInNewTab(`${sbtcReclaimUrl}${bitcoinTxid}`);
  }

  return (
    <TransactionItemLayout
      openTxLink={!depositFailed ? openTxLink : () => {}}
      txCaption={truncateMiddle(bitcoinTxid, 4)}
      txIcon={<Avatar fallback="ST" image={SbtcAvatarIconSrc} />}
      txStatus={
        <HStack>
          <Caption color={getDepositStatusTextColor(status)}>{getDepositStatus(status)}</Caption>
          {depositFailed && <Link onClick={openReclaimLink}>Reclaim</Link>}
        </HStack>
      }
      txTitle={<Title textStyle="label.02">BTC → sBTC</Title>}
      txValue={deposit.amount > 0 ? satToBtc(deposit.amount).toString() : ''}
    />
  );
}
