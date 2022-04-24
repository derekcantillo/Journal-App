import { types } from "../types/types"
import {firebase, googleAuthProvider} from '../firebase/firebase-config'
import { finishLoading, startLoading } from "./ui"

export const startLoginEmailPassword = (email, password) =>{
    return (dispatch)=>{
            dispatch(startLoading())
            firebase.auth().signInWithEmailAndPassword(email, password)
                
                .then(({user})=>{
                    
                    dispatch(login(user.displayName, user.displayName))
                    dispatch(finishLoading())
                }).catch(e=>{
                    dispatch(finishLoading())
                    console.log(e);
                })

    }
}
export const registerWithEmailPasswordName = (email, password, name)=>{
    return(dispatch)=>{
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(async({user})=>{
                await user.updateProfile({displayName: name})

                dispatch(login(user.uid, user.displayName))
            }).catch(e=>{
                console.log(e)
            })
    }
}
export const startGoogleLogin=()=>{
    return (dispatch)=>{
        firebase.auth().signInWithPopup(googleAuthProvider)
            .then(({user})=>{
                dispatch(login(user.uid, user.displayName))
            })
    }
}
export const login = (uid, displayName)=>{
    return {
        type: types.login,
        payload: {
            uid,
            displayName
        }
    }
}

export const startLogout=()=>{
    return async(dispatch)=>{
        await firebase.auth().signOut()

        dispatch(logout())
    }
}

export const logout=()=>{
    return{
        type: types.logout
    }
}