import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyDOeRrWRlG2G2zm7OcWJnt6wt4Vnn3bd-I",
    authDomain: "nidar-6ce3c.firebaseapp.com",
    databaseURL: "https://nidar-6ce3c.firebaseio.com",
    projectId: "nidar-6ce3c",
    storageBucket: "nidar-6ce3c.appspot.com",
    messagingSenderId: "239921622288",
    appId: "1:239921622288:web:d5a36961c452e0e67f4995",
    measurementId: "G-N1LC6Z95S8"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export { auth, provider }
export default db;