import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDd9P5x92Yp9x5wdbDYDOLLHYTDZ8bVZLk",
  authDomain: "shadow-d1cf4.firebaseapp.com",
  databaseURL: "https://shadow-d1cf4.firebaseio.com",
  projectId: "shadow-d1cf4",
  storageBucket: "shadow-d1cf4.appspot.com",
  messagingSenderId: "875115727543",
  appId: "1:875115727543:web:035be11c316b6a259e9b32",
  measurementId: "G-36GJC34KLX",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
