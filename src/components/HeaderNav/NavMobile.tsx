import { Book, Menu, MenuOpen } from '@mui/icons-material'
import {
  Box,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  styled,
  useTheme,
} from '@mui/material'
// @mui
import Scrollbar from 'components/Scrollbar'
import { opacify } from 'polished'
import { useState } from 'react'
import * as React from 'react'
import { matchPath, useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { dashDrawerWidth, defBorderWidth, landingHeaderHeight } from 'state/constants'

import { NavMobileProps } from '.'
// ----------------------------------------------------------------------

const NavList = styled(List)<{ component?: React.ElementType }>(({ theme }) => ({
  paddingTop: 0,
  '& .MuiListItemButton-root': {
    padding: 12,
    paddingLeft: 24,
    paddingRight: 24,
    borderBottom: '1px solid',
    // '&:first-child': {
    //   borderTop: '1px solid',
    //   borderColor: opacify(0.8, theme.palette.divider),
    // },
    borderColor: opacify(0.8, theme.palette.divider),
  },
  '& .MuiListItemIcon-root': {
    minWidth: 0,
    marginRight: 16,
  },
  '& .MuiSvgIcon-root': {},
}))

// ----------------------------------------------------------------------

export default function NavMobile({ navConfig, drawerBgColor, sx }: NavMobileProps) {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const theme = useTheme()
  const { pathname } = useLocation()
  const match = (path: any) => (path ? !!matchPath({ path, exact: true, strict: true }, pathname) : false)

  React.useEffect(() => {
    if (drawerOpen) {
      handleDrawerClose()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [window.location.href])

  const handleDrawerOpen = () => {
    setDrawerOpen(true)
  }

  const handleDrawerClose = () => {
    setDrawerOpen(false)
  }

  return (
    <Box sx={{ ml: 1 }}>
      <IconButton color="inherit" onClick={handleDrawerOpen}>
        {drawerOpen ? <MenuOpen /> : <Menu />}
      </IconButton>

      <Drawer
        open={drawerOpen}
        onClose={handleDrawerClose}
        ModalProps={{ keepMounted: true }}
        PaperProps={{
          sx: {
            width: dashDrawerWidth,
            paddingTop: `${landingHeaderHeight}px`,
            backgroundColor: drawerBgColor,
            borderRight: `${defBorderWidth} solid ${theme.palette.divider}`,
          },
        }}
      >
        <Scrollbar>
          <NavList sx={{ px: 0 }}>
            {navConfig.map((link) => (
              <ListItemButton
                key={link.title}
                component={Link}
                to={link.path}
                sx={{ py: 0, minHeight: 32, color: match(link.path) ? 'primary.main' : 'text.secondary' }}
              >
                <ListItemIcon sx={{ color: 'text.primary' }}>{link.icon ? link.icon : <Book />}</ListItemIcon>

                <ListItemText
                  primary={link.title}
                  primaryTypographyProps={{ fontSize: '1rem', fontWeight: 'medium' }}
                />
              </ListItemButton>
            ))}
          </NavList>
        </Scrollbar>
      </Drawer>
    </Box>
  )
}

// ----------------------------------------------------------------------
