import React from 'react'
import {Routes, Route} from 'react-router-dom'
import LOginPage from '../pages/LOginPage'
import RegisterPage from '../pages/RegisterPage'


export default function RoutesAll() {
  return (
    <>
    <Routes>
      <Route path='/login' element={<LOginPage />} />
      <Route path='/register' element={<RegisterPage />} />
    </Routes>
    </>
  )
}
