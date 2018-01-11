import React from 'react'
import {browserHistory} from "react-router";
import  { Redirect } from 'react-router-dom';
import firebaseconfig from '../../global/config';
/* global gapi */
class FirebaseLogin extends React.Component {

  constructor(props) {

    super(props);
    this.state = {
      showModal:false
    }
    this.uid = '',
    this.name = ''
    this.email = '';
    this.photoUrl = '';
  }

  componentDidMount() {
      firebase.initializeApp(firebaseconfig);

  }
  setData(param) {
    // this.setState({
    //   showModal: false;
    // });
    if (this.state.showModal) {
      let database = firebase.database();
      let databaseRef = database.ref(`${param}/` +this.uid);
      if (param === 'student') {
        databaseRef.update({
          username: this.name,
          email: this.email,
          photoURL: this.photoUrl,
          fessPaidDate: '',
          classPerWeek: ''
        }).then(()=>window.location.href='homepage');
      }
      else {
          databaseRef.update({
          username: this.name,
          email: this.email,
          photoURL: this.photoUrl
        }).then(()=>window.location.href='homepage');
      }
    }
  }
  signIn = () => {

    var provider = new firebase.auth.GoogleAuthProvider();
    
    firebase.auth().signInWithPopup(provider).then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        let token = result.credential.accessToken;
        // The signed-in user info.
        let user = result.user;
        this.name = user.displayName
        this.email = user.email;
        this.photoUrl = user.photoURL;
        this.uid = user.uid;
        this.setState({
          showModal: true
        });

      }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // console.log(errorCode, errorMessage, email, credential);
        // ...
      });
  }
  render() {

    return (
      <div className="main-container">
        <button onClick={this.signIn}>Login</button>
        <div className={`popup ${this.state.showModal}`} >
          <button className='student' onClick={()=>{this.setData('student')}}>student</button>
          <button className='teacher' onClick={()=>{this.setData('teacher')}}>teacher</button>
        </div>
      </div>
    );
  }

}
// exports.myFunctionName = 
// functions.database.ref('users/').onWrite((event) => {
//   // ... Your code here
//   console.log('added')
// });
export default FirebaseLogin