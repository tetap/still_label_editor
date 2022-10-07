import React from 'react'
import Avatar from '@mui/material/Avatar'
import PersonIcon from '@mui/icons-material/Person'

export const Account = React.memo(() => {
  return (
    <Avatar sx={{ bgcolor: 'primary.dark', width: 30, height: 30, cursor: 'pointer' }}>
      <PersonIcon sx={{ fontSize: 22, color: 'common.white' }} />
    </Avatar>
  )
})
