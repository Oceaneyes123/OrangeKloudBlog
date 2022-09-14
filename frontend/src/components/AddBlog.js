import { Box, Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const AddBlog = () => {
  const navigate = useNavigate()
  const [inputs, setInputs] = useState({
    title:"",
    description:"",
  })

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState, 
      [e.target.name] : e.target.value
    }))
  }

  const sendRequest = async () => {
    const res = await axios.post("https://orange-kloud-blog.herokuapp.com/api/blog/add",
    {
      title: inputs.title,
      description: inputs.description,
      user: localStorage.getItem("userId")
    }
    ).catch(err => console.log(err))

    const data = await res.data
    return data
  }

  const submit =  (e) => {
    e.preventDefault()
    //  console.log(inputs)
    sendRequest().then((data) => console.log(data)).then(()=>navigate("/blogs"))
   
  }

  return (
    <div className="main">
     <form onSubmit={submit}>
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
          <Typography>Add Blog</Typography>
          <TextField margin='normal' name="title" placeholder='Title' value={inputs.title} onChange={handleChange}/> 
          <TextField margin='normal' name="description" placeholder='Description' value={inputs.description} onChange={handleChange}/>
          <Button sx={{marginTop: '10px', borderRadius: '10px', background: 'orange'}} margin='normal' variant="contained" type="submit">Add</Button>
        </Box>
      </form>
    </div>
  )
}

export default AddBlog