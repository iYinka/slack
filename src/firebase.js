import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAcTu3scenho0SyOYcnIQe476oxQJgfr3Y",
  authDomain: "slack-1f848.firebaseapp.com",
  projectId: "slack-1f848",
  storageBucket: "slack-1f848.appspot.com",
  messagingSenderId: "310133756706",
  appId: "1:310133756706:web:446b3db4fcc44cb5f90b7b",
  measurementId: "G-QVEDS66LK4"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();


export { auth, provider };
export default db;