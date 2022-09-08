import Head from 'next/head'
import BlogList from '../components/BlogList'
import styles from '../styles/Home.module.css'


export default function Home({blogPosts}) {
  return (
    <main className={styles.home}>
      <Head>
        <title>WebDevBlog</title>
      </Head>
      <BlogList blogPosts={blogPosts}/>
    </main>
  )
}

export const getStaticProps = async() =>{
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=20`)

  const blogPosts = await res.json()

  return{
    props:{
      blogPosts
    }
  }
}
