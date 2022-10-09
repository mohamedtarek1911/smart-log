"use strict";
/////////////log in//////////////
let userName_input = document.querySelector("#userName_input");
let passWord_input = document.querySelector("#passWord_input");
let btn_login = document.querySelector(".btn_login");

console.log(btn_login);

// console.log(userName_input, passWord_input, btn_login);

/////////////sign up//////////////

let createUserName = document.querySelector("#createUserName");
let createPassword = document.querySelector("#createPassword");
let emailInput = document.querySelector("#emailInput");
let createDate = document.querySelector("#createDate");
let btn_submit = document.querySelector(".btn_submit");
let btn_clear = document.querySelector(".btn_clear");
let alert_danger = document.querySelector(".text-danger");
let alert_succes = document.querySelector(".text-success");

// console.log(createDate, createPassword, createUserName, emailInput);

console.log(btn_submit);

let createUsers;

//////////////////implementation for singup///////////////////

if (localStorage.getItem("users") != null) {
  createUsers = JSON.parse(localStorage.getItem("users"));
} else {
  createUsers = [];
}

console.log(createUsers);
function createUser() {
  if (valid()) {
    let users = {
      name: createUserName.value,
      pass: createPassword.value,
      email: emailInput.value,
      date: createDate.value,
    };
    createUsers.push(users);
    console.log(createUsers);
    localStorage.setItem("users", JSON.stringify(createUsers));
    alert_succes.classList.replace("d-none", "d-block");
    alert("congratulations🎉🎊✨🎆🎇 you can log in now ");
    window.location.href = "index.html";
  } else {
    alert_danger.classList.replace("d-none", "d-block");
  }
}

function clearForm() {
  createUserName.value = "";
  createPassword.value = "";
  emailInput.value = "";
  createDate.value = "";
}

function valid() {
  if (
    (createUserName.value == "" || createUserName.value == null) &&
    (createPassword.value == "" || createPassword.value == null) &&
    (emailInput.value == "" || emailInput.value == null) &&
    (createDate.value == "" || createDate.value == null)
  ) {
    alert_danger.classList.replace("d-none", "d-block");
    return false;
  } else {
    return true;
  }
}

for (let i = 0; i < createUsers.length; i++) {
  if (
    createUsers[i].name.value == userName_input.value &&
    createUsers[i].pass.value == passWord_input.value
  ) {
  }
}

btn_login.addEventListener("click", function () {
  console.log("hello");
});

btn_submit.addEventListener("click", function () {
  createUser();
});

btn_clear.addEventListener("click", function () {
  clearForm();
});

//////////////////implementation for log in/////////////////

function isAcsess() {}
