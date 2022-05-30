import { Mail } from '@mui/icons-material'
import { Box, Divider, Paper, styled, Typography, useMediaQuery, useTheme } from '@mui/material'
import { SubLinkStyled } from 'components/LinkStyled'
import SocialStack, { SocialStackItem } from 'components/SocialStack'
import SvgIconStyle from 'components/SvgIconStyle'
import { debounce } from 'lodash'
import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
import { dashFooterHeight, dashFooterHeightUnderMD, defBorderWidth } from 'state/constants'

const SocialStackConfig: SocialStackItem[] = [
  { icon: 'assets/social/discord.svg', href: 'https://discord.com' },
  { icon: 'assets/social/twitter.svg', href: 'https://twitter.com' },
  { icon: <Mail />, href: 'mailto:team@app.com' },
]

const DashFooter = ({ isSidebarOpen }: { isSidebarOpen: boolean }) => {
  const theme = useTheme()
  const matchesXS = useMediaQuery(theme.breakpoints.down('sm'))

  const hasScrollbar = window.innerWidth > document.documentElement.clientWidth

  const FooterStyled = styled(Paper)(({ theme }) => ({
    position: 'fixed',
    width: '100vw',
    height: dashFooterHeight,
    maxHeight: dashFooterHeight,
    bottom: '0',
    right: 0,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.palette.background.paper,
    borderRadius: 0,
    borderTop: `solid ${defBorderWidth}`,
    borderTopColor: theme.palette.divider,

    transition: theme.transitions.create('padding', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.leavingScreen,
    }),
    padding: '2rem',
    paddingLeft: '2rem',
    paddingRight: hasScrollbar ? '1.25rem' : '2rem',
    [theme.breakpoints.down('md')]: {
      height: dashFooterHeightUnderMD,
      maxHeight: dashFooterHeightUnderMD,
    },
  }))

  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  })
  useEffect(() => {
    const debouncedResize = debounce(function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      })
    }, 500)
    window.addEventListener('resize', debouncedResize)

    // eslint-disable-next-line prettier/prettier
    return() => {
      window.removeEventListener('resize', debouncedResize)
    }
  })

  return (
    <>
      <FooterStyled elevation={1}>
        {matchesXS ? (
          <SvgIconStyle
            src="assets/logo.svg"
            fill={theme.palette.primary.main}
            sx={{ minWidth: { xs: '24px', sm: '120px' } }}
          />
        ) : (
          <Typography color="primary.main" variant="h5">
            Dashboard
          </Typography>
        )}

        <Box sx={{ flexGrow: 1 }} />
        {matchesXS ? null : (
          <>
            <Box sx={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }} width="fit-content">
              <SubLinkStyled
                colorStyle="secondary"
                hoverStyle="secondary"
                to="/docs"
                sx={{ marginRight: '0.5rem', paddingRight: '0.5rem' }}
              >
                Documentation
              </SubLinkStyled>
              <SubLinkStyled
                colorStyle="secondary"
                hoverStyle="secondary"
                to="/legal"
                sx={{ marginRight: '0.5rem', paddingRight: '0.5rem' }}
              >
                Privacy Policy
              </SubLinkStyled>
            </Box>
            <Divider
              orientation="vertical"
              variant="middle"
              sx={{
                borderWidth: '1px',
                backgroundColor: theme.palette.divider,
                height: '1.5rem',
                marginRight: '1rem',
                marginLeft: '0.25rem',
                borderRadius: '4px',
              }}
            />
          </>
        )}

        <SocialStack config={SocialStackConfig} />
      </FooterStyled>
    </>
  )
}

DashFooter.propTypes = {
  isSidebarOpen: PropTypes.bool,
}

export default DashFooter
