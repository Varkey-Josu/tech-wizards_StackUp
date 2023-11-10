// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js";
import "auth.js";
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

signup.addEventListner('click',(e)=>{
    var email=document.getElementById('email').value;
    var password=document.getElementById('password').value;

    createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    alert('Account Created');
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
    alert(errorMessage);
  });
});