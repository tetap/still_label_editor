/*
 *@description: 通用弹窗hooks
 *@author: zyc
 *@date-time: 2022-10-08 09:45:59
 */
import React, { forwardRef, useCallback, useImperativeHandle, useRef } from 'react'
import { Spin } from '@/components'
import Button from '@mui/material/Button'
import Dialog, { DialogProps } from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import Box from '@mui/material/Box'

interface IModalArgs extends Omit<DialogProps, 'open'> {
  title?: string
  children?: React.ReactNode | undefined
  disabledBackdropClick?: boolean
  disabledEscapeKeyDown?: boolean
  onOk?: (setSpinning: React.Dispatch<React.SetStateAction<boolean>>, close: () => void) => void
  onCancel?: (close: () => void) => void
}

type ModalRefType = {
  open: () => void
  close: () => void
}

export function useModal() {
  const modalRef = useRef<ModalRefType>()
  const Modal = forwardRef((props: IModalArgs, mRef) => {
    const {
      children,
      title,
      disabledBackdropClick = false,
      disabledEscapeKeyDown = false,
      onOk,
      onCancel,
      ...args
    } = props
    const [visiable, setVisiable] = React.useState(false)
    const [spinning, setSpinning] = React.useState(false)
    const open = () => {
      setVisiable(true)
    }
    const close = () => {
      setVisiable(false)
    }
    useImperativeHandle(mRef, () => ({ open, close }))
    return (
      <Dialog
        open={visiable}
        keepMounted
        fullWidth
        onClose={(_, reason) => {
          if (disabledBackdropClick && reason === 'backdropClick') return
          if (disabledEscapeKeyDown && reason === 'escapeKeyDown') return
          close()
        }}
        {...args}
      >
        <Spin spinning={spinning}>
          <Box component="form" noValidate autoComplete="off">
            {title && <DialogTitle>{title}</DialogTitle>}
            <DialogContent>{children}</DialogContent>
            <DialogActions>
              <Button
                onClick={() => {
                  if (!onCancel) {
                    close()
                  } else {
                    onCancel(close)
                  }
                }}
                tabIndex={-1}
              >
                取消
              </Button>
              <Button
                variant="contained"
                onClick={() => {
                  if (!onOk) {
                    close()
                  } else {
                    onOk(setSpinning, close)
                  }
                }}
                tabIndex={-1}
              >
                确定
              </Button>
            </DialogActions>
          </Box>
        </Spin>
      </Dialog>
    )
  })
  return {
    Modal: useCallback((props: IModalArgs) => {
      return <Modal ref={modalRef} {...props} />
    }, []),
    modalRef
  }
}
