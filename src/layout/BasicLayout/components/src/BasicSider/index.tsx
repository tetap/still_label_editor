import React from 'react'
import { useTranslation } from 'react-i18next'
import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'
import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import GridViewIcon from '@mui/icons-material/GridView'

const BasicSider = React.memo(() => {
  const { t } = useTranslation()
  return (
    <Box
      sx={{
        width: 280,
        height: 1,
        flex: 'none',
        padding: 2,
        boxSizing: 'border-box',
        borderRight: '1px solid',
        borderColor: 'divider'
      }}
    >
      <Paper sx={{ width: 1 }}>
        <List
          component="nav"
          aria-label="main mailbox folders"
          sx={{ paddingTop: '1px', paddingBottom: '1px' }}
        >
          <ListItemButton
            selected={true}
            sx={{
              margin: 2,
              borderRadius: 1,
              '&.Mui-selected': {
                '.MuiListItemIcon-root,.MuiTypography-root': {
                  color: 'primary.main',
                  fontWeight: 'bold'
                }
              }
            }}
          >
            <ListItemIcon sx={{ minWidth: 30 }}>
              <GridViewIcon />
            </ListItemIcon>
            <ListItemText primary={t('BasicSider.AllLabel')} />
          </ListItemButton>
        </List>
      </Paper>
    </Box>
  )
})

export default BasicSider
