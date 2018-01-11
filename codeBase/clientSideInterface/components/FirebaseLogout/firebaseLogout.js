import React from 'react'
import firebaseconfig from '../../global/config'
/* global gapi */
class firebaseLogout extends React.Component {

  constructor() {

    super()
  }

  componentDidMount() {
    //   console.log(firebaseconfig)
    firebase.initializeApp(firebaseconfig);
    // console.log(firebase.getInstance());
  }
  signOut() {
    firebase.auth().signOut().then(function() {
        // Sign-out successful.
        window.location.href = '/'
      }, function(error) {
          console.log('Error')
        // An error happened.
      })
  }
  render() {

    return (
      <div className='sign-out'><button onClick={this.signOut}>Signout</button></div>
    );
  }

}

export default firebaseLogout