import { Card, useTheme } from '@mui/material'
import View from 'components/View'

const HomeDashView = () => {
  const theme = useTheme()

  return (
    <View title="Home">
      <Card> Hey </Card>
    </View>
  )
}

export default HomeDashView
