import React from 'react'
import './homepage.scss'
import FirebaseLogout from '../../components/FirebaseLogout/firebaseLogout';
import Students from '../../components/StudentsList/students';
/* global gapi */
class Homepage extends React.Component {

  constructor() {

    super()
  }

  componentDidMount() {

  }
  signOut() {

  }
  render() {

    return (
      <div>
        <FirebaseLogout></FirebaseLogout>
        <Students></Students>
      </div>
      // <div className='sign-out'><button onClick={this.signOut}>Signout</button></div>
    );
  }

}

export default Homepage