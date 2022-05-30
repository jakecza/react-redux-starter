import { Divider, List, Typography, useMediaQuery } from '@mui/material'
// material-ui
import { useTheme } from '@mui/material/styles'

// project imports
import SidebarItem, { SidebarItemProps } from '../SidebarItem'

interface SidebarGroupProps {
  id: number
  title: string
  items: SidebarItemProps[]
  bottomDivider?: boolean
}

export default function SidebarGroup({ id, title, items, bottomDivider = true }: SidebarGroupProps) {
  const theme = useTheme()
  const matchesSM = useMediaQuery(theme.breakpoints.down('lg'))

  const mappedItems = items?.map((idx) => {
    return (
      <SidebarItem
        key={idx.id}
        id={idx.id}
        title={idx.title}
        to={idx.to}
        icon={idx.icon}
        breadcrumbs={idx.breadcrumbs}
        target={idx.target}
        caption={idx.caption}
        disabled={idx.disabled}
      />
    )
  })

  return (
    <>
      <List
        subheader={
          title && (
            <Typography variant="h6" display="block" gutterBottom>
              {title}
            </Typography>
          )
        }
      >
        {mappedItems}
      </List>
      {bottomDivider && <Divider sx={{ mt: 0.25, mb: 1.75 }} />}
    </>
  )
}
