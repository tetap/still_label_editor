import Box from '@mui/material/Box'
import React from 'react'

export default React.memo(() => {
  return (
    <Box
      sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: 1,
        height: 1,
        zIndex: -1
      }}
    >
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="smallGrid" width="10" height="10" patternUnits="userSpaceOnUse">
            <path
              d="M 10 0 L 0 0 0 10"
              fill="none"
              stroke="rgba(207, 207, 207, 0.3)"
              strokeWidth={1}
            ></path>
          </pattern>
          <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
            <rect width="50" height="50" fill="url(#smallGrid)"></rect>
            <path
              d="M 50 0 L 0 0 0 50"
              fill="none"
              stroke="rgba(186, 186, 186, 0.5)"
              strokeWidth={1}
            ></path>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)"></rect>
      </svg>
    </Box>
  )
})
