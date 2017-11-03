import React from 'react'

class App extends React.Component {
  constructor() {
    super()
  }
  onSignIn () {
    // Useful data for your client-side scripts:
    gapi.load('auth2,signin2', () => {
      var auth2 = gapi.auth2.init(
        {
            client_id: '464336086840-8mbhkflj2q16uhjv84cqoskng1vk92iv.apps.googleusercontent.com'
        }
      );
      auth2.then(()=> {
        var isSignedIn = auth2.isSignedIn.get();
        var currentUser = auth2.currentUser.get().getBasicProfile();
        if(!isSignedIn) {
        console.log(currentUser.getName());
        } 
        setTimeout(()=>{var id_token = auth2.currentUser.get().getAuthResponse(true);
        console.log(id_token);
        var xhr = new XMLHttpRequest();
        console.log(xhr)
        xhr.open('POST', '/tokensignin',true);
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        // xhr.onload = function() {
        //   console.log('Signed in as: ' + xhr.responseText);
        // };
        xhr.send('idtoken=' + JSON.stringify(id_token))
      },1000);
    });
    // var profile = googleUser.getBasicProfile();
    // console.log("ID: " + profile.getId()); // Don't send this directly to your server!
    // console.log('Full Name: ' + profile.getName());
    // console.log('Given Name: ' + profile.getGivenName());
    // console.log('Family Name: ' + profile.getFamilyName());
    // console.log("Image URL: " + profile.getImageUrl());
    // console.log("Email: " + profile.getEmail());

    // // The ID token you need to pass to your backend:
    // var id_token = googleUser.getAuthResponse().id_token;
    // console.log("ID Token: " + id_token);
  });
}
        //   onLoad() {
        //     console.log('enter');
        //   gapi.load('auth2,signin2', function() {
        //     var auth2 = gapi.auth2.init();
        //     auth2.then(function() {
        //       // Current values
        //       var isSignedIn = auth2.isSignedIn.get();
        //       var currentUser = auth2.currentUser.get();
    
        //       if (!isSignedIn) {
        //         // Rendering g-signin2 button.
        //         gapi.signin2.render('google-signin-button', {
        //           'onsuccess': 'onSignIn'  
        //         });
        //       }
        //     });
        //   });
        // }
  signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    // var profile = googleUser

    auth2.signOut().then(function () {
      console.log('User signed out.');
    });
  }
  render() {
    return (
      <div className="main-container">
        <div className="g-signin2" onClick={this.onSignIn} data-theme="dark"></div>
        <a href="#" onClick={this.signOut}>Sign out</a>
      </div>
    );
  }
}

export default App