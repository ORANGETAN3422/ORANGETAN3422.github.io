import { useState } from 'react'
import ProjectContainer from './components/Projects/ProjectContainer'
import Header from './components/Header/Header'
import Background from './components/Background/Background'
import './App.css'

function App() {
  return (
    <>
    <Background />
    <Header />
    <ProjectContainer />      
    </>
  )
}

export default App
