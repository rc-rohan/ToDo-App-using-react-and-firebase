// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//     apiKey: "AIzaSyDL9Cx_uYEBRudrz14PLWwA-H6Pb-pfSWw",
//     authDomain: "todo-app-1898.firebaseapp.com",
//     databaseURL: "https://todo-app-1898.firebaseio.com",
//     projectId: "todo-app-1898",
//     storageBucket: "todo-app-1898.appspot.com",
//     messagingSenderId: "930278895713",
//     appId: "1:930278895713:web:c8c5c7703606098ac57a20",
//     measurementId: "G-H5S62DX2QV",
// };

import firebase from "firebase";

// Initialize function helps us to connect everything in the firebase that we require basically it is the key to our backend
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDL9Cx_uYEBRudrz14PLWwA-H6Pb-pfSWw",
    authDomain: "todo-app-1898.firebaseapp.com",
    databaseURL: "https://todo-app-1898.firebaseio.com",
    projectId: "todo-app-1898",
    storageBucket: "todo-app-1898.appspot.com",
    messagingSenderId: "930278895713",
    appId: "1:930278895713:web:c8c5c7703606098ac57a20",
    measurementId: "G-H5S62DX2QV",
});

// now here using the firebase app which we just initialized we will be connecting to the firestore
const db = firebaseApp.firestore();

export default db;
