import React, { useCallback } from 'react'
import Dialog from '@mui/material/Dialog'
import Button from '@mui/material/Button'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import Slide from '@mui/material/Slide'
import { TransitionProps } from '@mui/material/transitions'
import { Spin } from '@/components'

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />
})

export function useCreateLabelModal() {
  const [open, setOpen] = React.useState(false)
  const [spinning, setSpinning] = React.useState(false)
  const CreateLabelModal = React.memo(() => {
    const handleClose = () => {
      setOpen(false)
    }
    return (
      <Dialog open={open} TransitionComponent={Transition} keepMounted onClose={handleClose}>
        <Spin spinning={spinning}>
          <DialogTitle id="alert-dialog-title">Use</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Let Google help apps determine location. This means sending anonymous location data to
              Google, even when no apps are running.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} tabIndex={-1}>
              Disagree
            </Button>
            <Button onClick={handleClose} tabIndex={-1}>
              Agree
            </Button>
          </DialogActions>
        </Spin>
      </Dialog>
    )
  })
  return {
    CreateLabelModal,
    setOpen
  }
}
