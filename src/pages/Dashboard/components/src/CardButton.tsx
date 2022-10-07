import React, { DOMAttributes, FunctionComponent, PropsWithChildren } from 'react'
import ButtonBase from '@mui/material/ButtonBase'
import Paper from '@mui/material/Paper'

type CardButtonProps = { icon: FunctionComponent<any> } & PropsWithChildren<{}> &
  DOMAttributes<HTMLElement>

export const CardButton = React.memo((props: CardButtonProps) => {
  const { icon, children, ...rest } = props
  return (
    <Paper
      variant="outlined"
      sx={{
        '&:hover': {
          backgroundColor: 'rgba(0, 0, 0, 0.06)'
        }
      }}
      {...rest}
    >
      <ButtonBase
        sx={{
          flexDirection: 'column',
          width: '100%',
          padding: 4
        }}
      >
        {icon && React.createElement(icon, { sx: { fontSize: 46 } })}
        {children}
      </ButtonBase>
    </Paper>
  )
})
