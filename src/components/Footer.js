import React from 'react'
import styles from './Footer.module.css'
import Form from './Form'
import { motion } from 'framer-motion'
function Footer() {
  return (
    <motion.div
      className={styles['footer-container']}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <Form />
    </motion.div>
  )
}

export default Footer
