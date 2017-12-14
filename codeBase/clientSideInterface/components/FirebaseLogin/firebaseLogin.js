import React from 'react'
import {browserHistory} from "react-router";
import  { Redirect } from 'react-router-dom'
/* global gapi */
class FirebaseLogin extends React.Component {

  constructor(props) {

    super(props);
    this.config = {
        apiKey: "AIzaSyC0recPVMLP0GxfZWhU2iEOjDlD_t07H0Q",
        authDomain: "music-project-d68ae.firebaseapp.com",
        databaseURL: "https://music-project-d68ae.firebaseio.com",
        projectId: "music-project-d68ae",
        storageBucket: "music-project-d68ae.appspot.com",
        messagingSenderId: "588519486949"
      };
  }

  componentDidMount() {
      firebase.initializeApp(this.config);
  }
  signIn() {
      console.log('enter')
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function(result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        console.log(user);
        // ...
      }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        console.log(errorMessage);
        // ...
      });
  }
  render() {

    return (
      <div className="main-container">
        <button onClick={this.signIn}>Login</button>
      </div>
    );
  }

}

export default FirebaseLogin