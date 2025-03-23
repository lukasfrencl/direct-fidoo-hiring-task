import * as React from 'react'
import { useNavigate } from 'react-router'

import { useAuth } from '~/context/AuthContext'

export const LogoutPage: React.FC = () => {
  const navigate = useNavigate()
  const { logout } = useAuth()

  React.useEffect(() => {
    logout()
    navigate('/login')
  }, [logout, navigate])

  return null
}
