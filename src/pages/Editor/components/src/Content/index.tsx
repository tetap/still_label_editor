import React, { createRef, PropsWithChildren, useCallback } from 'react'
import Box from '@mui/material/Box'
import Background from '../Background'

export type ContentPropsType = PropsWithChildren<{}>

export default function () {
  const contentRef = createRef<HTMLDivElement | undefined>()
  const Content = React.memo(() => {
    return (
      <Box
        sx={{
          flex: 1,
          minWidth: '1px',
          minHeight: '1px',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <Box ref={contentRef} className="container" style={{ width: '100%', height: '100%' }}></Box>
        <Background />
      </Box>
    )
  })
  return {
    Content: useCallback(() => {
      return <Content />
    }, []),
    contentRef
  }
}
