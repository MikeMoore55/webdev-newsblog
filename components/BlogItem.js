import React from 'react'
import Link from 'next/link'
import blogItemStyles from '../styles/BlogItem.module.css'

function BlogItem({blogPost}) {
  return (
   
      <Link href='/blogpost/[id]' as={`/blogpost/${blogPost.id}`}>
        <h3 className={blogItemStyles.blogtitle}>{blogPost.title}</h3>
      </Link>
   
  )
}

export default BlogItem