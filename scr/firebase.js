import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCe45SvAv6i7sXcPUr-YyIEp3PMMmwleQ0",
    authDomain: "clone-d30f9.firebaseapp.com",
    databaseURL: "https://clone-d30f9-default-rtdb.firebaseio.com",
    projectId: "clone-d30f9",
    storageBucket: "clone-d30f9.appspot.com",
    messagingSenderId: "739547549376",
    appId: "1:739547549376:web:3e0639998e654538ec2725",
    measurementId: "G-V0F524YHTD"
};



// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};