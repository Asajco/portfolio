import React from 'react'
import styles from './About.module.css'
import Heading from './reusable/Heading'

function About() {
  return (
    <>
      <div className={styles['about-wrapper']}>
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
      </div>
    </>
  )
}

export default About
