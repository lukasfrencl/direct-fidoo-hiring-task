import * as React from 'react'
import { BrowserRouter } from 'react-router'

import { createTheme, ThemeProvider } from '@mui/material/styles'

import { AuthProvider } from './context/AuthContext'

import { Layout } from './layout/Layout'
import { Routes } from './routes/Routes'

const theme = createTheme({
  palette: {
    primary: {
      main: '#0066CC',
    },
  },
})

export const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <BrowserRouter>
          <Layout>
            <Routes />
          </Layout>
        </BrowserRouter>
      </AuthProvider>
    </ThemeProvider>
  )
}
