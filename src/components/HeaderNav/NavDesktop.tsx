import { Launch } from '@mui/icons-material'
import { Stack } from '@mui/material'
import { LinkStyled } from 'components/LinkStyled'
import useResponsive from 'hooks/useResponsive'
import { matchPath, useLocation } from 'react-router-dom'

import { NavDesktopProps } from '.'

// ----------------------------------------------------------------------

export default function NavDesktop({ navConfig }: NavDesktopProps) {
  const isLarge = useResponsive('up', 'lg')
  const { pathname } = useLocation()
  const match = (path: any) => (path ? !!matchPath({ path, exact: true, strict: true }, pathname) : false)

  return (
    <Stack
      direction="row"
      spacing={isLarge ? 6 : 3}
      sx={{
        mr: 2,
        ml: 2,
      }}
    >
      {navConfig.map((link) =>
        link.isExt ? (
          <a key={link.title} href={link.path}>
            {link.title}
            <Launch
              sx={{
                ml: 0.5,
                width: 14,
                height: 14,
              }}
            />
          </a>
        ) : (
          <LinkStyled key={link.title} to={link.path} colorStyle={match(link.path) ? 'primary' : 'textPrimary'}>
            {link.title}
          </LinkStyled>
        )
      )}
    </Stack>
  )
}
