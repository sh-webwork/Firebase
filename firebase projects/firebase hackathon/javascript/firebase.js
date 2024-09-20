// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut
} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";


import {
    getFirestore,
    collection,
    doc,
    addDoc,
    getDocs,
    setDoc,
    updateDoc,
    arrayRemove,
    deleteDoc,
} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";

import {
    getStorage,
    ref,
    uploadBytes,
    getDownloadURL,
    uploadString,
    uploadBytesResumable,
    deleteObject
} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-storage.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDyhDfaoGNO58WS4RQF4F7fWcaDqMtMhJ4",
    authDomain: "my-1st-project-3d26e.firebaseapp.com",
    projectId: "my-1st-project-3d26e",
    storageBucket: "my-1st-project-3d26e.appspot.com",
    messagingSenderId: "780814833393",
    appId: "1:780814833393:web:8e1ad3df9f0279239d3b50"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

// Initialize Firebase Storage and get a reference to the service

const storage = getStorage(app);

// Initialize Firebase Firestore and get a reference to the service

const db = getFirestore(app);


export {
    getFirestore,
    collection,
    doc,
    addDoc,
    getDocs,
    setDoc,
    updateDoc,
    arrayRemove,
    deleteDoc,
    getStorage,
    ref,
    uploadBytes,
    getDownloadURL,
    uploadString,
    uploadBytesResumable,
    deleteObject,
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    app,
    auth,
    db,
    storage,
}
