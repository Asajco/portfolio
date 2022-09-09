import React from 'react'
import styles from './About.module.css'
import Heading from './reusable/Heading'
import { motion } from 'framer-motion'

function About() {
  return (
    <>
      <motion.div
        className={styles['about-wrapper']}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <Heading heading="about" />
        <div className={styles['about-text-wrapper']}>
          <p>
            Im 21 years old <b>web developer</b> based in <b>Slovakia.</b>
          </p>
          <p>
            In my free time i mostly do sports as <b>snowboarding</b> and{' '}
            <b>climbing.</b>
          </p>
          <p>
            I really like to <b>travel</b>, i have been in{' '}
            <b>Finland for Erazmus</b> where i found passion for{' '}
            <b>web development</b> .
          </p>
        </div>
      </motion.div>
    </>
  )
}

export default About
