// alert("a new firebase project started")



// import productArr from "./product.js"
// import { userEmail, userName } from "./product.js"
// console.log("productArr", productArr, userEmail, userName)


// Firease Imp URLs
// https://firebase.google.com/docs/web/setup




// <!---------------- +654321`oimport + configuration section ---------------->



 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

import { } from src="https://www.gstatic.com/firebasejs/10.12.3/firebase-firestore.js">

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
































































// import { addDocument, app, collection, db, getDocs } from "./firebase.js"



// const submitbtn = document.getElementById("submitbtn")

// submitbtn.addEventListener("click", async () => {
//     console.log("formSubmit")

//     const todoObj = {
//         todo: "HELLO WORLD"
//     }

//     // collection(kaha create karo , kis name sy)
//     // First we create Firestore collection
//     const todoCollection = collection(db, "todo")

//     // Add doc on firestore
//     // addDoc(collection , obj)
//     const response = await addDoc(todoCollection, todoObj)
//     console.log(response, "response")

// })

// window.addEventListener("load", async () => {
//     const querySnapshot = await getDocs(collection(db, "todo"))
//     querySnapshot.forEach((doc) => {
//         console.log("doc", doc.data(), doc.id) 
//     })
// })



const formSubmit = document.getElementById("formSubmit")
formSubmit.addEventListener("click", async () => {
    const name = document.getElementById("name")
    const email = document.getElementById("email")
    const contact = document.getElementById("contact")
    console.log("name.value", name.value, email.value, contact.value)
    const userObj = {
        name: name.value,
        email: email.value,
        contact: contact.value,
    }


    const userCollection = collection(db, "user")

    const response = await addDoc(userCollection, userObj)
    console.log(response, "response")


})