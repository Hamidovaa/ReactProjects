import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Catalog from '../pages/Catalog'
import TvShow from '../pages/TvShow'
import Home from '../pages/Home'
import MyDetail from '../pages/MyDetail'

const MyRouter = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/tv-show' element={<TvShow/>}/>
        <Route path='/catalog' element={<Catalog/>}/>
        <Route path='/movie/:id' element={<MyDetail/>}/>
    </Routes>
  )
}

export default MyRouter  