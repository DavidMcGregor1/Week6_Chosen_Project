const submitRegistration = document.getElementById("submit-registration");
const usernameInput = document.getElementById("username-input");
const emailInput = document.getElementById("email-input");
const passwordInput = document.getElementById("password-input");
const repeatPasswordInput = document.getElementById("repeatPassword-input");

document.getElementById("newBtn").addEventListener("click", addData);

const input = document.querySelector("input-field");

console.log("Working");

let userNameString = "";
let emailString = "";
let passwordString = "";
let repeatPasswordString = "";

usernameInput.addEventListener("input", () => {
  let value = usernameInput.value;
  userNameString += value;
});

emailInput.addEventListener("click", () => {
  console.log(userNameString);
  let value = emailInput.value;
  emailString += value;
  // console.log(value);
});

passwordInput.addEventListener("input", () => {
  let value = passwordInput.value;
  passwordString += value;
  console.log(value);
});

repeatPasswordInput.addEventListener("input", () => {
  console.log(`username: ${userNameString}`);

  let value = repeatPasswordInput.value;
  repeatPasswordString += value;
  console.log(value);
});

submitRegistration.addEventListener("click", () => {
  console.log(`username: ${userNameString}`);
  console.log(`email: ${emailString}`);
  console.log(`password: ${passwordString}`);
  console.log(`repeat password: ${repeatPasswordString}`);
});
