import { Box, FilledInput, InputBase, styled } from '@mui/material'
import FormControl, { useFormControl } from '@mui/material/FormControl'
import FormHelperText from '@mui/material/FormHelperText'
import * as React from 'react'
import { defBorderRadius } from 'state/constants'

export const OutlinedInputStyled = styled(InputBase)(({ theme }) => ({
  transition: theme.transitions.create(['border-color', 'background-color', 'box-shadow']),
  paddingTop: 12,
  paddingBottom: 12,
  borderRadius: defBorderRadius,
  borderColor: 'transparent !important',
  boxShadow: `inset 0 0 0 2px ${theme.palette.divider}`,
  '& fieldset': {},
  '&:hover': {
    borderColor: 'transparent !important',
    boxShadow: `inset 0 0 0 2px ${theme.palette.primary.dark}`,
  },
  '&.Mui-focused': {
    borderColor: 'transparent !important',
    boxShadow: `inset 0 0 0 2px ${theme.palette.primary.dark}`,
  },
}))

export const FilledInputStyled = styled(FilledInput)(({ theme }) => ({
  width: 'auto',
  lineHeight: '1.5',
}))

// example of a form control function
function MyFormHelperText() {
  const { focused } = useFormControl() || {}

  const helperText = React.useMemo(() => {
    if (focused) {
      return 'This field is being focused'
    }

    return null
  }, [focused])

  return <FormHelperText>{helperText}</FormHelperText>
}

function ExampleFormControl() {
  return (
    <Box component="form" noValidate autoComplete="off">
      <FormControl>
        <OutlinedInputStyled placeholder="Please enter text" />
        <MyFormHelperText />
      </FormControl>
    </Box>
  )
}
