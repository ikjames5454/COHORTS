import React from 'react';
import './App.css';
import { useRoutes } from 'react-router-dom';
import {Route} from "./Route/Route"


function App() {
  return useRoutes(Route)
}

export default App;
