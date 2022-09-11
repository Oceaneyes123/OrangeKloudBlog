import React, { useState } from 'react'
import {AppBar, Box, Button,  Tab,  Tabs,  Toolbar,  Typography} from '@mui/material'
import { Link } from 'react-router-dom'

export const Header = () => {
  const [value, setValue] = useState(0)
  return (
    <AppBar sx={{background:'orange'}}>
      <Toolbar>
        <Typography variant="h4">OrangeKloud Blog</Typography>
        <Box display="flex" marginLeft="auto" marginRight="auto">
          <Tabs  textColor='inherit' value={value} onChange={(e, val) => setValue(val)}>
            <Tab LinkComponent={Link} to="/blogs" label="All Blogs"/>
            <Tab LinkComponent={Link} to="/myBlogs" label="My Blogs"/>
          </Tabs>
        </Box>
        <Box display="flex" marginLeft="auto">
          <Button LinkComponent={Link} to="/login" variant="contained" sx={{color: 'orange', background: 'white', margin: 1, borderRadius: 5}}>Login</Button>
          <Button LinkComponent={Link} to="/login" sx={{color: 'white', margin: 1,}}>Signup</Button>
          <Button LinkComponent={Link} to="/login" sx={{color: 'white', margin: 1,}}>Logout</Button>
        </Box>
        </Toolbar>
    </AppBar>
  )
}

export default Header
