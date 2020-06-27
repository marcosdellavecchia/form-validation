const name = document.getElementById("name");
const password = document.getElementById("password");
const form = document.getElementById("form");
const errorText = document.getElementById("error");

form.addEventListener("submit", function (e) {
  let messages = [];
  if (name.value === "" || name.value == null) {
    messages.push("Username is required");
  }
  if (name.value.length < 3) {
    messages.push("Your username needs to be at least 3 characters long");
  }
  if (password.value.length <= 6) {
    messages.push("Password must be longer than 6 characters");
  }
  if (password.value.length >= 20) {
    messages.push("Password must be shorter than 20 characters");
  }
  if (password.value === "password") {
    messages.push('Your password cannot be "password"');
  }
  if (messages.length > 0) {
    e.preventDefault();
    errorText.innerHTML = messages.join("<br>");
  }
});
