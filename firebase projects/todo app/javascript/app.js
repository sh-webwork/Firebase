window.addEventListener("load", () => {
  console.log(localStorage.getItem("user"));
  if (!localStorage.getItem("user")) {
    window.location.replace("../pages/login.html");
  }
});

import {
  addDoc,
  collection,
  db,
  deleteDoc,
  doc,
  getDocs,
  updateDoc,
} from "./firebase.js";

const todoCollection = collection(db, "todos");
const todoParent = document.querySelector(".parent");
console.log("todoParent", todoParent);

const addTodo = async () => {
  try {
    const todoInput = document.getElementById("input");
    console.log("todoInput", todoInput.value);
    if (todoInput.value.length < 3) {
      alert("Enter correct value");
      return;
    }
    const todoObj = {
      value: todoInput.value,
    };

    const res = await addDoc(todoCollection, todoObj);
    getTodos();
    console.log("res", res.id);

    todoInput.value = "";
  } catch (error) {
    console.log("error", error.message);
  }
};

const getTodos = async () => {
  try {
    const querySnapshot = await getDocs(todoCollection);
    let todoArr = [];
    // 1 way
    // querySnapshot.forEach((doc) => {
    //     const obj = {
    //         id: doc.id,
    //         ...doc.data()
    //     }
    //     todoArr.push(obj)

    // })

    // for (var obj of todoArr) {
    //     todoParent.innerHTML += `<div class="card my-3 " style="width: 18rem;">
    //         <div class="card-body">
    //             <h5 class="card-title"> ${obj.value} </h5>
    //             <button class="btn btn-info">Edit</button>
    //             <button class="btn btn-danger">Delete</button>
    //         </div>
    //     </div>`
    // }

    // 2 way
    todoParent.innerHTML = "";
    querySnapshot.forEach((doc) => {
      const obj = {
        id: doc.id,
        ...doc.data(),
      };
      // console.log("obj", obj.value)
      todoArr.push(obj);
      // console.log("obj", obj)
      todoParent.innerHTML += `<div class="todo-card my-3 " style="width: 20rem;">
                  <div class="card-body card-bg">
                  <div class="card-description">                  
                  <h5 class="card-title"> ${obj.value} </h5>
                  </div>    

                  <div class="card-btn d-flex gap-3">
                    <button class="btn btn-primary" id=${obj.id} onclick="editTodo(this)"
                  >Edit 
                  <span><img class="nav-images" style="width: 25px;" src="./images/edit-button.png" alt=""></span></button>
                  <button class="btn btn-primary" id="${obj.id}" onclick="deleteTodo(this.getParent)" >Delete
                  <span><img class="nav-images" style="width: 25px;" src="./images/delete.png" alt=""></span></button>
                  </div>
                  </div>
                  </div>`;
    });
  } catch (error) {
    // console.log("error", error.message);
    alert("error", error.message);
  }
};


const deleteTodo = async (ele) => {
  console.log("deleteTodo", ele.id);
  try {
    await deleteDoc(doc(db, "todos", ele.id));
    getTodos();
  } catch (error) {
    console.log("error", error.message);
  }
};
const editTodo = async (ele) => {
  try {
    console.log("ele", ele.id);
    const editValue = prompt("Enter Edit Value");
    await updateDoc(doc(db, "todos", ele.id), {
      value: editValue,
    });
    getTodos();
    console.log("editValue", editValue);
  } catch (error) {
    console.log("error", error.message);
  }
};

const logoutBtn = () => {
  localStorage.removeItem("user");
  localStorage.clear();
  window.location.replace("../pages/login.html");
};

window.addEventListener("load", getTodos);
window.addTodo = addTodo;
window.deleteTodo = deleteTodo;
window.editTodo = editTodo;
window.logoutBtn = logoutBtn;