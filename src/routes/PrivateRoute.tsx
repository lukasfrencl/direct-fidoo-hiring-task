import * as React from 'react'
import { Navigate } from 'react-router'

import { useAuth } from '~/context/AuthContext'

interface PrivateRouteProps {
  children?: React.ReactNode
}

export const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const { isAuthenticated } = useAuth()

  if (isAuthenticated) return children

  return <Navigate to="/login" />
}
