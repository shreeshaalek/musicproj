import React from 'react';
import { Router, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Homepage from './pages/homepage';
import Another from './pages/another';
import Loginpage from './pages/loginpage';

const Routes = () => (
  <BrowserRouter>
  <div>
    <Route exact path="/" component={Loginpage} />
    <Route path="/homepage" component={Homepage} />
    <Route path="/another" component={Another} />
    </div>
  </BrowserRouter>
);
export default Routes