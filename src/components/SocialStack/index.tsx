import { IconButton, Stack, StackProps } from '@mui/material'

export interface SocialStackItem {
  icon: JSX.Element | string
  href: string
}

interface SocialStackProps extends StackProps {
  config: SocialStackItem[]
  iconWidth?: number
  iconHeight?: number
}

export default function SocialStack({
  config,
  direction = 'row',
  spacing = 1,
  iconWidth = 24,
  iconHeight = 24,
  sx,
}: SocialStackProps) {
  return (
    <Stack direction={direction} sx={{ ...sx }} spacing={spacing} alignItems="center">
      {config.map((item) => (
        <IconButton
          key={item.href}
          disableRipple
          sx={{
            m: 0,
            p: 0,
            transition: 'linear 150ms',
            '&:hover': { transform: 'scale(0.95)', opacity: '0.8' },
          }}
          href={item.href}
        >
          {typeof item.icon === 'string' ? (
            <img src={item.icon} style={{ width: iconWidth, height: iconHeight }} />
          ) : (
            item.icon
          )}
        </IconButton>
      ))}
    </Stack>
  )
}
