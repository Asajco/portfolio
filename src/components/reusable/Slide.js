import React from 'react'
import styles from './Slide.module.css'
import { motion } from 'framer-motion'

function Slide(props) {
  return (
    <motion.div
      className={styles['container']}
    >
      <img src={props.image} alt="" className={styles['image']} />
      <div className={styles['middle']}>
        <div>{props.tech}</div>
        <div className={styles['project-links']}>
          <a href={props.demo} target="_blank" rel="noreferrer">
            live demo
          </a>
          <a href={props.github} target="_blank" rel="noreferrer">
            GitHub link
          </a>
        </div>
      </div>
    </motion.div>
  )
}

export default Slide
