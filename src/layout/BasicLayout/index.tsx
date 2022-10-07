import React from 'react'
import { Outlet } from 'react-router-dom'
import { BasicHeader, BasicSider } from './components'
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
          display: 'flex',
          justifyContent: 'center'
        }}
      >
        <BasicSider />
        <Box
          sx={{
            flex: 1,
            minHeight: '1px',
            minWidth: '1px',
            width: 1,
            height: 1,
            padding: 2
          }}
        >
          <Outlet />
        </Box>
      </Box>
    </Box>
  )
})
