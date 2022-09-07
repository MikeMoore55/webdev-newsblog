import React from 'react'

function BlogItem({blogPost}) {
  return (
    <div>
        <h3>{blogPost.title}</h3>
    </div>
  )
}

export default BlogItem