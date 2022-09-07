import React from 'react'
import styles from './Skills.module.css'
import Heading from './reusable/Heading'

let react = require('../assets/react-logo.png')
let html = require('../assets/html-logo.png')
let css = require('../assets/css.png')
let firebase = require('../assets/firebase.png')
let figma = require('../assets/figma.png')
let baloons = require('../assets/balloon.png')
function Skills() {
  return (
    <>
      <div className={styles['skills-container']}>
        <Heading heading="tech that i use mostly" />
        <div className={styles['skills-wrapper']}>
          <img className={styles['react-logo']} src={react} alt="react" />
          <div className={styles['skills-row']}>
            <div className={styles['skill-column']}>
              <img className={styles['skill']} src={html} alt="react" />
              <label>Html</label>
            </div>
            <div className={styles['skill-column']}>
              <img className={styles['skill']} src={css} alt="react" />
              <label>Css</label>
            </div>
            <div className={styles['skill-column']}>
              <img className={styles['skill']} src={figma} alt="react" />
              <label>Figma</label>
            </div>
          </div>
          <div className={styles['skill-column']}>
            <img
              className={styles['skill-firebase']}
              src={firebase}
              alt="react"
            />
            <label>Firebase</label>
          </div>
        </div>
        <img className={styles['ballons']} src={baloons} alt="baloons" />
      </div>
    </>
  )
}

export default Skills
