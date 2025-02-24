import { useState } from 'react';

import { HStack, HTMLStyledProps, Stack, styled } from 'leather-styles/jsx';

import { Prism, Title } from '@leather.io/ui';

import { AttachmentRow } from '@app/features/stacks-transaction-request/attachment-row';
import { ContractPreviewLayout } from '@app/features/stacks-transaction-request/contract-preview';
import { Row } from '@app/features/stacks-transaction-request/row';
import {
  useCurrentStacksAccount,
  useCurrentStacksAccountAddress,
} from '@app/store/accounts/blockchain/stacks/stacks-account.hooks';
import { useTransactionRequestState } from '@app/store/transactions/requests.hooks';
import { CodeBlock } from '@app/ui/components/codeblock';

function ContractCodeSection() {
  const transactionRequest = useTransactionRequestState();

  const currentAccount = useCurrentStacksAccount();
  const currentAccountStxAddress = useCurrentStacksAccountAddress();

  if (
    !transactionRequest ||
    transactionRequest.txType !== 'smart_contract' ||
    !currentAccount ||
    !currentAccountStxAddress
  ) {
    return null;
  }

  return (
    <CodeBlock
      color="#fff"
      border="default"
      code={transactionRequest.codeBody}
      maxWidth="100vw"
      prism={Prism as any}
    />
  );
}

interface TabButtonProps extends HTMLStyledProps<'button'> {
  isActive: boolean;
}

function TabButton(props: TabButtonProps) {
  const { isActive, ...rest } = props;

  return (
    <styled.button
      bg={isActive ? 'ink.component-background-hover' : 'transparent'}
      borderRadius="xs"
      color={isActive ? 'ink.text-primary' : 'ink.text-subdued'}
      px="space.04"
      py="space.03"
      textStyle="label.01"
      type="button"
      {...rest}
    />
  );
}

export function ContractDeployDetails() {
  const transactionRequest = useTransactionRequestState();
  const currentAccount = useCurrentStacksAccount();
  const currentAccountStxAddress = useCurrentStacksAccountAddress();
  const [tab, setTab] = useState<'details' | 'code'>('details');

  if (
    !transactionRequest ||
    transactionRequest.txType !== 'smart_contract' ||
    !currentAccount ||
    !currentAccountStxAddress
  ) {
    return null;
  }

  return (
    <Stack mb="space.05" gap="space.05" width="100%">
      <HStack gap="0">
        <TabButton onClick={() => setTab('details')} isActive={tab === 'details'}>
          Details
        </TabButton>
        <TabButton onClick={() => setTab('code')} isActive={tab === 'code'}>
          Code
        </TabButton>
      </HStack>
      {tab === 'details' ? (
        <Stack gap="space.05" border="active" borderRadius="sm" py="space.06" px="space.04">
          <Title>Contract deploy details</Title>
          <ContractPreviewLayout
            contractAddress={currentAccountStxAddress}
            contractName={transactionRequest.contractName}
          />
          <Stack gap="space.04">
            {currentAccountStxAddress && (
              <Row name="Contract address" value={currentAccountStxAddress} type="Principal" />
            )}
            <Row name="Contract name" value={transactionRequest.contractName} type="String" />
            {transactionRequest.attachment && <AttachmentRow />}
          </Stack>
        </Stack>
      ) : (
        <ContractCodeSection />
      )}
    </Stack>
  );
}
