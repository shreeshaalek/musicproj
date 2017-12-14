import React from 'react'
import GoogleLogin from '../../components/GoogleLogin/googleLogin';
import FirebaseLogin from '../../components/FirebaseLogin/firebaseLogin';
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
        <FirebaseLogin></FirebaseLogin>
      </div>
    );
  }

}

export default Loginpage