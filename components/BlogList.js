import React from 'react'
import BlogItem from '../components/BlogItem'
import blogListStyles from '../styles/BlogList.module.css'


function BlogList({blogPosts}) {
  return (
    <div className={blogListStyles.blog}>
        {blogPosts.map(blogPost => <BlogItem blogPost={blogPost}/>)}
    </div>
  )
}

export default BlogList