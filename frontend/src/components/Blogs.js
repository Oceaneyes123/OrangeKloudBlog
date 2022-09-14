import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Blog from './Blog'

const Blogs = () => {
  const [blogs, setBlogs] = useState()
  const sendRequest = async () => {
    const res = await axios.get("https://orange-kloud-blog.herokuapp.com/api/blog").catch(err => console.log(err))
    const data = await res.data
    return data
  }
  useEffect(() => {
   sendRequest().then(data=>setBlogs(data.blogs))
  }, [])
  console.log(blogs)
  return (
    <div className="main blog-container">
      {blogs && blogs.map((blog, index) => (
          <Blog 
          title={blog.title}
          description={blog.description}
          userName={blog.user.name}
          user={blog.user}
          key={index}
         />
        
      ))}
    </div>
  )
}

export default Blogs