import './App.css';
import React, {Fragment} from 'react';
import Form from './components/Form';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Footer from './components/Footer';
import About from './components/About';
import Skills from './components/Skills';

function App() {
  return (
  <Fragment >
    <Navbar/>
    <Hero/>
    <About/>
    <Skills/>
    <Projects/>
    {/* <Form/> */}
    <Footer/>
  </Fragment>
  );
}

export default App;
