import React from 'react'
import { Link } from 'react-router-dom'

export default function Register() {
  return (
    <div>
    <h1>Register</h1>
        <div className='form'>
            <input type="text" placeholder='user name'/>
            <input type="password" placeholder='password'/>
            <button>submit</button>
       </div>
       <p>Dont have an account yet <Link to={'/auth/login'}>login</Link> </p>
    </div>
  )
}
