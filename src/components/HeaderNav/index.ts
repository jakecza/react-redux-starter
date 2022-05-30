import { SxProps } from '@mui/material'

export interface NavItemProps {
  title: string
  path: string
  isExt?: boolean
  fontSize?: string
}

export interface NavItemMobileProps extends NavItemProps {
  icon?: JSX.Element
}

export interface NavDesktopProps {
  navConfig: NavItemProps[]
  sx?: SxProps
}

export interface NavMobileProps {
  navConfig: NavItemMobileProps[]
  drawerBgColor?: string
  sx?: SxProps
}

export { default as NavDesktop } from './NavDesktop'
export { default as NavMobile } from './NavMobile'
