import * as React from 'react'

import { Box } from '@mui/material'

import { AppBar } from './AppBar'

import { useAuth } from '~/context/AuthContext'

interface Props {
  children?: React.ReactNode
}

export const Layout: React.FC<Props> = ({ children }) => {
  const { isAuthenticated } = useAuth()

  return (
    <Box bgcolor="#EDEFF3" sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Box sx={{  width: '100%' }}>
        {isAuthenticated && <AppBar />}
      </Box>
      <Box component="main" sx={{ display: 'flex', width: '100%' }}>
        {children}
      </Box>
    </Box>
  )
}
