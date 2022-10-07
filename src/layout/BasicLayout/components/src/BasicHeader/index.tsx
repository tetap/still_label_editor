import React from 'react'
import Box from '@mui/material/Box'
import { Logo, Account } from './components'

const BasicHeader = React.memo(() => {
  return (
    <Box
      sx={{
        width: 1,
        height: '50px',
        bgcolor: 'grey.900',
        color: 'common.white',
        flex: 'none',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}
    >
      <Logo />
      <div style={{ display: 'flex', alignItems: 'center', paddingRight: 16 }}>
        <Account />
      </div>
    </Box>
  )
})

export default BasicHeader
