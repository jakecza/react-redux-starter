import { Box, Grid, Stack, Typography, useTheme } from '@mui/material'

const quotes = [
  {
    quote: 'Lost time is never found again',
    author: 'Benjamin Franklin',
  },
  {
    quote: 'Not until we are lost do we begin to understand ourselves',
    author: 'Henry David Thoreau',
  },
  {
    quote: 'Not all those who wander are lost',
    author: 'J.R.R. Tolkien',
  },
  {
    quote: 'Sometimes being lost is the best way to find yourself',
    author: 'LJ Vanier',
  },
  {
    quote: 'There are no wrong turnings, only paths we had not known we were meant to walk',
    author: 'Guy Gavriel Kay',
  },
  {
    quote: 'There are several paths one can take, but not every path is open to you',
    author: 'Claire Bloom',
  },
]

const FourOhFourView = () => {
  const theme = useTheme()
  function getRandomInt(max: number) {
    return Math.floor(Math.random() * max)
  }

  const num = getRandomInt(quotes.length)
  const qte = quotes[num]

  return (
    <Grid container xs={12} direction="column" spacing={4} sx={{ justifyContent: 'center', alignItems: 'center' }}>
      <Grid item sx={{ justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
        <Stack direction="column" spacing={1}>
          <Typography variant="h4">{qte.quote}</Typography>

          <Typography variant="subtitle1">{qte.author}</Typography>
        </Stack>
      </Grid>
      <Grid item width="50%" sx={{ justifyContent: 'center', alignItems: 'center', minWidth: '300px' }}>
        <Box>
          <Typography variant="h1">404</Typography>
        </Box>
      </Grid>
    </Grid>
  )
}

export default FourOhFourView
