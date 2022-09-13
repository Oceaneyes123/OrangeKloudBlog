import {
  Box,
  Button,
  TextField,
  Typography
} from '@mui/material'
import React, {
  useState
} from 'react'
import axios from 'axios'
import {
  useDispatch
} from 'react-redux'
import {
  authAction
} from '../store'
import {
  useNavigate
} from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [isSignup, setIsSignup] = useState(false)
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: "",
  })
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }

  const sendLogin = async () => {
    const res = await axios.post(`http://localhost:5000/api/user/login`, {
      email: inputs.email,
      password: inputs.password
    }).catch(err => console.log(err))

    const data = await res.data
    return data;
  }

  const sendSignup = async () => {
    const res = await axios.post(`http://localhost:5000/api/user/signup`, {
      name: inputs.name,
      email: inputs.email,
      password: inputs.password
    }).catch(err => console.log(err))

    const data = await res.data
    return data;
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(inputs)
    if (isSignup) {
      sendSignup().then((data) => {
        localStorage.setItem("userId", data.user._id)
        localStorage.setItem("email", data.user.email)
        localStorage.setItem("user", JSON.stringify(data.user))
      }).then(() => dispatch(authAction.login())).then(() => navigate("/blogs")).then(data => console.log(data))
    } else {
      sendLogin().then((data) => {
        localStorage.setItem("userId", data.user._id)
        localStorage.setItem("email", data.user.email)
        localStorage.setItem("user", JSON.stringify(data.user))
      }).then(() => dispatch(authAction.login())).then(() => navigate("/blogs")).then(data => console.log(data))
    }
  }

  return (
    <div className="main">
      <form onSubmit={handleSubmit}>
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
          <Typography>Orangekloud {isSignup ? 'Sign Up' : 'Login'}</Typography>
          {isSignup &&  <TextField margin='normal' name="name" placeholder='Name' value={inputs.name} onChange={handleChange}/> }
          <TextField margin='normal' name="email" placeholder='Email' type={'email'} value={inputs.email} onChange={handleChange}/>
          <TextField margin='normal' name="password" placeholder='Password' type={'password'}  value={inputs.password} onChange={handleChange}/>
          <Button sx={{marginTop: '10px', borderRadius: '10px', background: 'orange'}} margin='normal' variant="contained" type="submit">{isSignup ? 'Sign Up' : 'Login'}</Button>
          <Button sx={{marginTop: '10px', borderRadius: '10px', color: 'orange'}} margin='normal' type="submit" onClick={() => setIsSignup(!isSignup)}>{!isSignup ? 'No Account? Sign Up' : 'Already a member? Login'}</Button>
        </Box>
      </form>
    </div>
  )


}

export default Login