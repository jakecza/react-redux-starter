import { useTheme } from '@mui/material'
import View from 'components/View'

import { DLViewHero } from './sections'

const DefaultLandingView = () => {
  const theme = useTheme()

  return (
    <View title="Home">
      <DLViewHero />
    </View>
  )
}

export default DefaultLandingView
