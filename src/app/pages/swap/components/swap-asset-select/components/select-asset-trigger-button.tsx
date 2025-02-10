import type React from 'react';

import { SwapSelectors } from '@tests/selectors/swap.selectors';
import { useField } from 'formik';
import { HStack, styled } from 'leather-styles/jsx';

import { Avatar, Button, ChevronDownIcon } from '@leather.io/ui';
import { isString } from '@leather.io/utils';

interface SelectAssetTriggerButtonProps {
  icon?: React.ReactNode;
  name: string;
  onSelectAsset(): void;
  symbol: string;
}
export function SelectAssetTriggerButton({
  icon,
  name,
  onSelectAsset,
  symbol,
}: SelectAssetTriggerButtonProps) {
  const [field] = useField(name);
  const fallback = symbol.slice(0, 2);

  return (
    <Button
      data-testid={SwapSelectors.SelectAssetTriggerBtn}
      onClick={onSelectAsset}
      p="space.02"
      variant="ghost"
      {...field}
    >
      <HStack>
        {icon && isString(icon) ? <Avatar fallback={fallback} image={icon} /> : icon}
        <styled.span textStyle="label.01">{symbol}</styled.span>
        <ChevronDownIcon variant="small" />
      </HStack>
    </Button>
  );
}
