import { Box, HStack } from 'leather-styles/jsx';

import { LeatherButton } from '@app/components/button/button';

interface PsbtRequestActionsProps {
  isLoading?: boolean;
  onCancel(): void;
  onSignPsbt(): void;
}
export function PsbtRequestActions({ isLoading, onCancel, onSignPsbt }: PsbtRequestActionsProps) {
  return (
    <Box
      bg="accent.background-primary"
      // TODO #4476 check this border colour it was DCDDE2
      // - can we pass it with shorthand?
      borderTop="1px solid"
      borderColor="border-default"
      bottom="0px"
      height="96px"
      position="absolute"
      px="loose"
      width="100%"
      zIndex={999}
    >
      <HStack gap="space.04" mt="space.05">
        <LeatherButton flexGrow={1} onClick={onCancel} variant="outline">
          Cancel
        </LeatherButton>
        <LeatherButton flexGrow={1} aria-busy={isLoading} onClick={onSignPsbt}>
          Confirm
        </LeatherButton>
      </HStack>
    </Box>
  );
}
