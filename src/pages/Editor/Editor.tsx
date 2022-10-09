import React, { useCallback, useEffect } from 'react'
import Box from '@mui/material/Box'
import { Sider, Content, Setting, Background } from './components'
import { StillLabel } from '@/utils/still_label_editor'

const Editor: React.FC = () => {
  const id = 'container'
  const initEditor = useCallback(() => {
    return <div>123</div>
  }, [])
  useEffect(() => {
    console.log(document.getElementById(id))
  }, [])
  return (
    <Box sx={{ width: 1, height: 1, position: 'relative', display: 'flex' }}>
      <Background />
      <Sider />
      <Content id={id}>{initEditor()}</Content>
      <Setting />
    </Box>
  )
}

export default Editor
