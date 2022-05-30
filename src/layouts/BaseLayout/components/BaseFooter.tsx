import { Box, styled, Toolbar, Typography, useMediaQuery, useTheme } from '@mui/material'
import SvgIconStyle from 'components/SvgIconStyle'
import { baseFooterHeight, defBorderWidth } from 'state/constants'

const FooterStyled = styled('footer')(({ theme }) => ({
  position: 'relative',
  maxHeight: baseFooterHeight,

  backgroundColor: theme.palette.background.paper,
  borderTop: `solid ${defBorderWidth}`,
  borderTopColor: theme.palette.divider,
  borderRadius: 0,
}))

function BaseFooter() {
  const theme = useTheme()
  const matchesSM = useMediaQuery(theme.breakpoints.down('md'))
  const matchesXS = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <>
      <FooterStyled>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Box sx={{ lineHeight: 0, position: 'relative' }}>
            <SvgIconStyle src="assets/logo.svg" />
          </Box>
          <Typography variant="subtitle2">Copyright &#169; 2022</Typography>
        </Toolbar>
      </FooterStyled>
    </>
  )
}

export default BaseFooter
