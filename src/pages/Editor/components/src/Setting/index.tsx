import React, { PropsWithChildren } from 'react'
import Box from '@mui/material/Box'
import { getBackgroundColor } from '@/components/Provider/ThemeUtils'

export default React.memo(({ children }: PropsWithChildren<{}>) => {
  return (
    <Box
      sx={{
        position: 'relative',
        overflow: 'hidden',
        flex: 'none',
        width: 320,
        backgroundColor: (theme) => getBackgroundColor(theme)
      }}
    >
      {children}
    </Box>
  )
})
