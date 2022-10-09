import React, { useEffect } from 'react'
import Box from '@mui/material/Box'
import { Sider, useContent, Setting } from './components'
import StillLabel, { onWheel } from '@/utils/still_label_editor'

const Editor: React.FC = () => {
  const { Content, contentRef } = useContent()
  useEffect(() => {
    if (!contentRef.current) return
    const container = contentRef.current
    const { clientWidth: width, clientHeight: height } = container
    const Stage = new StillLabel.Stage({ container, width, height })
    const template = new StillLabel.Template(50, 30, Stage)
    Stage.add(template)
    Stage.initEvent([onWheel])
  }, [])
  return (
    <Box sx={{ width: 1, height: 1, position: 'relative', display: 'flex' }}>
      <Sider />
      <Content />
      <Setting />
    </Box>
  )
}

export default Editor
