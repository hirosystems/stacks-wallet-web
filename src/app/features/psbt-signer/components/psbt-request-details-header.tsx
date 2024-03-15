import { HStack, styled } from 'leather-styles/jsx';

import { usePsbtSignerContext } from '@app/features/psbt-signer/psbt-signer.context';
import { TagWithTooltip } from '@app/ui/components/tag/tag-with-tooltip';
import { LockIcon } from '@app/ui/icons/lock-icon';
import { UnlockIcon } from '@app/ui/icons/unlock-icon';

const immutableLabel =
  'Any modification to the transaction, including the fee amount or other inputs/outputs, will invalidate the signature.';
const uncertainLabel =
  'The transaction details can be altered by other participants. This means the final outcome of the transaction might be different than initially agreed upon.';

export function PsbtRequestDetailsHeader() {
  const { isPsbtMutable } = usePsbtSignerContext();

  return (
    <HStack alignItems="center" gap="space.02">
      <styled.h2 textStyle="heading.05">Transaction</styled.h2>
      <TagWithTooltip
        hoverLabel={isPsbtMutable ? uncertainLabel : immutableLabel}
        icon={isPsbtMutable ? <UnlockIcon variant="small" /> : <LockIcon variant="small" />}
        label={isPsbtMutable ? 'Uncertain' : 'Certain'}
        transparent
        variant={isPsbtMutable ? 'warning' : 'default'}
      />
    </HStack>
  );
}
