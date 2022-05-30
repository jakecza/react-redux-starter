import { styled, useMediaQuery, useTheme } from '@mui/material'
import { Outlet } from 'react-router-dom'
import { landingHeaderHeight } from 'state/constants'

import LandingFooter from './components/LandingFooter'
import LandingHeader from './components/LandingHeader'

const Landing = styled('div')(({ theme }) => ({
  ...theme.typography.body1,
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  height: '100%',
  minHeight: '100vh',
  backgroundColor: theme.palette.background.default,
}))

const MainViewport = styled('main')(({ theme }) => ({
  ...theme.typography.body1,
  paddingTop: landingHeaderHeight,
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  height: '100%',
  flexGrow: 1,
  backgroundColor: theme.palette.background.default,
}))

const LandingLayout: React.FC = (): JSX.Element => {
  const theme = useTheme()
  const matchDownMd = useMediaQuery(theme.breakpoints.down('lg'))

  return (
    <Landing>
      <LandingHeader />
      <MainViewport>
        <Outlet />
      </MainViewport>
      <LandingFooter />
    </Landing>
  )
}

export default LandingLayout
