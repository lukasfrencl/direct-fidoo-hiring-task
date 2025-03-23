import * as React from 'react'

import { Routes as ReactRouterRoutes, Route } from 'react-router'

import { PrivateRoute } from './PrivateRoute'

import { HomePage } from '~/pages/HomePage'
import { LoginPage } from '~/pages/LoginPage'
import { LogoutPage } from '~/pages/LogoutPage'

export const Routes: React.FC = () => (
  <ReactRouterRoutes>
    <Route path="/" element={<PrivateRoute><HomePage /></PrivateRoute>} />
    <Route path="/login" element={<LoginPage />} />
    <Route path="/logout" element={<PrivateRoute><LogoutPage /></PrivateRoute>} />
  </ReactRouterRoutes>
)
