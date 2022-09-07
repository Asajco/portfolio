import React from 'react'
import styles from './Heading.module.css'

function Heading(props) {
  return (
    <>
      <div className={styles["heading-wrapper"]}>
        <h1 className=''>{props.heading}</h1>
        <div className={styles["line"]}></div>
        </div>
    </>
  )
}

export default Heading