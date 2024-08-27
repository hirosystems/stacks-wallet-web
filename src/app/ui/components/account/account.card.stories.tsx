import type { Meta } from '@storybook/react';
import { Flex } from 'leather-styles/jsx';

import {
  ArrowDownIcon,
  ArrowUpIcon,
  ArrowsRepeatLeftRightIcon,
  IconButton,
  PlusIcon,
} from '@leather.io/ui';

import { AccountCard as Component } from './account.card';

const meta: Meta<typeof Component> = {
  component: Component,
  tags: ['autodocs'],
  title: 'Layout/AccountCard',
};

export default meta;

export function AccountCard() {
  return (
    <Component
      name="leather.btc"
      balance="$1,000"
      toggleSwitchAccount={() => null}
      toggleHideBlance={() => null}
      isLoadingBalance={false}
      isFetchingBnsName={false}
    >
      <Flex justify="space-between">
        <IconButton icon={<ArrowUpIcon />} label="Send" />
        <IconButton icon={<ArrowDownIcon />} label="Receive" />
        <IconButton icon={<PlusIcon />} label="Buy" />
        <IconButton icon={<ArrowsRepeatLeftRightIcon />} label="Swap" />
      </Flex>
    </Component>
  );
}

export function AccountCardLoading() {
  return (
    <Component
      name="leather.btc"
      balance="$1,000"
      toggleSwitchAccount={() => null}
      toggleHideBlance={() => null}
      isLoadingBalance
      isFetchingBnsName={false}
    >
      <Flex justify="space-between">
        <IconButton icon={<ArrowUpIcon />} label="Send" />
        <IconButton icon={<ArrowDownIcon />} label="Receive" />
        <IconButton icon={<PlusIcon />} label="Buy" />
        <IconButton icon={<ArrowsRepeatLeftRightIcon />} label="Swap" />
      </Flex>
    </Component>
  );
}

export function AccountCardBnsNameLoading() {
  return (
    <Component
      name="leather.btc"
      balance="$1,000"
      toggleSwitchAccount={() => null}
      toggleHideBlance={() => null}
      isLoadingBalance={false}
      isFetchingBnsName
    >
      <Flex justify="space-between">
        <IconButton icon={<ArrowUpIcon />} label="Send" />
        <IconButton icon={<ArrowDownIcon />} label="Receive" />
        <IconButton icon={<PlusIcon />} label="Buy" />
        <IconButton icon={<ArrowsRepeatLeftRightIcon />} label="Swap" />
      </Flex>
    </Component>
  );
}

export function AccountCardHiddenBalance() {
  return (
    <Component
      name="leather.btc"
      balance="$1,000"
      toggleSwitchAccount={() => null}
      toggleHideBlance={() => null}
      isLoadingBalance={false}
      isFetchingBnsName={false}
      hideBalance
    >
      <Flex justify="space-between">
        <IconButton icon={<ArrowUpIcon />} label="Send" />
        <IconButton icon={<ArrowDownIcon />} label="Receive" />
        <IconButton icon={<PlusIcon />} label="Buy" />
        <IconButton icon={<ArrowsRepeatLeftRightIcon />} label="Swap" />
      </Flex>
    </Component>
  );
}
