import { Menu, MenuOpen } from '@mui/icons-material'
import { AppBar, Box, Stack, styled, Toolbar, useMediaQuery, useTheme } from '@mui/material'
import AccountStatus from 'components/AccountStatus'
import { ButtonStyled } from 'components/ButtonStyled'
import SvgIconStyle from 'components/SvgIconStyle'
import { useSidebarDrawerToggle } from 'state/application/hooks'
import { dashDrawerWidth, dashHeaderHeight, dashHeaderHeightUnderMD, defBorderWidth } from 'state/constants'

import SearchDashInput from './DashSearch'

const HeaderStyled = styled(AppBar)(({ theme }) => ({
  position: 'fixed',
  height: dashHeaderHeight,

  justifyContent: 'center',

  color: theme.palette.secondary.main,
  backgroundColor: theme.palette.background.paper,
  borderRadius: 'none',
  borderBottom: `solid ${defBorderWidth}`,
  borderBottomColor: theme.palette.divider,

  transition: theme.transitions.create('padding', {
    easing: theme.transitions.easing.easeOut,
    duration: theme.transitions.duration.leavingScreen,
  }),

  [theme.breakpoints.down('md')]: {
    height: dashHeaderHeightUnderMD,
  },
}))

const DashHeader = ({ isSidebarOpen }: { isSidebarOpen: boolean }) => {
  const theme = useTheme()
  const toggleSidebar = useSidebarDrawerToggle()
  const matchesUnderMd = useMediaQuery(theme.breakpoints.down('md'))

  return (
    <>
      <HeaderStyled elevation={2}>
        <Toolbar sx={{ alignItems: 'center' }}>
          {matchesUnderMd ? (
            <>
              <ButtonStyled
                styledAs="secondary"
                transWithBorder
                sx={{ borderRadius: '8px', minWidth: '36px', padding: '0.5rem' }}
                onClick={() => toggleSidebar()}
              >
                {isSidebarOpen ? <MenuOpen /> : <Menu />}
              </ButtonStyled>

              <SearchDashInput />

              <Box sx={{ flexGrow: 1 }} />

              <AccountStatus />
            </>
          ) : (
            <>
              <Stack
                spacing={`calc(${dashDrawerWidth}px - 108px)`}
                direction="row"
                justifyContent="space-between"
                alignItems="center"
              >
                <SvgIconStyle
                  toRoute="/"
                  src="assets/logo.svg"
                  fill={theme.palette.primary.main}
                  sx={{ height: '36px', width: '36px' }}
                />

                <ButtonStyled
                  styledAs="secondary"
                  transWithBorder
                  sx={{ borderRadius: '8px', minWidth: '36px', padding: '0.5rem' }}
                  onClick={() => toggleSidebar()}
                >
                  {isSidebarOpen ? <MenuOpen /> : <Menu />}
                </ButtonStyled>
              </Stack>

              <SearchDashInput />

              <Box sx={{ flexGrow: 1 }} />

              <AccountStatus />
            </>
          )}
        </Toolbar>
      </HeaderStyled>
    </>
  )
}

export default DashHeader
