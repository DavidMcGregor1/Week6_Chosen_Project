const loginButton = document.getElementById("login-button-id");
const registerButton = document.getElementById("register-button-id");

loginButton.addEventListener("click", () => {
  console.log("Worjing");
  document.location = "../public/Login.html";
});

registerButton.addEventListener("click", () => {
  console.log("Working");
  document.location = "../public/Register.html";
});
