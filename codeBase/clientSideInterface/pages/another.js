import React from 'react'
import GoogleLogin from '../components/GoogleLogin/googleLogin'
/* global gapi */
class Another extends React.Component {

  constructor() {

    super()
  }

  componentDidMount() {

  }

  render() {

    return (
      <a href="/auth/google">Sign In with Google</a>
    );
  }

}

export default Another