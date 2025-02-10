import { Box, BoxProps } from 'leather-styles/jsx';

import { Avatar, DynamicColorCircle, StxAvatarIcon } from '@leather.io/ui';

interface StacksAssetAvatarProps extends BoxProps {
  img?: string;
  gradientString: string;
  isStx?: boolean;
  size?: string;
}
export function StacksAssetAvatar({
  children,
  gradientString,
  img,
  isStx,
  size = '40',
  ...props
}: StacksAssetAvatarProps) {
  if (isStx) return <StxAvatarIcon />;

  const { color } = props;

  if (img) return <Avatar image={encodeURI(img)} fallback="FT" />;

  if (!gradientString) return null;

  return (
    <DynamicColorCircle color={color} size={size} value={gradientString}>
      <Box position="absolute">{children}</Box>
    </DynamicColorCircle>
  );
}
