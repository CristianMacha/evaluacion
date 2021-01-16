import firebase from 'firebase/app'
import 'firebase/database'

const firebaseConfig = {
    apiKey: "AIzaSyCg7bmP_su0mrGFvapic9OcDFsc8DwEoIA",
    authDomain: "evaluacion-bfe57.firebaseapp.com",
    databaseURL: "https://evaluacion-bfe57-default-rtdb.firebaseio.com",
    projectId: "evaluacion-bfe57",
    storageBucket: "evaluacion-bfe57.appspot.com",
    messagingSenderId: "738199394046",
    appId: "1:738199394046:web:f77e9ec8dead43b135b7af"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export {firebase};