import React from 'react'
import styles from './Projects.module.css'
import Heading from './reusable/Heading'
import ProjectRight from './reusable/ProjectRight'
import ProjectLeft from './reusable/ProjectLeft'


function Projects() {
  const [voiddTech] = React.useState(["React", "HTML", "CSS", "Firebase", "API"])
  const [recipeTech] = React.useState(["React", "HTML", "CSS", "API"])
  
  return (
    <div className={styles["projects-container"]}id='projects'>
      <Heading heading='my projects' />
      <div className={styles["projects-wrapper"]}>
          <ProjectRight 
          title="Voidd"
          about="The core functionality is users being able to buy tickets for currently offered events as well as creating their own events if the premium account is bought.
          In this project we worked in team so i also tried how is it working in team"
          image={require("../assets/music-ast.png")}
          tech={voiddTech.map((tech, index) => <li className={styles["project-tech"]} key={index}>{tech}</li>)}
          github="https://github.com/Asajco/Voidd-Web"
          />
          
          <ProjectLeft
          title="Recipe App"
          about="User can write ingrediences and he will get recipes that includes his ingredience.
          This was my first project that i did, i focused on API fetch and making page resposible"
          image={require("../assets/recipe-ast.png")}
          tech={recipeTech.map((tech, index) => <li className={styles["project-tech"]} key={index}>{tech}</li>)}
          github="https://github.com/Asajco/recipes-web"
          />
      </div>
    </div>
  )
}

export default Projects