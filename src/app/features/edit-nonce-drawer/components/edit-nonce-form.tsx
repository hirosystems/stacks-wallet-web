import { Suspense } from 'react';

import { Button, Stack } from '@stacks/ui';

import { PrimaryButton } from '@app/components/primary-button';

import { EditNonceField } from './edit-nonce-field';

function EditNonceFormFallback() {
  return (
    <>
      <Stack>
        <EditNonceField />
      </Stack>
      <Stack isInline>
        <Button borderRadius="10px" flexGrow={1} mode="tertiary">
          Cancel
        </Button>
        <PrimaryButton isLoading>Apply</PrimaryButton>
      </Stack>
    </>
  );
}

interface EditNonceFormProps {
  onBlur(): void;
  onClose(): void;
  onSubmit(): void;
}
export function EditNonceForm(props: EditNonceFormProps): JSX.Element {
  const { onBlur, onClose, onSubmit } = props;

  return (
    <Suspense fallback={<EditNonceFormFallback />}>
      <Stack>
        <EditNonceField onBlur={onBlur} />
      </Stack>
      <Stack isInline>
        <Button flexGrow={1} mode="tertiary" onClick={onClose}>
          Cancel
        </Button>
        <PrimaryButton flexGrow={1} onClick={onSubmit}>
          Apply
        </PrimaryButton>
      </Stack>
    </Suspense>
  );
}
