import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './Home'
import SingleMovies from './SingleMovies'
import Error from './Error'
import './App.css'

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='Movies/:id' element={<SingleMovies/>}></Route>
          <Route path='*' element={<Error/>}></Route>
        </Routes>
      </div>
    </Router>
  )
}

export default App