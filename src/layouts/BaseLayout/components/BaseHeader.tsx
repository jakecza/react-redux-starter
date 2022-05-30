import { Book, Mail, People } from '@mui/icons-material'
import { AppBar, Box, styled, Toolbar, useMediaQuery, useTheme } from '@mui/material'
import { NavDesktop, NavItemMobileProps, NavItemProps, NavMobile } from 'components/HeaderNav'
import SvgIconStyle from 'components/SvgIconStyle'
import { baseHeaderHeight, baseHeaderHeightUnderSM, defBorderWidth } from 'state/constants'

const HeaderStyled = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  borderRadius: 'none',
  borderBottom: `solid ${defBorderWidth}`,
  borderBottomColor: theme.palette.divider,

  justifyContent: 'center',

  height: baseHeaderHeight,
  [theme.breakpoints.down('sm')]: {
    height: baseHeaderHeightUnderSM,
  },
}))

export default function BaseHeader() {
  const theme = useTheme()
  const smallerThanMD = useMediaQuery(theme.breakpoints.down('md'))

  const navConfig: NavItemProps[] | NavItemMobileProps[] = [
    { title: 'Dash', path: '/dash', isExt: false, icon: <Book /> },
    { title: 'Base', path: '/base', isExt: false, icon: <People /> },
    { title: 'Landing', path: '/', isExt: false, icon: <Mail /> },
  ]
  return (
    <HeaderStyled elevation={0}>
      <Toolbar>
        <Box sx={{ lineHeight: 0, position: 'relative' }}>
          <SvgIconStyle src="assets/logo.svg" />
        </Box>

        <Box sx={{ flexGrow: 1 }} />

        {smallerThanMD ? (
          <NavMobile navConfig={navConfig} drawerBgColor={theme.palette.background.default} />
        ) : (
          <NavDesktop navConfig={navConfig} />
        )}
      </Toolbar>
    </HeaderStyled>
  )
}
