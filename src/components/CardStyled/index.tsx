import { Card, styled } from '@mui/material'
import { defBorderRadius } from 'state/constants'

export interface CardStyledProps {
  styledAs?: 'primary' | 'secondary' | 'paper'
  transWithBorder?: boolean
}

export const CardStyled = styled(Card, {
  // Configure which props should be forwarded on DOM
  shouldForwardProp: (prop) => prop !== 'styledAs' && prop !== 'hoverStyle' && prop !== 'transWithBorder',
  name: 'CardStyled',
  slot: 'Root',
  // We are specifying here how the styleOverrides are being applied based on props
  // overridesResolver: (props, styles) => [
  //   styles.root,
  //   props.color === 'primary' && styles.primary,
  //   props.color === 'secondary' && styles.secondary,
  // ],
})<CardStyledProps>(({ theme, styledAs, transWithBorder }) => ({
  display: 'flex',
  flexDirection: 'column',
  msFlexDirection: 'column',
  MozBoxOrient: 'vertical',
  position: 'relative',
  padding: '24px 40px',
  transition: 'all 150ms linear',
  borderRadius: defBorderRadius,
  textDecoration: 'none',
  backgroundColor: transWithBorder
    ? 'rgba(0,0,0,0.1)'
    : styledAs === 'primary'
    ? theme.palette.primary.main
    : styledAs === 'secondary'
    ? theme.palette.secondary.main
    : styledAs === 'paper'
    ? theme.palette.background.paper
    : 'none',

  color:
    styledAs === 'primary'
      ? theme.palette.text.primary
      : styledAs === 'secondary'
      ? theme.palette.text.primary
      : styledAs === 'paper'
      ? theme.palette.text.primary
      : styledAs === 'trans'
      ? theme.palette.text.primary
      : 'none',

  border: transWithBorder ? '4px solid' : 'none',
  borderColor:
    styledAs === 'primary'
      ? theme.palette.primary.main
      : styledAs === 'secondary'
      ? theme.palette.secondary.main
      : styledAs === 'paper'
      ? theme.palette.background.paper
      : 'none',
}))

export const CardFluid = styled(CardStyled)(({ theme }) => ({
  height: '100%',
  width: '100%',
}))
