import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from './home'
import Service from './service'
import Register from './register'
import Page from './page'

export default function Routers() {
  return (
    <div>
        <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/service' element={<Service/>}/>
        <Route path='*' element={<Page/>} />
        </Routes>
    </div>
  )
}
