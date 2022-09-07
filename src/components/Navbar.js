import React, {useState}from 'react'
import {FaBars,FaTimes} from 'react-icons/fa'
import {Link} from "react-scroll"
import styles from './Navbar.module.css'


function Navbar() {
  const github = require("../assets/github.png")
  const linkedin = require("../assets/linkedin.png")
  const [click, setClick] = useState(false)
  

    
  

  return (
    <>
        <nav className={styles["navbar-container"]}>
            <div className={styles["navbar-logo"]} >J P</div>
            
            <div className={click ? styles["navbar-responsive"]: styles["navbar-links-wrapper"]}>
         
                <Link to="hero" spy={true} smooth={true} offset={50} duration={50} className={styles["navbar-item"]} onClick={()=>setClick(false)}>home</Link>
            
                <Link to="projects" spy={true} smooth={true} offset={0} duration={300} className={styles["navbar-item"]} onClick={()=>setClick(false)}>projects</Link>
                
                <Link to="contact" spy={true} smooth={true} offset={50} duration={500} className={styles["navbar-item"]} onClick={()=>setClick(false)}>contact</Link>
                { click && <FaTimes className={styles["navbar-icon-close"]} onClick={()=>setClick(!click)}/>}
            </div>
            <div className={styles["navbar-socials"]}>
              <a href='https://github.com/Asajco' target="_blank" rel='noreferrer'>
                <img src={github} alt="github"/>
              </a>
              <a href='https://www.linkedin.com/in/jakub-petergáč-050338238/' target="_blank" rel='noreferrer'>
                <img src={linkedin} alt="linkedin"/>
              </a>
              
            </div>
            
            <FaBars className={styles["navbar-icon-open"]} onClick={()=>setClick(!click)}/>
        </nav>
    </>
  )
}

export default Navbar