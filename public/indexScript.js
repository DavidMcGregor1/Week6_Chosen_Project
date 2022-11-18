const loginButton = document.getElementById("login-button-id");
const registerButton = document.getElementById("register-button-id");

loginButton.addEventListener("click", () => {
  console.log("Worjing");
  document.location = "/static/Login.html";
});

registerButton.addEventListener("click", () => {
  console.log("Working");
  document.location = "/static/Register.html";
});
