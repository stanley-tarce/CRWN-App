import React from 'react';

import './App.css';
import Homepage from './Pages/Homepage/Homepage.js'
import { useRoutes } from 'react-router-dom'

function App() {
  let routes = useRoutes([
    { path: '/', element: <Homepage />, exact: true },
  ])
  console.log(routes)
  return routes;
}

export default App;
