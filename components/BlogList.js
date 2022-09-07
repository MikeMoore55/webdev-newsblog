import React from 'react'
import BlogItem from '../components/BlogItem'

function BlogList({blogPosts}) {
  return (
    <div>
        {blogPosts.map(blogPost => <BlogItem blogPost={blogPost}/>)}
    </div>
  )
}

export default BlogList