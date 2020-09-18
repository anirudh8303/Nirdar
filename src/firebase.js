import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyBo5uROT2glg2equWDJFDRChiEPQTCdPFE",
    authDomain: "nirdar-1b9e0.firebaseapp.com",
    databaseURL: "https://nirdar-1b9e0.firebaseio.com",
    projectId: "nirdar-1b9e0",
    storageBucket: "nirdar-1b9e0.appspot.com",
    messagingSenderId: "97521617366",
    appId: "1:97521617366:web:c7fa0c03f225ef46ba3c77",
    measurementId: "G-MV3JCV522V"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export { auth, provider }
export default db;