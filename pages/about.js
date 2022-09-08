import React from 'react'
import styles from '../styles/About.module.css'


function about() {
  return (
    <main className={styles.about}>
        <h1 className={styles.h1}>About</h1>
        <p>blog post made with next.js and react</p>
        <p className={styles.dis}>disclaimer:</p>
        <p>No of the blogs are real. They are for test purposes only. This was a practice project!</p>
        <p>Made by Michael</p>
    </main>
  )
}

export default about