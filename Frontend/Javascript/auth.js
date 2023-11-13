import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC8DqWC16xVpRp4s05M5FkbLFKWzjIobkE",
  authDomain: "tasker-todo-app.firebaseapp.com",
  databaseURL: "https://tasker-todo-app-default-rtdb.firebaseio.com",
  projectId: "tasker-todo-app",
  storageBucket: "tasker-todo-app.appspot.com",
  messagingSenderId: "481453018191",
  appId: "1:481453018191:web:0ca6a1a9f800cac9222e3a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth =firebase.auth();
const database = firebase.database();

function register(){
    username=document.getElementById('username').value;
    email=document.getElementById('email').value;
    password=document.getElementById('password').value;
}

createUserWithEmailAndPassword(email, password)
  .then(function() {
    // Signed up 
    var user = auth.currentUser;
    // ...
    var database_ref=database.ref();

    var user_data={
        email:email,
        username:username,
        password:password,
        last_login:Date.now()
    }

    database_ref.child('users/'+user.uid).set(user-data)

    alert('User created')
  })

  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
