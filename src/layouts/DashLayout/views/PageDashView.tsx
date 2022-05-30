import { Card, useTheme } from '@mui/material'
import View from 'components/View'

const PageDashView = () => {
  const theme = useTheme()

  return (
    <View title="newPage">
      <Card> Hey </Card>
    </View>
  )
}

export default PageDashView
