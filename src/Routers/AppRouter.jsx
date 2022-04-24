import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { JournalScreen } from '../Components/journal/JournalScreen'

import { AuthRouter } from './AuthRouter'

import {firebase} from '../firebase/firebase-config'
import { useDispatch } from 'react-redux'
import { login } from '../actions/auth'

export const AppRouter = () => {

  const dispatch = useDispatch()

  const [isChecking, setChecking] = useState(true)

  useEffect(() => {
    
    firebase.auth().onAuthStateChanged((user)=>{
      if(user?.uid){
        dispatch(login(user.uid, user.displayName))
      }
      setChecking(false)
    })
  }, [dispatch, setChecking])

  if (isChecking){
    return(
      <h1>Waiting...</h1>
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
