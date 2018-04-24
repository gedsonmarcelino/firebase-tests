const config = require('./firebase.config')
const firebase = require('firebase')

const app = firebase.initializeApp(config)
const auth = firebase.auth()

// Get the one-time code from the query parameter.
var actionCode = 'Abc123'

// (Optional) Get the continue URL from the query parameter if available.
var continueUrl = 'http://google.com';

// Display email recovery handler and UI.
handleRecoverEmail(auth, actionCode);

function handleRecoverEmail(auth, actionCode) {
  console.log('-> RECOVER EMAIL')

  var restoredEmail = null;

  restoredEmail = 'scoker.br@gmail.com';

  auth.sendPasswordResetEmail(restoredEmail).then(function() {
    // Password reset confirmation sent. Ask user to check their email.
    console.log('-> SENT EMAIL')
  }).catch(function(error) {
    // Error encountered while sending password reset code.
    console.error('-> ERROR:', error)
  });

}
