import React from 'react'
import { Routes } from '@/router'
import { ThemeProvider } from './components'
const App: React.FC = () => {
  return (
    <ThemeProvider>
      <Routes />
    </ThemeProvider>
  )
}

export default App
