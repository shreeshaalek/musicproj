import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom';
import Loginpage from './pages/loginpage'

ReactDOM.render((
    <BrowserRouter>
      <Loginpage />
    </BrowserRouter>
  ), document.getElementById('root'));