import { Suspense, lazy } from 'react'
import Backdrop from '@mui/material/Backdrop'
import CircularProgress from '@mui/material/CircularProgress'

export function lazyComponent(func: () => Promise<{ default: React.ComponentType<any> }>) {
  const Element = lazy(func)
  return (
    <Suspense
      fallback={
        <Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }} open invisible>
          <CircularProgress color="inherit" />
        </Backdrop>
      }
    >
      <Element />
    </Suspense>
  )
}
