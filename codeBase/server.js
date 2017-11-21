var express = require('express');
var path = require('path');
var bodyParser = require('body-parser')

var GoogleAuth = require('google-auth-library');

var token;
let app = express();
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 

app.use(express.static(path.resolve(__dirname, './', 'dist')));

// Always return the main index.html, so react-router render the route in the client
app.get('/', (req, res) => {
  // res.sendFile(path.resolve(__dirname, './', 'dist', 'index.html'));
  res.send('hello')
});
app.post('/tokensignin', (req, res) => {
  token = req.body['idtoken'].trim().replace(/"/g, '');
  });
  app.get('/tokensignin', (req, res) => {
    var auth = new GoogleAuth;
    var client = new auth.OAuth2('464336086840-8mbhkflj2q16uhjv84cqoskng1vk92iv.apps.googleusercontent.com', 'ioG62HCPVCm4BBSFBSkvtYX5', 'http://localhost:4200');
    var verifytoken = new Promise(function(resolve, reject) {
      client.verifyIdToken(
        token,
        '464336086840-8mbhkflj2q16uhjv84cqoskng1vk92iv.apps.googleusercontent.com',
        // Or, if multiple clients access the backend:
        //[CLIENT_ID_1, CLIENT_ID_2, CLIENT_ID_3],
        function(e, login) {
          if(login) {
            var payload = login.getPayload();
            var userid = payload['sub'];
            resolve(userid);
          }
          else {
            reject('fail')
          }
    });
    // res.send(token);
  }).then(function(googleId) {
    res.send(googleId);
  }).catch(function(e){res.send(e)});
});
app.listen(4200, ()=>{console.log('listening in port 4200');});