import { useRouteError } from 'react-router-dom';

import BroadcastError from '@assets/images/unhappy-face-ui.png';
import { SharedComponentsSelectors } from '@tests/selectors/shared-component.selectors';
import { Box, Center, Flex, HStack, styled } from 'leather-styles/jsx';

import { Button, CopyIcon, Link, Prism } from '@leather.io/ui';
import { isError } from '@leather.io/utils';

import { useClipboard } from '@app/common/hooks/use-copy-to-clipboard';
import { compliantErrorBody } from '@app/query/common/compliance-checker/compliance-checker.query';
import { CodeBlock } from '@app/ui/components/codeblock';

import { useToast } from '../toasts/use-toast';

function shouldShowContactSupportMessage(errorMsg: string) {
  if (errorMsg.includes(compliantErrorBody)) return false;
  return true;
}

function ErroBoundaryBody() {
  return (
    <styled.span
      data-testid={SharedComponentsSelectors.BroadcastErrorTitle}
      mx="space.05"
      mt="space.05"
      textStyle="label.02"
    >
      Leather has crashed. If this problem persists, contact our{' '}
      <Link href="https://leather.io/support" target="_blank" textDecoration="underline">
        <styled.span
          data-testid={SharedComponentsSelectors.BroadcastErrorTitle}
          textStyle="label.02"
        >
          support team.
        </styled.span>
      </Link>
    </styled.span>
  );
}

const title = 'Something went wrong';

const defaultErrorText = 'Unknown error';

function getErrorText(error: unknown) {
  if (!isError(error)) return defaultErrorText;
  return error.stack || defaultErrorText;
}

export function RouterErrorBoundary() {
  const error = useRouteError();
  const toast = useToast();

  const errorText = getErrorText(error);

  const { onCopy } = useClipboard(getErrorText(error));

  function onClickCopy() {
    onCopy();
    toast.success('Error copied!');
  }

  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      px={['space.05', 'unset']}
      py={['space.05', 'space.06']}
      width="100%"
      maxWidth="500px"
    >
      <Box mt="space.05">
        <img src={BroadcastError} alt="Unhappy user interface cloud" width="106px" />
      </Box>

      <styled.span
        data-testid={SharedComponentsSelectors.BroadcastErrorTitle}
        mx="space.05"
        mt="space.05"
        textStyle="heading.05"
      >
        {title}
      </styled.span>

      {shouldShowContactSupportMessage(errorText) && <ErroBoundaryBody />}

      {errorText && (
        <CodeBlock
          bg="ink.background-secondary"
          borderRadius="sm"
          my="space.05"
          mx="space.05"
          p="space.04"
          prism={Prism}
          code={errorText}
          language="json"
          hideLineHover
        />
      )}

      <HStack width="100%" gap="space.04">
        <Button flex="1" onClick={onClickCopy} variant="outline">
          <Center gap="5">
            Copy error
            <CopyIcon />
          </Center>
        </Button>
        <Button flex="1" onClick={() => window.location.reload()}>
          Reload extension
        </Button>
      </HStack>
    </Flex>
  );
}
