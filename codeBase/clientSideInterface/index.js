import { BrowserRouter } from 'react-router-dom';
import { hydrate } from "react-dom"
import React from 'react';
import ReactDOM from 'react-dom';
// import Loginpage from './pages/loginpage';
import Routes from './router.js'

hydrate((
  <Routes></Routes>  
  ), document.getElementById('root'));