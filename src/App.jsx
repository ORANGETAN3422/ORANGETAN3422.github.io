import { useState } from 'react'
import MainSlideshow from './components/MainSlideshow/MainSlideshow'
import Header from './components/Header/Header'
import Background from './components/Background/Background'
import './App.css'

function App() {
  return (
    <>
    <Background />
    <Header />
    <MainSlideshow />    
    </>
  )
}

export default App
