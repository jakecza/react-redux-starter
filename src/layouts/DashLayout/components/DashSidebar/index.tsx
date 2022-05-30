import { LightMode, NightsStay } from '@mui/icons-material'
import { Box, Button, Drawer, Stack, styled, Typography, useMediaQuery, useTheme } from '@mui/material'
import Scrollbar from 'components/Scrollbar'
import React from 'react'
import { useIsDarkMode, useToggleDarkMode } from 'state/application/hooks'
// material-ui
import { dashDrawerWidth, dashHeaderHeight, dashHeaderHeightUnderMD, defBorderWidth } from 'state/constants'
import { isMobile } from 'utils/userAgent'

// third-party
import SidebarMenu from './SidebarMenu'

// ==============================|| SIDEBAR ||============================== //
const drawerBleed = 56
const sidebarFooterHeight = 56

const StyledBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'light' ? '#fff' : theme.palette.primary.main,
}))

const Puller = styled(Box)(({ theme }) => ({
  width: 30,
  height: 6,
  backgroundColor: theme.palette.mode === 'light' ? theme.palette.primary.main : theme.palette.primary.main,
  borderRadius: 3,
  position: 'absolute',
  top: 8,
  left: 'calc(50% - 15px)',
}))

const SidebarFooter = styled(Box)(({ theme }) => ({
  width: '100%',
  height: `${sidebarFooterHeight}px`,
  maxHeight: `${sidebarFooterHeight}px`,
  position: 'sticky',
  bottom: 0,
  borderTop: `solid ${defBorderWidth}`,
  borderTopColor: theme.palette.divider,
  backgroundColor: theme.palette.background.default,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  paddingRight: '16px',
  paddingLeft: '16px',
}))

const ToggleMenuItem = styled(Button)(({ theme }) => ({
  boxShadow: `inset 0px 0px 0px 1.5px ${theme.palette.primary.main}`,
  minWidth: '36px',
  alignItems: 'center',
  '&:hover': {
    cursor: 'pointer',
  },
}))

interface DashSidebarProps {
  isDrawerOpen: boolean
  // eslint-disable-next-line @typescript-eslint/ban-types
  drawerToggle: () => void
  window?: any
}

const DashSidebar: React.FC<DashSidebarProps> = ({ isDrawerOpen, drawerToggle, window }) => {
  const theme = useTheme()
  const matchesUnderMd = useMediaQuery(theme.breakpoints.down('md'))
  const toggleDarkMode = useToggleDarkMode()
  const darkMode = useIsDarkMode()

  const drawerContents = (
    <>
      {isMobile ? (
        <StyledBox
          sx={{
            position: 'absolute',
            top: -drawerBleed,
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
            visibility: 'visible',
            right: 0,
            left: 0,
          }}
        >
          <Puller />
        </StyledBox>
      ) : null}

      <Scrollbar
        style={{
          height: matchesUnderMd
            ? `calc(100vh - ${dashHeaderHeightUnderMD}px )`
            : `calc(100vh - ${dashHeaderHeight}px )`,
          paddingLeft: '16px',
          paddingRight: '16px',
        }}
      >
        <SidebarMenu />
      </Scrollbar>

      <SidebarFooter>
        <Typography color="primary.main" variant="h5">
          Dashboard
        </Typography>
        <Stack direction="row" sx={{ maxHeight: '36px' }}>
          <ToggleMenuItem onClick={toggleDarkMode}>{darkMode ? <NightsStay /> : <LightMode />}</ToggleMenuItem>
        </Stack>
      </SidebarFooter>
    </>
  )
  const cont = window !== undefined ? () => window.document.body : undefined

  return (
    <React.Fragment>
      <Box component="nav" sx={{ flexShrink: { md: 0 }, width: !matchesUnderMd ? dashDrawerWidth : 'auto' }}>
        <Drawer
          container={cont}
          variant={!matchesUnderMd ? 'persistent' : 'temporary'}
          anchor="left"
          open={isDrawerOpen}
          onClose={drawerToggle}
          sx={{
            '& .MuiDrawer-paper': {
              width: dashDrawerWidth,
              background: theme.palette.background.paper,
              color: theme.palette.text.primary,
              borderRight: `solid ${defBorderWidth}`,
              borderRightColor: theme.palette.divider,

              paddingTop: `${dashHeaderHeight}px`,
              [theme.breakpoints.down('md')]: {
                paddingTop: `${dashHeaderHeightUnderMD}px`,
              },
            },
          }}
          ModalProps={{ keepMounted: true }}
          PaperProps={{ elevation: 2 }}
          color="inherit"
        >
          {drawerContents}
        </Drawer>
      </Box>
    </React.Fragment>
  )
}

export default DashSidebar
