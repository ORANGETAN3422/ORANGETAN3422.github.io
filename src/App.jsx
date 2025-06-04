import { useState } from 'react'
import ProjectCard from './components/ProjectCard/ProjectCard'
import Header from './components/Header/Header'
import Background from './components/Background/Background'
import './App.css'

function App() {
  return (
    <>
    <Background />
    <Header />

      <section className='project-section'>
        <ProjectCard jsonid="kflist" />
        <ProjectCard jsonid="gdspamtrainer" />
      </section>
    </>
  )
}

export default App
