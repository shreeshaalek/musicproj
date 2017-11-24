import React from 'react'
import GoogleLogin from '../components/google-login'
/* global gapi */
class Loginpage extends React.Component {

  constructor() {

    super()
  }

  componentDidMount() {

  }

  render() {

    return (
      <GoogleLogin></GoogleLogin>
    );
  }

}

export default Loginpage