import { Box, BoxProps } from '@mui/material'
import { Link } from 'react-router-dom'

// ----------------------------------------------------------------------

interface SvgIconStyleProps extends BoxProps {
  src: string
  fill?: string
  toRoute?: string
  toHref?: string
}

export default function SvgIconStyle({ src, fill, toRoute, toHref, sx }: SvgIconStyleProps) {
  if (toRoute) {
    return (
      <Link style={{ lineHeight: 0 }} to={toRoute}>
        <Box
          component="span"
          sx={{
            width: 24,
            height: 24,
            display: 'inline-block',
            bgcolor: fill ? fill : 'currentColor',
            mask: `url(${src}) no-repeat center / contain`,
            WebkitMask: `url(${src}) no-repeat center / contain`,
            ...sx,
          }}
        />
      </Link>
    )
  } else if (toHref) {
    return (
      <a href={toHref}>
        <Box
          component="span"
          sx={{
            width: 24,
            height: 24,
            display: 'inline-block',
            bgcolor: fill ? fill : 'currentColor',
            mask: `url(${src}) no-repeat center / contain`,
            WebkitMask: `url(${src}) no-repeat center / contain`,
            ...sx,
          }}
        />
      </a>
    )
  } else {
    return (
      <Box
        component="span"
        sx={{
          width: 24,
          height: 24,
          display: 'inline-block',
          bgcolor: fill ? fill : 'currentColor',
          mask: `url(${src}) no-repeat center / contain`,
          WebkitMask: `url(${src}) no-repeat center / contain`,
          ...sx,
        }}
      />
    )
  }
}
