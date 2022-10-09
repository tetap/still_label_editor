import { Theme } from '@mui/material/styles'

export const getBackgroundColor = (theme: Theme) => {
  return theme.palette.mode === 'light' ? theme.palette.common.white : 'transparent'
}
