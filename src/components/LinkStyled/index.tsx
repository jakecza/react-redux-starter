import { styled } from '@mui/material'
import { transparentize } from 'polished'
import { Link } from 'react-router-dom'

export interface LinkStyledProps {
  colorStyle?: 'primary' | 'secondary' | 'textPrimary' | 'textSecondary' | 'muted'
  hoverStyle?: 'primary' | 'secondary' | 'textPrimary' | 'textSecondary' | 'muted' | 'faded'
}

export const LinkStyled = styled(Link, {
  // Configure which props should be forwarded on DOM
  shouldForwardProp: (prop) => prop !== 'colorStyle' && prop !== 'hoverStyle',
  slot: 'Root',
  // // We are specifying here how the styleOverrides are being applied based on props
  // overridesResolver: (props, styles) => [
  //   styles.root,
  //   props.color === 'primary' && styles.primary,
  //   props.color === 'secondary' && styles.secondary,
  // ],
})<LinkStyledProps>(({ theme, hoverStyle, colorStyle }) => ({
  ...theme.typography.subtitle1,
  textDecoration: 'none',
  color:
    colorStyle === 'primary'
      ? theme.palette.primary.main
      : colorStyle === 'secondary'
      ? theme.palette.secondary.light
      : colorStyle === 'textPrimary'
      ? theme.palette.text.primary
      : colorStyle === 'textSecondary'
      ? theme.palette.text.secondary
      : colorStyle === 'muted'
      ? theme.palette.info.light
      : 'inherit',
  '&:hover': {
    cursor: 'pointer',
    textDecoration: 'none',
    transition: 'all linear 150ms',
    transform: 'scale(0.99)',
    color:
      hoverStyle === 'primary'
        ? transparentize(0.2, theme.palette.primary.main)
        : hoverStyle === 'secondary'
        ? transparentize(0.2, theme.palette.secondary.light)
        : hoverStyle === 'textPrimary'
        ? transparentize(0.2, theme.palette.text.primary)
        : hoverStyle === 'textSecondary'
        ? transparentize(0.2, theme.palette.text.secondary)
        : hoverStyle === 'muted'
        ? transparentize(0.2, theme.palette.info.light)
        : 'none',
    opacity: hoverStyle === 'faded' ? 0.8 : 1.0,
  },
}))

export const ExtLinkStyled = styled('a', {
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
})<LinkStyledProps>(({ theme, hoverStyle, colorStyle }) => ({
  ...theme.typography.subtitle1,
  textDecoration: 'none',
  color:
    colorStyle === 'primary'
      ? theme.palette.primary.main
      : colorStyle === 'secondary'
      ? theme.palette.secondary.light
      : colorStyle === 'textPrimary'
      ? theme.palette.text.primary
      : colorStyle === 'textSecondary'
      ? theme.palette.text.secondary
      : colorStyle === 'muted'
      ? theme.palette.info.light
      : 'inherit',
  '&:hover': {
    cursor: 'pointer',
    textDecoration: 'none',
    transition: 'all 150ms linear',
    transform: 'scale(0.98)',
    color:
      hoverStyle === 'primary'
        ? transparentize(0.2, theme.palette.primary.main)
        : hoverStyle === 'secondary'
        ? transparentize(0.2, theme.palette.secondary.light)
        : hoverStyle === 'textPrimary'
        ? transparentize(0.2, theme.palette.text.primary)
        : hoverStyle === 'textSecondary'
        ? transparentize(0.2, theme.palette.text.secondary)
        : hoverStyle === 'muted'
        ? transparentize(0.2, theme.palette.info.light)
        : 'none',
    opacity: hoverStyle === 'faded' ? 0.8 : 1.0,
  },
}))

export const SubLinkStyled = styled(LinkStyled)(({ theme }) => ({
  ...theme.typography.subtitle1,
}))

export const SubExtLinkStyled = styled(ExtLinkStyled)(({ theme }) => ({
  ...theme.typography.subtitle1,
}))
