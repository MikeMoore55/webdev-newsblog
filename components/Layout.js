import React from 'react'
import Header from './Header'
import Nav from './Nav'
import Footer from './Footer'
import styles from '../styles/Layout.module.css'

function Layout({children}) {
  return (
    <div id='Layout'>
        <Header/>
        <Nav/>
        {children}
        <Footer/>
    </div>
  )
}

export default Layout