// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyC8DqWC16xVpRp4s05M5FkbLFKWzjIobkE",
  authDomain: "tasker-todo-app.firebaseapp.com",
  projectId: "tasker-todo-app",
  storageBucket: "tasker-todo-app.appspot.com",
  messagingSenderId: "481453018191",
  appId: "1:481453018191:web:0ca6a1a9f800cac9222e3a"
};

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