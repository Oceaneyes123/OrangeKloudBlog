import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Blog = ({title, description, userName, user}) => {

    const [blockEmail, setBlockEmail] = useState([]);

    const blockUser = async () => {
        const res = await axios.post("http://localhost:5000/api/user/block", {
            user: localStorage.getItem("email"),
            userToBlock: user.email
    }).then(data => console.log(data))

    const data = res.data

    return data
  }

  const getUserByEmail = async () => {
    const res = await axios.post("http://localhost:5000/api/user/getByEmail", {
        email: JSON.parse(localStorage.getItem("user")).email
    }).then(data => {
        console.log(data.data.user)
        setBlockEmail(data.data.user.block)
        console.log(blockEmail)
    })
   
    const data = await res.data

    return data

  }

  useEffect(() => {
    getUserByEmail()
  }, [])





  return (
    <>
        { !blockEmail.includes(user.email) && <div className="card">
            <div> 
                <div className='blog-title'>
                    <div>{title}</div>
                    <div> 
                        {localStorage.getItem("userId") !== user._id && <button className='follow-button'>Follow</button> }
                        {localStorage.getItem("userId") !== user._id && <button className='follow-button' onClick={blockUser}>Block</button> }
                    </div>
                </div>
                <div className='blog-user'>
                    <div>{userName}</div>
                </div>
                <div className='blog-description'>
                    {description}
                </div> 
        </div> 
        </div> }
    </>
  )
}

export default Blog