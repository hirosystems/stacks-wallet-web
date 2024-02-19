import { SendCryptoAssetSelectors } from '@tests/selectors/send.selectors';
import { useField } from 'formik';
import { Box } from 'leather-styles/jsx';

import { useShowFieldError } from '@app/common/form-utils';
import { TextInputFieldError } from '@app/components/field-error';
import { Input } from '@app/ui/components/input/input';

const name = 'memo';

export function MemoField() {
  const [field] = useField(name);

  const showError = useShowFieldError(name);

  return (
    <Box width="100%">
      <Input.Root hasError={!!showError}>
        <Input.Label>Memo</Input.Label>
        <Input.Field data-testid={SendCryptoAssetSelectors.MemoFieldInput} {...field} />
      </Input.Root>
      <Box mt="space.02">
        <TextInputFieldError name={name} />
      </Box>
    </Box>
  );
}
