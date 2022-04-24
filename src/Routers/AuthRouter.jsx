import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { LoginScreen } from '../Components/auth/LoginScreen'
import { RegisterScreen } from '../Components/auth/RegisterScreen'


export const AuthRouter = () => {
  return (
    <div className='auth__main' >
      <div className='auth__box-container'>
        <Routes>
          <Route path='login' element={<LoginScreen/>}/>
          <Route path='register' element={<RegisterScreen/>}/>
          <Route path='*' element={<LoginScreen/>}/>
        </Routes>
      </div>
    
    </div>
  )
}
