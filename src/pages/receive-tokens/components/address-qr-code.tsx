import { memo, useMemo } from 'react';
import { createQR } from '@vkontakte/vk-qr';
import { Box, color, Flex, FlexProps } from '@stacks/ui';

export const QrCode = memo(({ principal, ...rest }: { principal: string } & FlexProps) => {
  const qrSvg = useMemo(
    () =>
      createQR(principal, {
        ecc: 0,
        qrSize: 180,
        backgroundColor: color('text-body'),
        foregroundColor: color('invert'),
      }),
    [principal]
  );

  const qr = <Box dangerouslySetInnerHTML={{ __html: qrSvg }} />; // Bad?

  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      p="loose"
      borderRadius="18px"
      boxShadow="mid"
      border="1px solid"
      borderColor={color('border')}
      position="relative"
      mx="auto"
      {...rest}
    >
      {qr}
      <Box position="absolute">{qr}</Box>
    </Flex>
  );
});
