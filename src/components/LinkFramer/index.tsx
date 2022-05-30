import { styled } from '@mui/material'
import { Link } from 'react-router-dom'

interface LinkStyledProps {
  styledAs?: 'primary' | 'secondary' | 'textPrimary' | 'textSecondary' | 'muted'
}

const LinkStyled = styled(Link, {
  // Configure which props should be forwarded on DOM
  shouldForwardProp: (prop) => prop !== 'color' && prop !== 'sx',
  name: 'LinkStyled',
  slot: 'Root',
})<LinkStyledProps>(({ theme, styledAs }) => ({
  ...theme.typography.subtitle1,
  textDecoration: 'none',
  color:
    styledAs === 'primary'
      ? theme.palette.primary.main
      : styledAs === 'secondary'
      ? theme.palette.secondary.light
      : styledAs === 'textPrimary'
      ? theme.palette.text.primary
      : styledAs === 'textSecondary'
      ? theme.palette.text.secondary
      : styledAs === 'muted'
      ? theme.palette.info.light
      : 'inherit',
}))

const ExtLinkStyled = styled('a', {
  // Configure which props should be forwarded on DOM
  shouldForwardProp: (prop) => prop !== 'color' && prop !== 'sx',
  name: 'ExtLinkStyled',
  slot: 'Root',
  // // We are specifying here how the styleOverrides are being applied based on props
  // overridesResolver: (props, styles) => [
  //   styles.root,
  //   props.color === 'primary' && styles.primary,
  //   props.color === 'secondary' && styles.secondary,
  // ],
})<LinkStyledProps>(({ theme, styledAs }) => ({
  ...theme.typography.subtitle1,
  textDecoration: 'none',
  color:
    styledAs === 'primary'
      ? theme.palette.primary.main
      : styledAs === 'secondary'
      ? theme.palette.secondary.light
      : styledAs === 'textPrimary'
      ? theme.palette.text.primary
      : styledAs === 'textSecondary'
      ? theme.palette.text.secondary
      : styledAs === 'muted'
      ? theme.palette.info.light
      : 'inherit',
}))

const SubLinkStyled = styled(LinkStyled)(({ theme }) => ({
  ...theme.typography.subtitle1,
}))

const SubExtLinkStyled = styled(ExtLinkStyled)(({ theme }) => ({
  ...theme.typography.subtitle1,
}))
