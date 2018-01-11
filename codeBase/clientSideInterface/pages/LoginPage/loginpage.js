import React from 'react'
import GoogleLogin from '../../components/GoogleLogin/googleLogin';
import FirebaseLogin from '../../components/FirebaseLogin/firebaseLogin';
import firebaseconfig from '../../global/config'
import {Link} from 'react-router-dom';
/* global gapi */
class Loginpage extends React.Component {

  constructor() {

    super()
  }

  componentDidMount() {
    // firebase.initializeApp(firebaseconfig);
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