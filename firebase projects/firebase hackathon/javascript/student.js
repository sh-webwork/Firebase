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

const searchResultHandler = async () => {
    const searchCNIC = document.getElementById("cnic").value;
    const resultDiv = document.getElementById("result");

    // Reference the collection
    const stdMarksCollectionRef = collection(db, "std marks collection");

    // Query the collection to find the student by CNIC (stored as stdId)
    const q = query(stdMarksCollectionRef, where("stdId", "==", searchCNIC));

    const querySnapshot = await getDocs(q);

    // Clear the result div before rendering new data
    resultDiv.innerHTML = '';

    // Check if results are found
    if (querySnapshot.empty) {
        resultDiv.innerHTML = "No results found for the entered CNIC.";
    } else {
        querySnapshot.forEach((doc) => {
            const data = doc.data();
            // Render the student result on UI
            resultDiv.innerHTML = `
                <p><strong>Course:</strong> ${data.course}</p>
                <p><strong>CNIC:</strong> ${data.stdId}</p>
                <p><strong>Marks:</strong> ${data.marks} / ${data.totalMarks}</p>
                <p><strong>Grade:</strong> ${data.grade}</p>
            `;
        });
    }
}





// logout button functionality

const logoutHandler = () => {
    
    auth.signOut().then(() => {
        window.location.href = "../index.html"
        console.log("User signed out");
    }).catch((error) => {
        console.error("Error signing out:", error);
    });

}

window.logoutHandler = logoutHandler;
window.searchResultHandler = searchResultHandler;
