import React from 'react'
import { useRouter } from 'next/router'
import blogPostStyle from '../../../styles/BlogPost.module.css'

function Blogpost({article}) {
    const router = useRouter()
    const {id} = router.query
  return (
    <div className={blogPostStyle.blog}>
        <h1 className={blogPostStyle.h1}>{article.title}</h1>
        <p className={blogPostStyle.body}>{article.body}</p>
        <p className={blogPostStyle.id}>Post id: {article.id}</p>
    </div>
  )
}

/* export const getServerSideProps = async(context) =>{
    
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)

        const article = await res.json()

        return{
            props:{article}
        }
    
} */

// to make faster

export const getStaticProps = async(context) =>{
    
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)

    const article = await res.json()

    return{
        props:{article}
    }

}

export const getStaticPaths = async() =>{
    
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)

    const articles = await res.json()

    const ids = articles.map(article => article.id)

    const paths = ids.map(id => ({params:{id: id.toString()}}))

    return{
        paths: paths,
        fallback: false
    }

}



export default Blogpost