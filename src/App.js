import React from 'react'
import './App.css'
import Navbar from './components/Navbar'

import MovieVault from './components/MovieVault'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import MovieDetails from './components/MovieDetails'
import MovieCard from './components/MovieCard'






function App() {
  return (
    <Router>
   <div className='App'>
    <Navbar/>
    
    <Routes>
      <Route path="/" element={
        <>
         <MovieCard/>
         <MovieVault/>
         
        </>
      } />
      <Route path="/movie/:id" element={<MovieDetails/>}/>
    </Routes>
    
   </div>
   </Router>
    )
}

export default App

