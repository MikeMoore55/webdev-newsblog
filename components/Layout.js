import React from 'react'
import Header from './Header'
import styles from '../styles/Layout.module.css'

function Layout({children}) {
  return (
    <div id='Layout'>
        <Header/>
        {children}
    </div>
  )
}

export default Layout