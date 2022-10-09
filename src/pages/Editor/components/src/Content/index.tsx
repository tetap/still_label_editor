import React, { PropsWithChildren } from 'react'
import Box from '@mui/material/Box'

export default React.memo(({ id, children }: { id: string } & PropsWithChildren<{}>) => {
  return (
    <Box
      id={id}
      sx={{
        flex: 1,
        minWidth: '1px',
        minHeight: '1px',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {children}
    </Box>
  )
})
