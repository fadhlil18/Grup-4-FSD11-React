import { useState } from 'react'
import './App.css'
import './App.scss'
import Aside from './components/Aside'
import ParticlesComponent from './components/config/ParticlesConfig';
import Main from './components/Main';
import Footer from './components/Footer';
import About from './components/AboutMe'
import Header from './components/Header'
import Project from './components/Project'
function App() {
  return (
    <div className="App">
      <ParticlesComponent id="particles"/>
      <Header/>
      <Aside/>
      <Main/>
      <About/>
      <Project/>
      <Footer className='particlesheader'/>
    </div>
  );
}

export default App;
