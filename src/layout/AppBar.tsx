import * as React from 'react'
import { Link as RouterLink } from 'react-router'

import { Box, Button, IconButton, Link, Toolbar } from '@mui/material'
import MuiAppBar from '@mui/material/AppBar'

import ListIcon from '@mui/icons-material/List'
import LogoutIcon from '@mui/icons-material/Logout'

export const AppBar: React.FC = () => {
  return (
    <MuiAppBar position="sticky" elevation={0}>
      <Toolbar disableGutters sx={{ px: 2 }}>
        <IconButton color="inherit">
          <ListIcon />
        </IconButton>
        <Link color="inherit" component={RouterLink} to="/" sx={{ flexGrow: 1 }}>
          <Button color="inherit" variant="text" sx={{ textTransform: 'none' }}>Home</Button>
        </Link>
        <Box>
          <Link color="inherit" component={RouterLink} to="/logout" sx={{ flexGrow: 1 }}>
            <IconButton color="inherit">
              <LogoutIcon />
            </IconButton>
          </Link>
        </Box>
      </Toolbar>
    </MuiAppBar>
  )
}
