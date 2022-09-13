import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Blog = ({title, description, userName, user}) => {

    const [blockEmail, setBlockEmail] = useState([]);
    const [followedEmail, setFollowedEmail] = useState([]);

    const blockUser = async () => {
        const res = await axios.post("http://localhost:5000/api/user/block", {
                user: localStorage.getItem("email"),
                userToBlock: user.email
        }).then(data => console.log(data))

        const data = res.data

        return data
    }

    const followUser = async () => {
        const res = await axios.post("http://localhost:5000/api/user/follow", {
                user: localStorage.getItem("email"),
                userToFollow: user.email
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
            setFollowedEmail(data.data.user.following)
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
                    {localStorage.getItem("userId") !== user._id &&  
                        <div> 
                           { !followedEmail.includes(user.email)  && <button className='follow-button' onClick={followUser}>Follow</button> }
                           { followedEmail.includes(user.email)  && <div className="following-text">Following</div> }
                            <button className='follow-button' onClick={blockUser}>Block</button> 
                        </div>
                    }
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