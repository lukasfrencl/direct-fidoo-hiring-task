import * as React from 'react'

import { Box, Typography } from '@mui/material'

import { useAuth } from '~/context/AuthContext'

export const HomePage: React.FC = () => {
  const { user } = useAuth()

  return (
    <Box sx={{ m: 3, width: '100%' }}>
      <Typography variant="h4" component="div" color="primary" sx={{ mb: 1, mt: 2 }}>{user?.email}</Typography>
    </Box>
  )
}
