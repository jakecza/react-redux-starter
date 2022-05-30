import { styled, useMediaQuery, useTheme } from '@mui/material'
import { Outlet } from 'react-router-dom'
import { baseHeaderHeight, baseHeaderHeightUnderSM } from 'state/constants'

import BaseFooter from './components/BaseFooter'
import BaseHeader from './components/BaseHeader'

const Base = styled('div')(({ theme }) => ({
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
  paddingTop: baseHeaderHeight,
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  height: '100%',
  flexGrow: 1,
  backgroundColor: theme.palette.background.default,
  [theme.breakpoints.down('sm')]: {
    paddingTop: baseHeaderHeightUnderSM,
  },
}))

const BaseLayout: React.FC = (): JSX.Element => {
  const theme = useTheme()
  const matchDownMd = useMediaQuery(theme.breakpoints.down('lg'))

  return (
    <Base>
      <BaseHeader />
      <MainViewport>
        <Outlet />
      </MainViewport>
      <BaseFooter />
    </Base>
  )
}

export default BaseLayout
