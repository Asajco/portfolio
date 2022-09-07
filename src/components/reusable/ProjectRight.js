import React from 'react'
import styles from './ProjectRight.module.css'
import Slide from "./Slide"

function ProjectRight(props) {
  return (
    <div className={styles["project-right-container"]}>
        <Slide 
          image={props.image}
          tech={props.tech}
          demo={props.demo}
          github={props.github}
        />
        <div className={styles["project-about"]}>
            <h1>{props.title}</h1>
            <p>{props.about}</p>
        </div>
        
    </div>
  )
}

export default ProjectRight