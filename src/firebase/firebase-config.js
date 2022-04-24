import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'


const firebaseConfig = {
    apiKey: "AIzaSyCHbkuwMxEMC4UhPJm_pl5Do2_kPKCwM9M",
    authDomain: "journal-app-4a5f4.firebaseapp.com",
    projectId: "journal-app-4a5f4",
    storageBucket: "journal-app-4a5f4.appspot.com",
    messagingSenderId: "202444192882",
    appId: "1:202444192882:web:f2c5540ddeda94671f16eb",
    measurementId: "G-C0BC15876L"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);


  const db = firebase.firestore()
  const googleAuthProvider = new firebase.auth.GoogleAuthProvider()

  export {
      db, googleAuthProvider, firebase
  }