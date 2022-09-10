import React from 'react'
import {AppBar, Box, Button,  Toolbar,  Typography} from '@mui/material'

export const Header = () => {
  return (
    <AppBar sx={{background:'orange'}}>
      <Toolbar>
        <Typography variant="h4">OrangeKloud Blog</Typography>
        <Box display="flex" marginLeft="auto">
          <Button variant="contained" sx={{color: 'orange', background: 'white', margin: 1, borderRadius: 5}}>Login</Button>
          <Button  sx={{color: 'white', margin: 1,}}>Signup</Button>
        </Box>
        </Toolbar>
    </AppBar>
  )
}

export default Header
