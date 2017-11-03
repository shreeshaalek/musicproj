import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './pages/app'

ReactDOM.render((
    <BrowserRouter>
      <App />
    </BrowserRouter>
  ), document.getElementById('root'));