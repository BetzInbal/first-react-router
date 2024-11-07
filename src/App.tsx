import React from 'react'
import { NavLink, Route, Routes } from 'react-router-dom'
import Login from './components/auth/Login'
import Home from './components/pages/Home'
import AuthRouter from './components/auth/AuthRouter'
import PagesRouter from './components/pages/PagesRouter'

export default function App() {
  return (
    <div>
      <NavLink to={'/'}>Home</NavLink><br></br>
      <NavLink to={'/auth/login'}>Login</NavLink>
      <Routes>
        <Route path='auth/*' element={<AuthRouter/>} />
        <Route path='pages' element={<PagesRouter/>} />
      </Routes>



    </div>
  )
}
