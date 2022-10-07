import React, { PropsWithChildren } from 'react'
import useMediaQuery from '@mui/material/useMediaQuery'
import { createTheme, Shadows, ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'

// 生成新的阴影
function generateShadows(): Shadows {
  const shadows: Shadows = new Array(25).fill('none') as Shadows
  const shadow = 'rgb(101 119 134/20%) 0px 0px {px1}px,rgb(101 119 134/15%) 0px 0px {px2}px {px3}px'
  for (let i = 1; i < 25; i++) {
    shadows[i] = shadow
      .replace('{px1}', `${5 + i}`)
      .replace('{px2}', `${3 + i}`)
      .replace('{px3}', `${1 + i}`)
  }
  return shadows
}

const fontFamily =
  '-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji"'
export default React.memo(({ children }: PropsWithChildren<{}>) => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')
  // const prefersDarkMode = 'dark'
  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          background: {
            default: prefersDarkMode ? '#121212' : '#eeeef1'
          },
          mode: prefersDarkMode ? 'dark' : 'light'
        },
        shadows: generateShadows(),
        typography: {
          fontFamily: fontFamily
        }
      }),
    [prefersDarkMode]
  )
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline enableColorScheme />
      {children}
    </ThemeProvider>
  )
})
