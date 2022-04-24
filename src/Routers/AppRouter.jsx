import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { JournalScreen } from '../Components/journal/JournalScreen'

import { AuthRouter } from './AuthRouter'

import {firebase} from '../firebase/firebase-config'
import { useDispatch } from 'react-redux'
import { login } from '../actions/auth'
import { LoadingScreen } from '../Components/Loadings/LoadingScreen'

export const AppRouter = () => {

  const dispatch = useDispatch()

  const [isChecking, setChecking] = useState(true)
  const [isLoggedIn, setLoggedIn] = useState(false)

  useEffect(() => {
    
    firebase.auth().onAuthStateChanged((user)=>{
      if(user?.uid){
        dispatch(login(user.uid, user.displayName))
        setLoggedIn(true)
      }else{
        setLoggedIn(false)
      }
      setChecking(false)
    })
  }, [dispatch, setChecking])

  if (isChecking){
    return(
      <LoadingScreen/>
    )
  }
  

  return (
    <>
    <Routes>
    <Route path='/auth/*' element={<AuthRouter/>}/>
    <Route exact path='/' element={<JournalScreen/>}/>
    <Route path='*' element={<AuthRouter/>}/>
        
        
    </Routes>
    
    </>
  )
}
