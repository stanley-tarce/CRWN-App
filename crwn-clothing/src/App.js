import React, { useState, useEffect, useRef } from 'react';
import ShopPage from './Components/Shop/shop';
import './App.css';
import Homepage from './Pages/Homepage/Homepage.js'
import { useRoutes } from 'react-router-dom'
import Header from './Pages/Header/header.component';
import SignInAndSignUp from './Pages/sign in and sign up/sign-in-and-sign-up.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils'
function App() {
  let routes = useRoutes([
    { path: '/', element: <Homepage /> },
    { path: '/shop', element: <ShopPage /> },
    { path: '/signin', element: <SignInAndSignUp /> },
  ])
  const unsubscribeFromAuth = useRef(null)
  const [currentUser, setCurrentUser] = useState(null)
  useEffect(() => {
    unsubscribeFromAuth.current = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth)
        userRef.onSnapshot(snapshot => {
          console.log(snapshot.data())
          setCurrentUser({ id: snapshot.id, ...snapshot.data() })
        })
      }


    })
  }
    , [])

  useEffect(() => { return () => unsubscribeFromAuth }, [])
  return (
    <div>
      <Header currentUser={currentUser} setCurrentUser={setCurrentUser} />
      {routes}
    </div>
  );
}

export default App;
