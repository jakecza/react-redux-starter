import { styled } from '@mui/material'
import { useAccountModalToggle } from 'state/application/hooks'

import AccountModal from '../AccountModal'
import { ChipStyled } from '../ChipStyled'

//const AccountStatusGeneric = styled(ChipStyled)<{ pending?: boolean }>(({ theme }) => ({
const AccountStatusGeneric = styled(ChipStyled)(({ theme }) => ({
  minWidth: '200px',
  height: '100%',
  maxHeight: '48px',
  padding: '0.5rem 1rem',
  marginLeft: '2rem',
  borderRadius: '10px',
  userSelect: 'none',
  '&:focus': {
    outline: 'none',
  },

  [theme.breakpoints.down('md')]: {
    minWidth: 'fit-content',
  },
}))

function AccountStatusInner() {
  //   const { account, connector, error } = useWeb3React()
  //   const { ENSName } = useENSName(account ?? undefined)
  // const hasPendingTransactions = false //!!pending.length

  const toggleAccountModal = useAccountModalToggle()

  return (
    // <AuthWrapper
    //   fallback={
    <AccountStatusGeneric
      styledAs="secondary"
      transWithBorder
      clickable
      id="connect-login"
      onClick={toggleAccountModal}
      label="Login"
    />
    //   }
    // >
    //   <AccountStatusGeneric
    //     id="account-status-connected"
    //     styledAs="secondary"
    //     transWithBorder
    //     clickable
    //     onClick={toggleAccountModal}
    //     avatar={
    //       <Avatar sx={{ width: 36, height: 36, background: 'none' }} alt="avatar">
    //         <AccountBalanceWalletOutlined />
    //       </Avatar>
    //     }
    //     label={'Connected'}
    //   />
    // </AuthWrapper>
  )

  // WEB3 LOGIN
  // if (accountLoggedIn) {
  //   return (
  //     <AccountStatusGeneric
  //       id="account-status-connected"
  //       styledAs="secondary"
  //       transWithBorder
  //       clickable
  //       onClick={toggleAccountModal}
  //       pending={hasPendingTransactions}
  //       avatar={
  //         <Avatar sx={{ width: 36, height: 36, background: 'none' }} alt="avatar">
  //           <AccountBalanceWalletOutlined />
  //         </Avatar>
  //       }
  //       label={'Logged in'}
  //     />
  //   )
  // } else if (accountError) {
  //   return (
  //     <AccountStatusGeneric
  //       styledAs="secondary"
  //       transWithBorder
  //       clickable
  //       onClick={toggleAccountModal}
  //       label={'Error'}
  //     />
  //   )
  // } else {
  //   return (
  //     <AccountStatusGeneric
  //       styledAs="secondary"
  //       transWithBorder
  //       clickable
  //       id="connect-login"
  //       onClick={toggleAccountModal}
  //       label="Login"
  //     />
  //   )
  // }
}

export default function AccountStatus({}) {
  //   const { active, account } = useWeb3React()
  //   const contextNetwork = useWeb3React(NetworkContextName)
  //   const { ENSName } = useENSName(account ?? undefined)

  return (
    <>
      <AccountStatusInner />
      <AccountModal />
    </>
  )
}
