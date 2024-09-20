import {

    auth,
    createUserWithEmailAndPassword,
    db,
    doc,
    setDoc
    
} from "./javascript/firebase.js";

const email = document.getElementById("email")
const password = document.getElementById("password")
const userType = document.getElementById("userType")

// login button functionality

const loginHandler = async () => {

    try {
        const userCredentials = {
            email: email.value,
            userType: userType.value,
        };
        const userSignup = await createUserWithEmailAndPassword(
            auth,
            email.value,
            password.value

        );
        const uid = userSignup.user.uid;
        localStorage.setItem("uid", uid)
       
        // save user data on firestore

        const response = await setDoc(doc(db, "userData", uid), userCredentials);
        alert("user login successfully.");
        console.log(userSignup, "userSignup");

        if(userType.value === "Admin"){
            location.href = "./pages/admin_dashboard.html";
        }else if(userType.value === "Student"){
            location.href = "./pages/student_dashboard.html";
        }

    } catch (error) {
        alert(error.message);
    }
}



window.loginHandler = loginHandler;