import React from 'react'
import styles from './Hero.module.css'
import { motion } from 'framer-motion'

let logo = require('../assets/flying-ast.png')

function Hero() {
  return (
    <div className={styles['hero-wrapper']} id="hero">
      <img className={styles['flying-ast']} src={logo} alt="" />
      <motion.div
        className={styles['hero-text-wrapper']}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <h1 className={styles['hero-heading']}>Welcome here!</h1>
        <p>My name is Jakub and im passionate web developer</p>
        <p>
          I really enjoy to work on visual part of websites where i can express
          myself
        </p>
      </motion.div>
    </div>
  )
}

export default Hero
