import React from 'react'
import Link from 'next/link'
import navStyle from '../styles/Nav.module.css'

function Nav() {
  return (
    <nav className={navStyle.nav}>
        <Link href='/'><p className={navStyle.link}>Home</p></Link>
        <Link href='/about'><p className={navStyle.link}>About</p></Link>
        <Link href='/contact'><p className={navStyle.link}>Contact</p></Link>
        <Link href='/partners'><p className={navStyle.link}>Partners</p></Link>
    </nav>
  )
}

export default Nav