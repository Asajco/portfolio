import React from 'react'
import styles from './ProjectLeft.module.css'
import Slide from './Slide'


function ProjectLeft(props) {
  
  return (
    <div className={styles["project-left-container"]}>
        <div className={styles["project-about"]}>
            <h1>{props.title}</h1>
            <p>{props.about}</p>
        </div>
        <Slide 
          image={props.image}
          tech={props.tech}
          demo={props.demo}
          github={props.github}
        />
        
    </div>
  )
}

export default ProjectLeft