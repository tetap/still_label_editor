import React from 'react'
import Box from '@mui/material/Box'

export default React.memo(() => {
  return (
    <Box
      sx={{
        flex: 1,
        minWidth: '1px',
        minHeight: '1px',
        position: 'relative'
      }}
    ></Box>
  )
})
