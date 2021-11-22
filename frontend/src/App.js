import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css'
import Header from './Components/Header'
// import Footer from './Components/Footer'
import Home from './Components/Screens/Home'
import Product from './Components/Screens/Product'

function App() {
  return (
    <Router>
      <Header />
      <Route exact path='/' component={Home} />
      <Route  path='/product/:id' component={Product} />
    </Router>
  )
}

export default App
