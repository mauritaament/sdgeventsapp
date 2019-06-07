//firebase resource: https://github.com/firebase/quickstart-js/blob/7d514fb4700d3a1681c47bf3e0ff0fa3d7c91910/auth/email-password.html

import React from 'react';
var firebase = require("firebase/app");
require("firebase/auth");
require("firebase/firestore");
const firebaseConfig = {
  apiKey: "AIzaSyCLUg9_zUCjBfSfyjEQqpl3zo2OVhO2iIY",
  authDomain: "sdgeventsapp.firebaseapp.com",
  databaseURL: "https://sdgeventsapp.firebaseio.com",
  projectId: "sdgeventsapp",
  storageBucket: "sdgeventsapp.appspot.com",
  messagingSenderId: "732655057908",
  appId: "1:732655057908:web:97da47f8412de442"
};
firebase.initializeApp(firebaseConfig);

async function authorizeEventBriteUser (){ //TODO:Figure out how to get access token from eventbrite. Ran into CORS redirecting issues and oauth issues..
  let header={'Connection':'keep-alive','Content-Type':'application/json'}
  console.log("calling authorize eventbrite host")
  await fetch('/auth/github', {
    method: 'GET',headers: header}).then(function(request){
    console.log(request)
  })
  //const resp=await response.json(

}

export  class FireBaseAuthentication extends React.Component{
  static async auth(info){
    let email=info['email'];
    let password=info['password'];
    try {

      let auth_status=await firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        if (errorCode === 'auth/wrong-password') {
          alert('Wrong password.');
        } else {
          alert(errorMessage);
        }
        console.log(error);
        // ...
      });

      return auth_status

    }catch(error){
      console.error(error)
    }
  }
}

export class SignUpAuth extends React.Component{
  static async SignUpAuth(email,password){
    let signUpStatus= await firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // [START_EXCLUDE]
      if (errorCode == 'auth/weak-password') {
        alert('The password is too weak.');
      } else {
        alert(errorMessage);
      }
      console.log(error);
      // [END_EXCLUDE]
    });
    // [END createwithemail]
    if(signUpStatus){
      firebase.auth().currentUser.sendEmailVerification().then(function() {
        // Email Verification sent!
        // [START_EXCLUDE]
        alert('Email Verification Sent!');
        // [END_EXCLUDE]
      });
      // [END sendemailverification]
    }
  }

}



/* trying to convert to hooks
async function auth(loginEmail,loginPassword){
    try {
        console.log("trying to authenticate")
        let auth_status=await firebase.auth().signInWithEmailAndPassword(loginEmail, loginPassword).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            if (errorCode === 'auth/wrong-password') {
                alert('Wrong password.');
            } else {
                alert(errorMessage);
            }
            console.log(error);
            // ...
        });
        return auth_status
    }catch(error){
        console.error(error)
    }
}
export function Authentication(info){
    const [loginEmail,setLoginEmail]=useState(info.username);
    const [loginPassword,setLoginPassword]=useState(info.password);
    useEffect(()=>{
        console.log(auth(loginEmail,loginPassword))
    })
}
 */