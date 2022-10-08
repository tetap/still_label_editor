import Box from '@mui/material/Box'
import React from 'react'
import { Sider, Content, Background } from './components'
import { StillLabel } from '@/utils/still_label_editor'

const Editor: React.FC = () => {
  const template = new StillLabel.Template(50, 30)
  return (
    <Box sx={{ width: 1, height: 1, position: 'relative', display: 'flex' }}>
      <Background />
      <Sider />
      <Content />
    </Box>
  )
}

export default Editor
