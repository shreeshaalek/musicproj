import React from 'react'
import GoogleLogin from '../components/google-login'
import {Link} from 'react-router-dom';
/* global gapi */
class Loginpage extends React.Component {

  constructor() {

    super()
  }

  componentDidMount() {

  }

  render() {

    return (
      <div>
        <GoogleLogin></GoogleLogin>
      </div>
    );
  }

}

export default Loginpage