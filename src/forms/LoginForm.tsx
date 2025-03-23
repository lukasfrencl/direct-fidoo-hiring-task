import * as React from 'react'
import { useNavigate } from 'react-router'
import { throttle } from 'lodash-es'

import { Box, Typography, TextField, Button } from '@mui/material'

import { checkUsername } from '~/api/checkUsername'
import { useAuth } from '~/context/AuthContext'

const THROTTLE_FOR_MS = 100

export const LoginForm: React.FC = () => {
  const navigate = useNavigate()
  const { login } = useAuth()

  const [username, setUsername] = React.useState<string>('')
  const [loginState, setLoginState] = React.useState<string>('')

  const handleLogin = throttle(() => {
    checkUsername(username)
      .then((response) => {
        if (response.error) {
          setLoginState(`${response.error}: ${response.data}`)
        } else {
          const user = { username, email: response.data }
          login(user)
          navigate('/')
        }
      })
      .catch((error: Error) => {
        setLoginState(error.message)
      })
  }, THROTTLE_FOR_MS)

  const isSubmitDisabled = !username || !!loginState

  const handleEnterKey = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      if (!isSubmitDisabled) handleLogin()
    }
  }

  return (
    <Box
      sx={{
        display: 'flex',
        boxShadow: 10,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minWidth: '380px',
        backgroundColor: 'white',
        p: 5,
        mb: 3,
      }}
    >
      <Typography variant="h4" component="div" color="primary" sx={{ mb: 1, mt: 2 }}>Login</Typography>
      <TextField
        label="Username"
        variant="outlined"
        size="small"
        fullWidth
        margin="normal"
        onChange={(e) => {
          setUsername(e.target.value)
          setLoginState('')
        }}
        onKeyDown={handleEnterKey}
      />
      <Typography color="error" sx={{ minHeight: '24px', fontSize: '14px', maxWidth: '290px' }}>{loginState}</Typography>
      <Button
        disabled={isSubmitDisabled}
        variant="contained"
        color="primary"
        fullWidth
        sx={{ textTransform: 'none' }}
        onClick={handleLogin}
      >
        Login
      </Button>
    </Box>
  )
}
