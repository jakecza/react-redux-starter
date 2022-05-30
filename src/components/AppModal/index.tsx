import { Close } from '@mui/icons-material'
import { DialogTitle, DialogTitleProps, IconButton, Slide } from '@mui/material'
import Dialog, { DialogProps } from '@mui/material/Dialog'
import { TransitionProps } from '@mui/material/transitions'
import * as React from 'react'

export interface AppModalTitleProps extends DialogTitleProps {
  id: string
  children?: React.ReactNode
  onClose: () => void
}

export const AppModalTitle = (props: AppModalTitleProps) => {
  const { children, onClose, ...other } = props

  return (
    <DialogTitle sx={{ m: 0, px: 3, pt: 2, fontSize: '1.5rem !important', ...props.sx }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.info.main,
          }}
        >
          <Close />
        </IconButton>
      ) : null}
    </DialogTitle>
  )
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface AppModalProps extends DialogProps {
  // modalProp = prop
}

export default function AppModal({ open, onClose, children, sx, ...other }: AppModalProps) {
  //   const bind = {
  //     onDrag: (state) => {
  //       set({
  //         y: state.down ? state.movement[1] : 0,
  //       })
  //       if (state.movement[1] > 300 || (state.velocity > 3 && state.direction[1] > 0)) {
  //         onDismiss()
  //       }
  //     },
  //   }

  const Trans = React.forwardRef(function Transition(
    props: TransitionProps & {
      children: React.ReactElement<any, any>
    },
    ref: React.Ref<unknown>
  ) {
    return <Slide direction="up" in={open} ref={ref} {...props} />
  })

  return (
    <React.Fragment>
      <Dialog fullWidth open={open} onClose={onClose} sx={sx} {...other}>
        {/* prevents the automatic focusing of inputs on mobile */}
        {/* {!initialFocusRef && isMobile ? <div tabIndex={1} /> : null} */}
        {children}
      </Dialog>
    </React.Fragment>
  )
}
