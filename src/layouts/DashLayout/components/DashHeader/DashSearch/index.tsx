// eslint-disable-next-line no-restricted-imports
import { Close, Search, SearchRounded, TuneRounded } from '@mui/icons-material'
import { Box, Grid, InputAdornment, Popper, useMediaQuery, Zoom } from '@mui/material'
// material-ui
import { styled, useTheme } from '@mui/material/styles'
// eslint-disable-next-line no-restricted-imports
import { shouldForwardProp } from '@mui/system'
import { ButtonStyled } from 'components/ButtonStyled'
import { CardStyled } from 'components/CardStyled'
import { OutlinedInputStyled } from 'components/InputStyled'
// assets
// third-party
import { bindPopper, bindToggle, PopupState, usePopupState } from 'material-ui-popup-state/hooks'
import { useState } from 'react'
// project imports

const PopperStyle = styled(Popper, { shouldForwardProp })(({ theme }) => ({
  zIndex: 1200,
  width: '100%',
  top: `-50px !important`,
  // top: `${dashHeaderHeight} !important`,
  padding: '0 1rem',
  [theme.breakpoints.down('sm')]: {
    padding: '0 1rem',
  },
}))

const DashOutlinedInput = styled(OutlinedInputStyled, { shouldForwardProp })(({ theme }) => ({
  width: '100%',
  maxWidth: '600px',
  height: '100%',
  maxHeight: '48px',
  marginLeft: '1rem',
  paddingLeft: '1rem',
  paddingRight: '1rem',

  '& input': {
    background: 'transparent !important',
    paddingLeft: '4px !important',
  },

  [theme.breakpoints.down('md')]: {
    marginLeft: '0rem',
    maxWidth: 'none',
    maxHeight: 'none',
  },
}))

interface DashMobileSearchProps {
  value: string
  // eslint-disable-next-line @typescript-eslint/ban-types
  setValue: Function
  popupState: PopupState
}

function DashMobileSearch({ value, setValue, popupState }: DashMobileSearchProps) {
  const theme = useTheme()

  return (
    <DashOutlinedInput
      id="input-search-header"
      value={value}
      onChange={(e: any) => setValue(e.target.value)}
      placeholder="Search..."
      color="secondary"
      startAdornment={
        <InputAdornment position="start">
          <ButtonStyled
            styledAs="transparent"
            hoverStyle="faded"
            // transWithBorder
            sx={{
              borderRadius: '8px',
              minWidth: '28px',
              padding: '0.5rem',
            }}
          >
            <SearchRounded htmlColor={theme.palette.secondary.light} />
          </ButtonStyled>
        </InputAdornment>
      }
      endAdornment={
        <InputAdornment position="end">
          <ButtonStyled
            styledAs="transparent"
            hoverStyle="faded"
            // transWithBorder
            sx={{
              borderRadius: '8px',
              minWidth: '36px',
              padding: '0.5rem',
            }}
          >
            <TuneRounded htmlColor={theme.palette.secondary.light} />
          </ButtonStyled>
          <Box sx={{ ml: 2 }}>
            <ButtonStyled
              {...bindToggle(popupState)}
              styledAs="transparent"
              hoverStyle="faded"
              sx={{ borderRadius: '8px', minWidth: '36px', padding: '0.5rem' }}
            >
              <Close htmlColor={theme.palette.secondary.light} />
            </ButtonStyled>
          </Box>
        </InputAdornment>
      }
      aria-describedby="dash-searchbar"
      // inputProps={{ 'aria-label': 'weight' }}
    />
  )
}

export default function DashSearch() {
  const theme = useTheme()
  const [value, setValue] = useState('')
  const matchesSM = useMediaQuery(theme.breakpoints.down('md'))
  const popupState = usePopupState({ variant: 'popper', popupId: 'search-popper' })

  if (matchesSM) {
    return (
      <Box display="block">
        <ButtonStyled
          {...bindToggle(popupState)}
          styledAs="secondary"
          transWithBorder
          sx={{ ml: 2, minWidth: '36px', padding: '0.5rem' }}
        >
          <Search htmlColor={theme.palette.secondary.light} />
        </ButtonStyled>
        <PopperStyle {...bindPopper(popupState)} transition>
          {({ TransitionProps }) => (
            <Zoom {...TransitionProps}>
              <CardStyled
                sx={{
                  backgroundColor: 'background.paper',
                  p: 0,
                  m: 0,
                }}
              >
                <Box sx={{ p: 0, m: 0 }}>
                  <Grid container alignItems="center" justifyContent="space-between">
                    <Grid item xs>
                      <DashMobileSearch value={value} setValue={setValue} popupState={popupState} />
                    </Grid>
                  </Grid>
                </Box>
              </CardStyled>
            </Zoom>
          )}
        </PopperStyle>
      </Box>
    )
  } else {
    return (
      <>
        <DashOutlinedInput
          id="input-search-header"
          value={value}
          onChange={(e: any) => setValue(e.target.value)}
          placeholder="Search..."
          startAdornment={
            <InputAdornment position="start">
              <ButtonStyled
                styledAs="transparent"
                hoverStyle="faded"
                // transWithBorder
                sx={{
                  borderRadius: '8px',
                  minWidth: '28px',
                  padding: '0.35rem',
                }}
              >
                <SearchRounded htmlColor={theme.palette.secondary.light} />
              </ButtonStyled>
            </InputAdornment>
          }
          endAdornment={
            <InputAdornment position="end">
              <ButtonStyled
                styledAs="transparent"
                hoverStyle="faded"
                // transWithBorder
                sx={{
                  borderRadius: '8px',
                  minWidth: '28px',
                  padding: '0.35rem',
                }}
              >
                <TuneRounded htmlColor={theme.palette.secondary.light} />
              </ButtonStyled>
            </InputAdornment>
          }
          aria-describedby="dash-searchbar"
          // inputProps={{ 'aria-label': 'weight' }}
        />
      </>
    )
  }
}
