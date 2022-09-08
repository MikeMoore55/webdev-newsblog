import React from 'react'
import blogItemStyles from '../styles/BlogItem.module.css'


function BlogItem({blogPost}) {
  return (
    <div className={blogItemStyles.blogtitle}>
        <h3>{blogPost.title}</h3>
    </div>
  )
}

export default BlogItem