import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { JournalScreen } from '../Components/journal/JournalScreen'

import { AuthRouter } from './AuthRouter'

import {firebase} from '../firebase/firebase-config'
import { useDispatch } from 'react-redux'
import { login } from '../actions/auth'
import { LoadingScreen } from '../Components/Loadings/LoadingScreen'
import { PublicRoute } from './PublicRouter'
import { PrivateRoute } from './PrivateRoute'

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
        <Route
           path="/*"
           element={
               <PublicRoute isAuth={isLoggedIn}>
                   <AuthRouter />
               </PublicRoute>
           }
        />
 
        <Route
          path="/"
          element={
               <PrivateRoute isAuth={isLoggedIn}>
                  <JournalScreen />
              </PrivateRoute>
          }
        />
        </Routes>
    
    </>
  )
}
