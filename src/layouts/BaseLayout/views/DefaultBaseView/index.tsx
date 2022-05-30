import { useTheme } from '@mui/material'
import View from 'components/View'

import { DBViewHero } from './sections'

const DefaultBaseView = () => {
  const theme = useTheme()

  return (
    <View title="Home">
      <DBViewHero />
    </View>
  )
}

export default DefaultBaseView
