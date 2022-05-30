import { Chip, ChipProps, styled } from '@mui/material'
import { transparentize } from 'polished'
import { defBorderRadius } from 'state/constants'

export interface ChipStyledProps extends ChipProps {
  styledAs?: 'primary' | 'secondary' | 'divider' | 'error' | 'paper' | 'transparent'
  hoverStyle?: 'primary' | 'secondary' | 'divider' | 'error' | 'paper' | 'transparent' | 'faded' | 'none'
  transWithBorder?: boolean
}

export const ChipStyled = styled(Chip, {
  // Configure which props should be forwarded on DOM
  shouldForwardProp: (prop) => prop !== 'styledAs' && prop !== 'hoverStyle' && prop !== 'transWithBorder',
  name: 'ChipStyled',
  slot: 'Root',
})<ChipStyledProps>(({ theme, styledAs, hoverStyle, clickable, transWithBorder }) => ({
  ...theme.typography.button,
  height: 'fit-content',
  padding: '0.5rem 1rem',
  transition: 'all 150ms linear',
  justifyContent: 'center',
  textAlign: 'center',
  alignItems: 'center',
  overflow: 'hidden',
  borderRadius: defBorderRadius,
  textDecoration: 'none',
  backgroundColor: transWithBorder
    ? 'rgba(0,0,0,0.1)'
    : styledAs === 'primary'
    ? theme.palette.primary.main
    : styledAs === 'secondary'
    ? theme.palette.secondary.main
    : styledAs === 'divider'
    ? theme.palette.divider
    : styledAs === 'error'
    ? theme.palette.error.main
    : styledAs === 'paper'
    ? theme.palette.background.paper
    : styledAs === 'transparent'
    ? 'transparent'
    : '',

  color:
    styledAs === 'primary'
      ? transWithBorder
        ? theme.palette.primary.main
        : theme.palette.primary.contrastText
      : styledAs === 'secondary'
      ? transWithBorder
        ? theme.palette.secondary.main
        : theme.palette.secondary.contrastText
      : styledAs === 'divider'
      ? transWithBorder
        ? theme.palette.divider
        : theme.palette.text.primary
      : styledAs === 'error'
      ? transWithBorder
        ? theme.palette.error.main
        : theme.palette.error.contrastText
      : styledAs === 'paper'
      ? transWithBorder
        ? theme.palette.background.paper
        : theme.palette.text.primary
      : 'inherit',

  boxShadow:
    styledAs === 'primary'
      ? transWithBorder
        ? `inset 0px 0px 0px 2px ${theme.palette.primary.main}`
        : 'none'
      : styledAs === 'secondary'
      ? transWithBorder
        ? `inset 0px 0px 0px 2px ${theme.palette.secondary.main}`
        : 'none'
      : styledAs === 'divider'
      ? transWithBorder
        ? `inset 0px 0px 0px 2px ${theme.palette.divider}`
        : 'none'
      : styledAs === 'error'
      ? transWithBorder
        ? `inset 0px 0px 0px 2px ${theme.palette.error.main}`
        : 'none'
      : styledAs === 'paper'
      ? transWithBorder
        ? `inset 0px 0px 0px 2px ${theme.palette.background.paper}`
        : 'none'
      : '',

  '&:hover, &:focus': {
    textDecoration: 'none',
    cursor: clickable ? 'pointer' : 'default',
    transition: 'all linear 150ms',
    // transform: 'scale(0.99)',
    backgroundColor:
      hoverStyle === 'primary'
        ? transparentize(0.2, theme.palette.primary.main)
        : hoverStyle === 'secondary'
        ? transparentize(0.2, theme.palette.secondary.main)
        : hoverStyle === 'divider'
        ? transparentize(0.2, theme.palette.divider)
        : hoverStyle === 'error'
        ? transparentize(0.2, theme.palette.error.main)
        : hoverStyle === 'paper'
        ? transparentize(0.2, theme.palette.background.paper)
        : hoverStyle === 'transparent'
        ? transparentize(1.0, theme.palette.background.paper)
        : 'inherit',
    boxShadow:
      styledAs === 'primary'
        ? transWithBorder
          ? `inset 0px 0px 0px 2px ${theme.palette.primary.main}`
          : 'none'
        : styledAs === 'secondary'
        ? transWithBorder
          ? `inset 0px 0px 0px 2px ${theme.palette.secondary.main}`
          : 'none'
        : styledAs === 'divider'
        ? transWithBorder
          ? `inset 0px 0px 0px 2px ${theme.palette.divider}`
          : 'none'
        : styledAs === 'error'
        ? transWithBorder
          ? `inset 0px 0px 0px 2px ${theme.palette.error.main}`
          : 'none'
        : styledAs === 'paper'
        ? transWithBorder
          ? `inset 0px 0px 0px 2px ${theme.palette.background.paper}`
          : 'none'
        : '',
    opacity: hoverStyle === 'faded' ? 0.8 : 1.0,
  },

  '& svg': {
    display: 'flex',
  },
}))
