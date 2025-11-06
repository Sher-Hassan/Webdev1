import React from 'react'
import Home from "./pages/Home"
import './App.css'
import { Routes, Route } from "react-router-dom"
import Nav from './components/Nav.jsx'
import Footer from './components/Footer.jsx'



function App() {


  return (
    <>
      <Nav />
      <Routes>
            <Route path="/" element={<Home />} /> 

          </Routes>
      <Footer />
    </>
  )
}

export default App
