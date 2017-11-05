var express = require('express');
var path = require('path');
var bodyParser = require('body-parser')

var GoogleAuth = require('google-auth-library');


let app = express();
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 

app.use(express.static(path.resolve(__dirname, './', 'dist')));

// Always return the main index.html, so react-router render the route in the client
app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, './', 'dist', 'index.html'));
});

// var auth = new GoogleAuth;
// var client = new auth.OAuth2(CLIENT_ID, '', '');
// client.verifyIdToken(
//     token,
//     CLIENT_ID,
//     // Or, if multiple clients access the backend:
//     //[CLIENT_ID_1, CLIENT_ID_2, CLIENT_ID_3],
//     function(e, login) {
//       var payload = login.getPayload();
//       var userid = payload['sub'];
//       // If request specified a G Suite domain:
//       //var domain = payload['hd'];
//     });
app.get('/tokensignin', (req, res) => {
  res.send('hello')
});
app.post('/tokensignin', (req, res) => {
    res.send('hello')
    // res.send('hello'); 
  });

app.listen(3000, ()=>{console.log('listening in port 3000');});