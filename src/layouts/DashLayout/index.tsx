import { styled, useMediaQuery, useTheme } from '@mui/material'
import { Outlet } from 'react-router-dom'
import { useModalOpen, useSidebarDrawerToggle } from 'state/application/hooks'
import { ApplicationModal } from 'state/application/reducer'
import {
  dashDrawerWidth,
  dashFooterHeight,
  dashFooterHeightUnderMD,
  dashHeaderHeight,
  dashHeaderHeightUnderMD,
} from 'state/constants'

import DashFooter from './components/DashFooter'
import DashHeader from './components/DashHeader'
import DashSidebar from './components/DashSidebar'

const Dash = styled('div')(({ theme }) => ({
  ...theme.typography.body1,
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  height: '100%',
  minHeight: '100vh',
  backgroundColor: theme.palette.background.default,
}))

const DashLayout: React.FC = (): JSX.Element => {
  const theme = useTheme()
  const matchDownMd = useMediaQuery(theme.breakpoints.down('lg'))

  const sidebarOpened = useModalOpen(ApplicationModal.SIDEBAR)
  const toggleSidebarDrawer = useSidebarDrawerToggle()

  const MainViewport = styled('main')(({ theme }) => ({
    ...theme.typography.body1,
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    minHeight: `calc(100vh - ${dashHeaderHeight}px - ${dashFooterHeight}px)`,
    height: '100%',
    backgroundColor: theme.palette.background.default,

    // Handle Sidebar
    transition: theme.transitions.create('padding', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.leavingScreen,
    }),
    padding: '3rem',
    paddingTop: `calc(${dashHeaderHeight}px + 3rem)`,
    paddingBottom: `calc(${dashFooterHeight}px + 4.5rem)`,
    paddingLeft: sidebarOpened ? `calc(3rem + ${dashDrawerWidth}px)` : '3rem',

    [theme.breakpoints.down('md')]: {
      minHeight: `calc(100vh - ${dashHeaderHeightUnderMD}px - ${dashFooterHeightUnderMD}px)`,

      padding: '2rem',
      paddingTop: `calc(${dashHeaderHeightUnderMD}px + 2rem)`,
      paddingBottom: `calc(${dashFooterHeightUnderMD}px + 3.5rem)`,
    },
  }))

  return (
    <Dash>
      <DashHeader isSidebarOpen={sidebarOpened} />
      <DashSidebar isDrawerOpen={sidebarOpened} drawerToggle={toggleSidebarDrawer} />
      <MainViewport>
        <Outlet />
      </MainViewport>
      <DashFooter isSidebarOpen={sidebarOpened} />
    </Dash>
  )
}

export default DashLayout
