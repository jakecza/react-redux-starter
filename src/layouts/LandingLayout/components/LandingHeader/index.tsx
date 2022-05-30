import { Book, Mail, People } from '@mui/icons-material'
import { AppBar, Box, styled, useMediaQuery, useTheme } from '@mui/material'
import { NavDesktop, NavItemMobileProps, NavItemProps, NavMobile } from 'components/HeaderNav'
import SvgIconStyle from 'components/SvgIconStyle'
import useOffSetTop from 'hooks/useOffSetTop'
// import Web3Status from 'components/Web3Status'
import { defBorderWidth, landingHeaderHeight } from 'state/constants'

import { ToolbarShadowTxOnScroll, ToolbarTxOnScroll } from './HeaderToolbarTxOnScroll'

const HeaderStyled = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  borderRadius: 'none',
  borderBottom: `solid ${defBorderWidth}`,
  borderBottomColor: theme.palette.divider,
}))

interface LandingHeaderProps {
  transparent?: boolean
}

export default function LandingHeader({ transparent }: LandingHeaderProps) {
  const theme = useTheme()
  const isScrolling = useOffSetTop(landingHeaderHeight)
  const smallerThanMD = useMediaQuery(theme.breakpoints.down('md'))

  const navConfig: NavItemProps[] | NavItemMobileProps[] = [
    { title: 'Dash', path: '/dash', isExt: false, icon: <Book /> },
    { title: 'Base', path: '/base', isExt: false, icon: <People /> },
    { title: 'Landing', path: '/', isExt: false, icon: <Mail /> },
  ]

  return (
    <HeaderStyled elevation={0}>
      <ToolbarTxOnScroll transparent={transparent} scrolling={isScrolling}>
        <Box sx={{ lineHeight: 0, position: 'relative' }}>
          <SvgIconStyle src="assets/logo.svg" />
        </Box>

        <Box sx={{ flexGrow: 1 }} />
        {smallerThanMD ? (
          <NavMobile navConfig={navConfig} drawerBgColor={theme.palette.background.default} />
        ) : (
          <NavDesktop navConfig={navConfig} />
        )}
      </ToolbarTxOnScroll>

      {isScrolling && <ToolbarShadowTxOnScroll />}
    </HeaderStyled>
  )
}
