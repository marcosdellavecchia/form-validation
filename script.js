const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInputs();
});

function checkInputs() {
  //Get the values from inputs
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const password2Value = password2.value.trim();

  if (usernameValue === "") {
    setErrorFor(username, "Tu nombre de usuario no puede estar en blanco.");
  } else if (usernameValue.length < 3) {
    setErrorFor(username, "Tu usuario debe tener al menos 3 caracteres.");
  } else if (usernameValue.length > 20) {
    setErrorFor(username, "Tu usuario no puede tener más de 20 caracteres.");
  } else {
    setSuccessFor(username);
  }

  if (emailValue === "") {
    setErrorFor(email, "Tu email no puede estar en blanco.");
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, "Ingresa una direccion de email válida.");
  } else {
    setSuccessFor(email);
  }

  if (passwordValue === "") {
    setErrorFor(password, "Tu contraseña no puede estar en blanco.");
  } else if (passwordValue.length < 6) {
    setErrorFor(password, "Tu contraseña debe tener al menos 6 caracteres.");
  } else if (!hasNumber(passwordValue)) {
    setErrorFor(password, "Tu contraseña debe contener al menos 1 numero.");
  } else if (!hasCapital(passwordValue)){
    setErrorFor(password, "Tu contraseña debe contener letras mayúsculas.");
  } else {
    setSuccessFor(password);
  }

  if (password2Value === "") {
    setErrorFor(password2, "Tu contraseña no puede estar en blanco.");
  } else if (passwordValue !== password2Value) {
    setErrorFor(password2, "Tus contraseñas no coinciden.");
  } else {
    setSuccessFor(password2);
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");

  //Add error message inside small
  small.innerText = message;

  //Add error class
  formControl.className = "form-control error";
}

function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

//Checks if email is valid. Found this on Stack Overflow. No way I could write regex like this.
function isEmail(email) {{}
  return (/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  ));
}

// Checks if password has a number on it
function hasNumber(password) {
  return /\d/.test(password);
}

//Checks if password has a capital letter on it
function hasCapital(password) {
  return /^(.*[A-Z].*)$/.test(password);
}