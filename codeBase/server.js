var express = require('express');
var path = require('path');
var bodyParser = require('body-parser')
var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
var React = require('react');
var ReactDOMServer = require('react-dom/server');
var fs = require('fs');
var pretty = require('pretty');

var GoogleAuth = require('google-auth-library');

var token;
let app = express();
app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));
app.use(passport.initialize());
// app.use(passport.session());

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});

passport.use(new GoogleStrategy({
  clientID: '464336086840-8mbhkflj2q16uhjv84cqoskng1vk92iv.apps.googleusercontent.com',
  clientSecret: 'ioG62HCPVCm4BBSFBSkvtYX5',
  callbackURL: "http://localhost:4200/auth/google/callback"
},
  function (accessToken, refreshToken, profile, done) {
    if (profile) {
      user = profile;
      console.log(profile);
      return done(null, user);
      }
      else {
      return done(null, false);
      }
      
    // User.findOrCreate({ googleId: profile.id }, function (err, user) {
    //   return done(err, user);
    // });
  }
));


app.use(express.static(path.resolve(__dirname, './', 'dist')));

app.get('/auth/google',
passport.authenticate('google', { scope: ['https://www.googleapis.com/auth/plus.login'] }));

// GET /auth/google/callback
//   Use passport.authenticate() as route middleware to authenticate the
//   request.  If authentication fails, the user will be redirected back to the
//   login page.  Otherwise, the primary route function function will be called,
//   which, in this example, will redirect the user to the home page.
app.get('/auth/google/callback', 
passport.authenticate('google', { failureRedirect: '/' }),
function(req, res) {
  res.redirect('/homepage');
});
app.get('/homepage', (req, res) => {
  res.sendFile(path.resolve(__dirname, './', 'dist', 'index.html'));
  // res.send('shreessha')
});
// Always return the main index.html, so react-router render the route in the client
app.get('/', (req, res) => {
  // res.sendFile(path.resolve(__dirname, './', 'dist', 'index.html'));
});
app.post('/homepage', (req, res) => {

  req.token = req.body['idtoken'].trim().replace(/"/g, '');
  var auth = new GoogleAuth;
  var client = new auth.OAuth2('464336086840-8mbhkflj2q16uhjv84cqoskng1vk92iv.apps.googleusercontent.com', 'ioG62HCPVCm4BBSFBSkvtYX5', 'http://localhost:4200/homepage');
  var verifytoken = new Promise(function (resolve, reject) {

    client.verifyIdToken(
      req.token,
      '464336086840-8mbhkflj2q16uhjv84cqoskng1vk92iv.apps.googleusercontent.com',
      // Or, if multiple clients access the backend:
      //[CLIENT_ID_1, CLIENT_ID_2, CLIENT_ID_3],
      function (e, login) {
        if (login) {
          var payload = login.getPayload();
          var userid = payload['sub'];
          var status = 'success'
          var sendData = {userid:userid, status:status, name:payload['name'], email:payload['email'], picture:payload['picture']}
          // sessionStorage.setItem("Name",payload['name']);
          // sessionStorage.setItem("Email",payload['email']);
          // sessionStorage.setItem("ProfilePic",payload['picture']);
          resolve(sendData);
        }
        else {
          reject('fail')
        }
      });

    // res.send(req.token);
  }).then(function (googleId) {
    res.send(googleId);
  }).catch(function (e) { res.send(e) });
});
app.listen(4200, () => { console.log('listening in port 4200'); });