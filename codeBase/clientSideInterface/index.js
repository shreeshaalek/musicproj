import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom';
// import Loginpage from './pages/loginpage';
import Routes from './router.js'

ReactDOM.render((
  // <Loginpage></Loginpage>
  <Routes></Routes>  
  ), document.getElementById('root'));