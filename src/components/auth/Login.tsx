import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Register from './Register'

export default function Login() {
  return (
    <div>
            <h1>Login</h1>
        <div className='form'>
            <input type="text" placeholder='user name'/>
            <input type="password" placeholder='password'/>
            <button>submit</button>
       </div>
       <p>Dont have an account yet <Link to={'/auth/register'}>Register</Link> </p>
    </div>

  )
}
