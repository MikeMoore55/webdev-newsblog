import React from 'react'
import headerStyle from '../styles/Header.module.css'

function Header() {
  return (
    <header className={headerStyle.header}>
        <h1 className={headerStyle.webdev}>WebDev</h1> 
        <h1 className={headerStyle.newsblog}>NewsBlog</h1>
    </header>
  )
}

export default Header