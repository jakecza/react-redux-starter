import { Home, Pages } from '@mui/icons-material'
import { useTheme } from '@mui/material'

import SidebarGroup from './SidebarGroup'
import { SidebarItemProps } from './SidebarItem'

const SidebarMenu = () => {
  const theme = useTheme()

  const HomeGroup: SidebarItemProps[] = [
    {
      id: 1,
      title: 'Home',
      to: './',
      icon: <Home />,
      breadcrumbs: false,
    },
    {
      id: 2,
      title: 'Alpha',
      to: 'alpha',
      icon: <Pages />,
      breadcrumbs: false,
    },
  ]

  const Group1: SidebarItemProps[] = [
    {
      id: 1,
      title: 'Beta',
      to: 'beta',
      icon: <Pages />,
      breadcrumbs: false,
    },
    {
      id: 2,
      title: 'Gamma',
      to: 'gamma',
      icon: <Pages />,
      breadcrumbs: false,
    },
    {
      id: 3,
      title: 'Delta',
      to: 'delta',
      icon: <Pages />,
      breadcrumbs: false,
    },
  ]

  const Group2: SidebarItemProps[] = [
    {
      id: 1,
      title: 'Epsilon',
      to: 'epsilon',
      icon: <Pages />,
      breadcrumbs: false,
    },
    {
      id: 2,
      title: 'Zeta',
      to: 'zeta',
      icon: <Pages />,
      breadcrumbs: false,
    },
    {
      id: 3,
      title: 'Eta',
      to: 'eta',
      icon: <Pages />,
      breadcrumbs: false,
    },
  ]

  return (
    <>
      <SidebarGroup id={1} title="" items={HomeGroup} />
      <SidebarGroup id={2} title="Group1" items={Group1} />
      <SidebarGroup id={3} title="Group2" items={Group2} />
    </>
  )
}

export default SidebarMenu
