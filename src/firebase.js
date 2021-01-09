import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDmMN_GjTIzDymMVrIjbpBvxr05cWk6l_o",
    authDomain: "todo-app-ef8ae.firebaseapp.com",
    projectId: "todo-app-ef8ae",
    storageBucket: "todo-app-ef8ae.appspot.com",
    messagingSenderId: "24844389448",
    appId: "1:24844389448:web:e4c29c5d268e22e27b5c7d"
  });

  const db = firebaseApp.firestore();

  export default db