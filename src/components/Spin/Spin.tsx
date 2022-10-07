import React, { PropsWithChildren } from 'react'
import CircularProgress from '@mui/material/CircularProgress'
import Backdrop from '@mui/material/Backdrop'

export default React.memo(
  ({ children, spinning }: { spinning: boolean } & PropsWithChildren<{}>) => {
    return (
      <>
        <Backdrop
          sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1, position: 'absolute' }}
          open={spinning}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
        {children}
      </>
    )
  }
)
