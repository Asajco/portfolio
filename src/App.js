import './App.css'
import React, { Fragment } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Footer from './components/Footer'
import About from './components/About'
import Skills from './components/Skills'

function App() {
  return (
    <Fragment>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Footer />
    </Fragment>
  )
}

export default App
