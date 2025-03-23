import * as React from 'react'
import { useNavigate } from 'react-router'

import { Box } from '@mui/material'

import { useAuth } from '~/context/AuthContext'
import { LoginForm } from '~/forms/LoginForm'

export const LoginPage: React.FC = () => {
  const navigate = useNavigate()
  const { isAuthenticated } = useAuth()

  React.useEffect(() => {
    if (isAuthenticated) {
      navigate('/')
    }
  }, [isAuthenticated, navigate])

  if (isAuthenticated) {
    return null
  }

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', mt: 5 }}>
      <LoginForm/>
    </Box>
  )
}
