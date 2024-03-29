import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Contact from '../pages/Contact'
import ProductDetails from '../pages/ProductDetails'


const Myrouter = () => {
  return (
    <Routes>
<Route path='/' element = {<Home/>} />
<Route path='/about' element = {<About/>} />
<Route path='/contact' element = {<Contact/>} />
<Route path='/:id' element = {<ProductDetails/>} />

    </Routes>
  )
}

export default Myrouter