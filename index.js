document.addEventListener("DOMContentLoaded", function () {
  let usersDetails = localStorage.getItem("users");


  if (usersDetails) {
    let storedData = JSON.parse(usersDetails);
    users = [...storedData];

    let htmlContent = ``;
    users.forEach(function (userDetails) {
      htmlContent += `<tr>
      <td>${userDetails.name}</td>
      <td>${userDetails.email}</td>
      <td>${userDetails.password}</td>
      <td>${userDetails.dob}</td>
      <td>${userDetails.terms}</td>
    </tr>`;
    });
    tableBody.innerHTML = htmlContent;
  } else {
    return;
  }
});

function showError(message) {
  errorContainer.textContent = "";
  errorContainer.textContent = message;
}
let users = [];
let errorContainer = document.querySelector(".error-msg");
let form = document.getElementById("fD");
let nameElement = document.getElementById("name");
let emailElement = document.getElementById("email");
let passwordElement = document.getElementById("password");
let dobElement = document.getElementById("dob");
let checkBoxElement = document.getElementById("agree");
let tableBody = document.getElementById("tableBody");
let btn = document.getElementById("submit");
function isNameEmpty(name) {
  return name === "";
}
function isEmailEmpty(email) {
  return email === "";
}
function isPasswordEmpty(password) {
  return password == "";
}
function isAgeEmpty(age) {
  return age == "";
}
function isInvalidAge(age) {
  let currentDate = new Date();
  let userDob = new Date(age);
  let userAge = currentDate.getFullYear() - userDob.getFullYear();
  return userAge < 18 || userAge > 55;
}
form.addEventListener("submit", function (event) {
  console.log("Form submission started");
  event.preventDefault();
  let userName = nameElement.value;
  let userEmail = emailElement.value;
  let userPassword = passwordElement.value;
  let userDob = dobElement.value;
  let acceptedTerms = checkBoxElement.checked;
  console.log("Form data captured");
  if (isNameEmpty(userName)) {
    showError("Name Cannot Be Empty, Please Fill That field");
    return;
  }
  if (isEmailEmpty(userEmail)) {
    showError("Email is Required, Please Fill That Field");
    return;
  }
  if (isPasswordEmpty(userPassword)) {
    showError("Please Fill The Password");
    return;
  }
  if (isAgeEmpty(userDob)) {
    showError("Date of Birth is Required");
    return;
  }
  if (isInvalidAge(userDob)) {
    showError("Your Age Should be Between 18 and 55");
    return;
  }
  showError("");
  let user = {
    name: userName,
    email: userEmail,
    password: userPassword,
    dob: userDob,
    terms: acceptedTerms,
  }
  ;
  users.push(user);
  localStorage.setItem("users", JSON.stringify(users));
  location.reload();
}
)
;
