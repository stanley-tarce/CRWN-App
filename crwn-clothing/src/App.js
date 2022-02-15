import React from 'react';
import ShopPage from './Components/Shop/shop';
import './App.css';
import Homepage from './Pages/Homepage/Homepage.js'
import { useRoutes } from 'react-router-dom'
import Header from './Pages/Header/header.component';

function App() {
  let routes = useRoutes([
    { path: '/', element: <Homepage /> },
    { path: '/shop', element: <ShopPage /> },
  ])
  return (
    <div>
      <Header />
      {routes}
    </div>
  );
}

export default App;
