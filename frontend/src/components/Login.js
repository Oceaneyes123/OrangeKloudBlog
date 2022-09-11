import { Box, Button, TextField, Typography } from '@mui/material'
import React from 'react'

const Login = () => {
  return (
    <div class="main">
      <form>
        <Box 
            display="flex" 
            flexDirection="column" 
            alignItems="center" 
            justifyContent="center"
            boxShadow="10px 10px 20px #ccc"
            padding={3}
            margin="auto"
            maxWidth={400}
            borderRadius={10}
            >
          <Typography>Orangekloud Login</Typography>
          <TextField margin='normal' placeholder='Name'/>
          <TextField margin='normal' placeholder='Email' type={'email'}/>
          <TextField margin='normal' placeholder='Password' type={'password'}/>
          <Button sx={{marginTop: '10px', borderRadius: '10px', background: 'orange'}} margin='normal' variant="contained">Login</Button>
        </Box>
      </form>
    </div>
  )
}

export default Login