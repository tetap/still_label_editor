import React from 'react'
import { Outlet } from 'react-router-dom'
import { BasicHeader } from './components'
import Box from '@mui/material/Box'

export const BasicLayout = React.memo(() => {
  return (
    <Box
      sx={{
        width: 1,
        height: '100vh',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <BasicHeader />
      <Box
        sx={{
          flex: 1,
          minHeight: '1px',
          minWidth: '1px',
          width: 1,
          position: 'relative'
        }}
      >
        <Outlet />
      </Box>
    </Box>
  )
})
