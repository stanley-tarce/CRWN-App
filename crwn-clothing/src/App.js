import React from 'react';
import ShopPage from './Components/Shop/shop';
import './App.css';
import Homepage from './Pages/Homepage/Homepage.js'
import { useRoutes } from 'react-router-dom'
import Header from './Pages/Header/header.component';
import SignInAndSignUp from './Pages/sign in and sign up/sign-in-and-sign-up.component';
function App() {
  let routes = useRoutes([
    { path: '/', element: <Homepage /> },
    { path: '/shop', element: <ShopPage /> },
    { path: '/signin', element: <SignInAndSignUp /> },
  ])
  return (
    <div>
      <Header />
      {routes}
    </div>
  );
}

export default App;
