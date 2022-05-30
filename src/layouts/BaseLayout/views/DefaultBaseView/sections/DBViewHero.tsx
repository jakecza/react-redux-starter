import { Box, Container, useTheme } from '@mui/material'
import { styled } from '@mui/material/styles'

// ----------------------------------------------------------------------

const RootStyle = styled(Box)(({ theme }) => ({
  // overflow: 'hidden',
  // paddingTop: theme.spacing(15),
  // paddingBottom: theme.spacing(10),
  // background: 'repeat center/20% url(assets/ants-bg.png)',
  // backgroundColor: '#00000044',
  [theme.breakpoints.up('md')]: {
    // minHeight: '100vh',
    // alignItems: 'center',
    // justifyContent: 'center',
    // paddingBottom: theme.spacing(15),
  },
}))

// ----------------------------------------------------------------------

export default function DBViewHero() {
  const theme = useTheme()

  return (
    <RootStyle>
      <Container>Hero</Container>
    </RootStyle>
  )
}
