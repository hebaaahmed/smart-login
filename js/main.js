var userNameInput = document.getElementById("nameInput");
var userEmailInput = document.getElementById("emailInput");
var userPasswordInput = document.getElementById("passwordInput");

document.getElementById("home").style.display = "none";
document.getElementById("login").style.display = "none";

var signInLink = document.querySelector(".signInLink");

signInLink.addEventListener("click", function (event) {
  event.preventDefault();
  document.getElementById("signup").style.display = "none";
  document.getElementById("login").style.display = "block";
});

var signUpLink = document.querySelector(".signUpLink");

signUpLink.addEventListener("click", function (event) {
  event.preventDefault();
  document.getElementById("signup").style.display = "block";
  document.getElementById("login").style.display = "none";
});

var signUpInputsList = JSON.parse(localStorage.getItem("inputs_key")) || [];

// new user -------

function signUpInputs() {
  var inputs = {
    name: userNameInput.value,
    email: userEmailInput.value,
    password: userPasswordInput.value,
  };

  if (!validateEmail(inputs.email)) {
    alert("not valid Email");
    return false;
  }

  if (!validateName(inputs.name)) {
    alert("not valid name");
    return false;
  }

  if (signUpInputsList.some((user) => user.email === inputs.email)) {
    alert("this email is already exist");
    return false;
  }
  if (signUpInputsList.some((user) => user.name === inputs.name)) {
    alert("this name is already exist");
    return false;
  }

  signUpInputsList.push(inputs);

  console.log(inputs);

  localStorage.setItem("inputs_key", JSON.stringify(signUpInputsList));

  displayUserName(inputs);

  return true;
}

function displayUserName(users) {
  var usersNameContainer = `   <h2>

                                    ${nameInput.value}   </h2>
  `;

  document.getElementById("username").innerHTML = usersNameContainer;
}

var signUpButton = document.querySelector(".signUPBtn");

signUpButton.addEventListener("click", function (event) {
  event.preventDefault();
  var isvalid = signUpInputs();

  if (isvalid) {
    document.getElementById("signup").style.display = "none";
    document.getElementById("home").style.display = "block";
  }
});

// Login--------

function logInInputs() {
  var inputs = {
    email: userEmailInput.value,
    password: userPasswordInput.value,
  };

  if (!validateEmail(inputs.email)) {
    alert("not valid Email");
    return false;
  }

   if (inputs.email === "" && inputs.password === "") {
    document.getElementById("errorLogin").style.display = "bolck";

    return false;
  }

  var user = signUpInputsList.find(
    (user) => user.email === inputs.email && user.password === inputs.password
  );

  if (!user) {
    alert("This user does not exist.");
    return false;
  }
  console.log(inputs);

  return true;
}

var logInButton = document.querySelector(".logInBtn");

logInButton.addEventListener("click", function (event) {
  event.preventDefault();
  var isvalid = logInInputs();

  if (isvalid) {
    document.getElementById("login").style.display = "none";
    document.getElementById("home").style.display = "block";
  }
});

// ----------validation------------

function validateEmail(email) {
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return emailRegex.test(email);
}

function validateName(name) {
  var nameRegex = /^[A-Za-z]{3,}$/;

  return nameRegex.test(name);
}

// ----------onload------------

window.onload = function () {
  var storedUsers = JSON.parse(localStorage.getItem("inputs_key")) || [];
  if (storedUsers.length > 0) {
    displayUserName(storedUsers[storedUsers.length - 1]);
  }
};

// welcom-page-------------

var logOutButton = document.querySelector(".logOutBtn");

logOutButton.addEventListener("click", function (event) {
  event.preventDefault();

  document.getElementById("login").style.display = "block";
  document.getElementById("home").style.display = "none";
});

// login-------------

//   function logInInputs() {
//     var inputs = {
//       email: userEmailInput.value,
//       password: userPasswordInput.value,
//     };

//     if (!validateEmail(inputs.email)) {
//       alert("not valid Email");
//       return false;
//     }

//     if(!inputs.email.trim()){
//       document.getElementById("errorLogin").style.display = "BLOCK";
//       return false;

//     }
//     if(!inputs.password.trim()){
//       document.getElementById("errorLogin").style.display = "BLOCK";
//       return false;

//     }

//     console.log(inputs);

//     var storedUsers = JSON.parse(localStorage.getItem("inputs_key")) || [];
//     var user = storedUsers.find(
//       (user) => user.email === inputs.email && user.password === inputs.password
//     );

//     if (!user) {
//       document.getElementById("errorLogin").style.display = "block";
//       return false;
//     }
//     document.getElementById("errorLogin").style.display = "none";

//     displayUserName(inputs);

//     return true;

//   }

//   var logInButton = document.querySelector(".logInBtn");

//   logInButton.addEventListener("click", function (event) {
//     event.preventDefault();

// var isvalid = logInInputs();

// if (isvalid) {
//     document.getElementById("login").style.display = "none";
//     document.getElementById("home").style.display = "block";

//   }

// });
