import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Register from './Register'
import Login from './Login'



export default function AuthRouter() {
  return (
    <div>
         <Routes>
            <Route path='login' element={<Login/>}/>
            <Route path='register' element={<Register/>}/>
            
        </Routes>
    </div>
  )
}
