import React from 'react'
import {Routes, Route} from 'react-router-dom'
import LOginPage from '../pages/LOginPage'
import RegisterPage from '../pages/RegisterPage'
import HomePage from '../pages/HomePage'
import Navbar from '../components/Navbar'


export default function RoutesAll() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/login' element={<LOginPage />} />
      <Route path='/register' element={<RegisterPage />} />
      <Route path='/' element={<HomePage />} />
      
    </Routes>
    </>
  )
}
