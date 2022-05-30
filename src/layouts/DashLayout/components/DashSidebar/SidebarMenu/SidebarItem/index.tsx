import { ListItemButton, ListItemIcon, ListItemText, Typography, useMediaQuery, useTheme } from '@mui/material'
import { LinkStyled } from 'components/LinkStyled'
import { useNavigate } from 'react-router-dom'

export interface SidebarItemProps {
  id: number
  title: string
  to: string
  icon: JSX.Element
  breadcrumbs: boolean
  target?: string
  caption?: string
  disabled?: boolean
}

export default function SidebarItem({ id, title, to, icon, breadcrumbs, target, caption, disabled }: SidebarItemProps) {
  const theme = useTheme()
  const matchesSM = useMediaQuery(theme.breakpoints.down('lg'))

  let itemTarget = '_self'
  if (target) {
    itemTarget = '_blank'
  }

  // const  = (id: number) => {
  //   // dispatch({ type: MENU_OPEN, id })
  //   // if (matchesSM) dispatch({ type: SET_MENU, opened: false })
  // }

  const navigate = useNavigate()
  function itemHandler(url: string) {
    navigate(url)
  }

  return (
    <LinkStyled to={to} target={itemTarget}>
      <ListItemButton
        disabled={disabled ?? false}
        sx={{
          borderRadius: `12px`,
          mb: 0.5,
          alignItems: 'flex-start',
          backgroundColor: 'inherit',
          py: 1.25,
          pl: '24px',
        }}
        onClick={() => itemHandler(to)}
      >
        <ListItemIcon sx={{ my: 'auto', minWidth: !icon ? 18 : 36 }}>{icon}</ListItemIcon>
        <ListItemText
          primary={
            <Typography variant="body1" color="inherit">
              {title}
            </Typography>
          }
          secondary={
            caption && (
              <Typography variant="caption" display="block" gutterBottom>
                {caption}
              </Typography>
            )
          }
        />
      </ListItemButton>
    </LinkStyled>
  )
}
