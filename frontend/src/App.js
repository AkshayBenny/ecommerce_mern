import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css'
import Header from './Components/Header'
// import Footer from './Components/Footer'
import Home from './Components/Screens/Home'
import Product from './Components/Screens/Product'
import Cart from './Components/Cart'
import Login from './Components/Login'

function App() {
  return (
    <Router>
      <Header />
      <Route exact path='/' component={Home} />
      <Route path='/product/:id' component={Product} />
      <Route path='/cart' component={Cart} />
      <Route path='/login' component={Login} />
    </Router>
  )
}

export default App
