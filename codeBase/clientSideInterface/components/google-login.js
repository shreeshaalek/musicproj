import React from 'react'
/* global gapi */
class GoogleLogin extends React.Component {

  constructor() {

    super()
  }

  componentDidMount() {

    window.addEventListener('google-loaded', () => {

      gapi.signin2.render('g-signin2', {
        'scope': 'https://www.googleapis.com/auth/plus.login',
        'width': 200,
        'height': 50,
        'longtitle': true,
        'theme': 'light',
        'onsuccess': this.onSignIn
      });

    });

  }

  onSignIn() {

    gapi.load('auth2,signin2', () => {

      var auth2 = gapi.auth2.init(
        {
          client_id: '464336086840-8mbhkflj2q16uhjv84cqoskng1vk92iv.apps.googleusercontent.com'
        }
      );

      auth2.then(() => {

        var isSignedIn = auth2.isSignedIn.get();
        var currentUser = auth2.currentUser.get().getBasicProfile();
        var tokenId= auth2.currentUser.get().getAuthResponse(true).id_token;
        var xhr = new XMLHttpRequest();

        xhr.open('POST', '/homepage', true);
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.onload = function() {
          console.log('Signed in as: ' + xhr.responseText);
        };
        xhr.send('idtoken=' + JSON.stringify(tokenId))
        console.log(currentUser)
        console.log('Signed in as: ' + xhr.readyState);
      });

    });

  }

  signOut() {

    var auth2 = gapi.auth2.getAuthInstance();

    auth2.signOut().then(function () {
      console.log('User signed out.');
    });
  }

  render() {

    return (
      <div className="main-container">
        <div id="g-signin2" data-theme="dark"></div>
        <a href="#" onClick={this.signOut}>Sign out</a>
      </div>
    );
  }

}

export default GoogleLogin