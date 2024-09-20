import {

    auth,
    db,
    doc,
    setDoc,
    addDoc,
    updateDoc,
    deleteDoc,
    collection,
    getDocs

} from "./firebase.js";

// onload function

window.addEventListener("load", async () => {

    const uid = localStorage.getItem("user");
    // console.log("value of uid is ", uid)
    const snapShots = await getDocs(collection(db, "students collection"));
    const tempArr = [];
    snapShots.forEach((doc) => {


        const stdObj = {
            ...doc.data(),
            id: doc.id,
        }
        tempArr.push(stdObj)
    });
    console.log("tempArr is ", tempArr)

    renderStdListUI(tempArr);

});


// add student modal button functionality

const addStudent = async () => {
    const firstName = document.getElementById("firstName")
    const lastName = document.getElementById("lastName")
    const email = document.getElementById("email")
    const password = document.getElementById("password")
    const cnic = document.getElementById("cnic")
    const userType = document.getElementById("userType")
    const uid = localStorage.getItem("uid")

    const stdCollection = {
        firstName: firstName.value,
        lastName: lastName.value,
        email: email.value,
        password: password.value,
        cnic: cnic.value,
        userType: userType.value
    }

    console.log("stdCollection is: ", stdCollection)

    // Add a new document with a generated id.
    const docRef = await addDoc(collection(db, "students collection"), {
        firstName: firstName.value,
        lastName: lastName.value,
        email: email.value,
        password: password.value,
        cnic: cnic.value,
        userType: userType.value,
        uid: uid


    });
    // Get the auto-generated document ID
    const documentId = docRef.id;
    console.log('Document ID:', documentId);
    localStorage.setItem("documentId", documentId);

    alert("Student added sucessfully.");
}



// upload student marks modal button functionality

const uploadStdMarks = async () => {
    const course = document.getElementById("course")
    const stdId = document.getElementById("stdId")
    const marks = document.getElementById("marks")
    const totalMarks = document.getElementById("totalMarks")
    const grade = document.getElementById("grade")

    const stdMarksCollection = {
        course: course.value,
        stdId: stdId.value,
        marks: marks.value,
        totalMarks: totalMarks.value,
        grade: grade.value,

    }

    console.log("stdMarksCollection is: ", stdMarksCollection)

    // Add a new document with a generated id.
    const docRef = await addDoc(collection(db, "std marks collection"), {
        course: course.value,
        stdId: stdId.value,
        marks: marks.value,
        totalMarks: totalMarks.value,
        grade: grade.value,
        // uid: uid
    });

    // Get the auto-generated document ID
    const documentId = docRef.id;
    console.log('Document ID:', documentId);
    localStorage.setItem("documentId", documentId);

    alert("Student Marks uploaded sucessfully.")



}



// rendering student list on window

const renderStdListUI = (tempArr) => {
    for (const value of tempArr) {
        stdList.innerHTML +=
            `
             <tr>
                <td scope="col">${value.id}</td>
                <td scope="col">${value.firstName}</td>
                <td scope="col">${value.lastName}</td>
                <td scope="col">${value.email}</td>
                <td scope="col">${value.cnic}</td>
            </tr>
 
            
            `
    }
    // window.location.reload()
}

// logout button functionality

const logoutHandler = () => {

    auth.signOut().then(() => {
        console.log("User signed out");
        window.location.href = "../index.html";
    }).catch((error) => {
        console.error("Error signing out:", error);
    });
 
}

window.addStudent = addStudent;
window.uploadStdMarks = uploadStdMarks;
window.renderStdListUI = renderStdListUI;
window.logoutHandler = logoutHandler;   
