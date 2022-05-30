import { AccountBalanceWallet, ArrowLeft, Google } from '@mui/icons-material'
import {
  Box,
  Button,
  DialogActions,
  DialogContent,
  Grid,
  IconButton,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material'
import { useEffect, useState } from 'react'
import { useAccountModalToggle, useModalOpen } from 'state/application/hooks'
import { ApplicationModal } from 'state/application/reducer'

import usePrevious from '../../hooks/usePrevious'
import AppModal, { AppModalTitle } from '../AppModal'
import { ButtonStyled } from '../ButtonStyled'

const ACCOUNT_VIEWS = {
  LOGIN: 'login',
  SIGNUP: 'signup',
  ACCOUNT: 'account',
  PENDING: 'pending',
}
// interface AccountModalProps {
//   checkStatus: 'loading' | 'error' | 'success'
//   checkResult: SigninCheckResult
// }

export default function AccountModal() {
  const [accountView, setAccountView] = useState(ACCOUNT_VIEWS.ACCOUNT)
  const [pendingError, setPendingError] = useState<boolean>()
  const prevAccountView = usePrevious(accountView)
  const accountModalOpen = useModalOpen(ApplicationModal.ACCOUNT)
  const toggleAccountModal = useAccountModalToggle()

  const theme = useTheme()
  const matchesXS = useMediaQuery(theme.breakpoints.down('sm'))
  const loggedIn = true

  //always reset to account view
  useEffect(() => {
    if (accountModalOpen) {
      if (loggedIn) {
        setAccountView(ACCOUNT_VIEWS.ACCOUNT)
      } else {
        setAccountView(ACCOUNT_VIEWS.LOGIN)
      }
    }
  }, [accountModalOpen])

  // close on connection, when logged out before
  useEffect(() => {
    if (accountModalOpen) {
      console.log('Closing AccountModal due to successful sign-in/out')

      toggleAccountModal()
    }
  }, [loggedIn])

  // close modal when a connection is successful
  // const activePrevious = usePrevious(active)
  // const connectorPrevious = usePrevious(connector)
  // useEffect(() => {
  //   if (accountModalOpen && ((active && !activePrevious) || (connector && connector !== connectorPrevious && !error))) {
  //     setAccountView(ACCOUNT_VIEWS.ACCOUNT)
  //   }
  // }, [setAccountView, active, error, connector, accountModalOpen, activePrevious, connectorPrevious])

  function getLoginOptions() {
    return (
      <Stack direction="column" spacing={2}>
        <ButtonStyled>
          {matchesXS ? (
            <Google htmlColor="#2daae1" />
          ) : (
            <Stack justifyContent="center" spacing={1} alignItems="center" direction="row">
              <Google htmlColor="#2daae1" />

              <Typography variant="subtitle1">Login with Google</Typography>
            </Stack>
          )}
        </ButtonStyled>
        <ButtonStyled>
          {matchesXS ? (
            <AccountBalanceWallet htmlColor="#88aa88" />
          ) : (
            <Stack justifyContent="center" spacing={1} alignItems="center" direction="row">
              <AccountBalanceWallet htmlColor="#88aa88" />

              <Typography variant="subtitle1">Login with Ethereum</Typography>
            </Stack>
          )}
        </ButtonStyled>
      </Stack>
    )
  }

  function getModalContent() {
    if (accountView === ACCOUNT_VIEWS.ACCOUNT) {
      return (
        <>
          <AppModalTitle id="wallet-modal" onClose={toggleAccountModal}>
            Account
          </AppModalTitle>
          <DialogContent>Content placed here</DialogContent>
          <DialogActions>
            <Button>Sign Out</Button>
          </DialogActions>
        </>
      )
    }
    return (
      <>
        <AppModalTitle id="account-modal" onClose={toggleAccountModal}>
          {accountView !== ACCOUNT_VIEWS.LOGIN ? (
            <IconButton
              onClick={() => {
                setPendingError(false)
                setAccountView(ACCOUNT_VIEWS.ACCOUNT)
              }}
              sx={{
                position: 'absolute',
                left: 8,
                top: 8,
                color: (theme) => theme.palette.info.main,
              }}
            >
              <ArrowLeft />
            </IconButton>
          ) : (
            'Login'
          )}
        </AppModalTitle>
        <DialogContent>
          {accountView === ACCOUNT_VIEWS.PENDING ? (
            // <PendingView
            //   connector={pendingWallet}
            //   error={pendingError}
            //   setPendingError={setPendingError}
            //   tryActivation={tryActivation}
            // />
            <Box>Pending..</Box>
          ) : (
            <Grid container direction="column" spacing={1} sx={{ marginTop: '1rem' }}>
              {getLoginOptions()}
            </Grid>
          )}
        </DialogContent>
      </>
    )
  }

  return (
    <AppModal maxWidth="xs" open={accountModalOpen} onClose={toggleAccountModal}>
      {getModalContent()}
    </AppModal>
  )
}
