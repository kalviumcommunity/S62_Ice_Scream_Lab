import { useState } from 'react'
import './App.css'
import LandingPage from './Pages/LandingPage.jsx';
import CardPage from './Pages/CardPage.jsx';
import {Routes, Route} from 'react-router-dom'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<LandingPage />}></Route>
      <Route path='/card' element={<CardPage />}></Route> 
    </Routes>

    </>
  )
}

export default App
