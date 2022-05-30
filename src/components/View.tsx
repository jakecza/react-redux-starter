/* eslint-disable react/display-name */
// @mui
import { Box, BoxProps, styled } from '@mui/material'
import { forwardRef, ReactNode } from 'react'

// ----------------------------------------------------------------------

interface Props extends BoxProps {
  children: ReactNode
  meta?: ReactNode
  title: string
}

const ViewStyled = styled(Box)(({ theme }) => ({
  height: '100%',
}))

const View = forwardRef<HTMLDivElement, Props>(({ children, meta, title, ...other }, ref) => (
  <>
    <ViewStyled ref={ref} {...other}>
      {children}
    </ViewStyled>
  </>
))

export default View
