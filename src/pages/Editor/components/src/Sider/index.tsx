import React from 'react'
import ToggleButton from '@mui/material/ToggleButton'
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup'
import CropSquareIcon from '@mui/icons-material/CropSquare'
import TitleIcon from '@mui/icons-material/Title'
import NearMeOutlinedIcon from '@mui/icons-material/NearMeOutlined'
import Box from '@mui/material/Box'

export default React.memo(() => {
  return (
    <Box
      sx={{
        width: 74,
        height: '100%',
        overflow: 'auto',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 'none'
      }}
    >
      <ToggleButtonGroup
        size="large"
        color="primary"
        orientation="vertical"
        exclusive
        value="select"
        sx={{
          bgcolor: (theme) =>
            theme.palette.mode === 'light' ? theme.palette.common.white : theme.palette.common.black
        }}
      >
        <ToggleButton value="select" aria-label="select">
          <NearMeOutlinedIcon sx={{ transform: 'scaleX(-1)' }} />
        </ToggleButton>
        <ToggleButton value="square" aria-label="square">
          <CropSquareIcon />
        </ToggleButton>
        <ToggleButton value="text" aria-label="text">
          <TitleIcon />
        </ToggleButton>
      </ToggleButtonGroup>
    </Box>
  )
})
