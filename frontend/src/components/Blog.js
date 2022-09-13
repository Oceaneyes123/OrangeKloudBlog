import React from 'react'

const Blog = ({title, description, userName}) => {
  return (
    <div className="card">
        <div className='blog-title'>
            {title}
        </div>
        <div className='blog-user'>
            {userName}
        </div>
        <div className='blog-description'>
            {description}
        </div>
    </div>
  )
}

export default Blog