const addData = (ev) => {
  console.log("In add data");
  ev.preventDefault(); //to stop the form submitting
  let aUser = {
    username: document.getElementById("username-input").value,
    email: document.getElementById("email-input").value,
    password: document.getElementById("password-input").value,
  };
  $.ajax({
    url: "/user",
    contentType: "application/json",
    data: JSON.stringify(aUser),
    method: "PUT",
  });
  document.forms[0].reset(); // to clear the form for the next entries
  //document.querySelector('form').reset();

  //for display purposes only
  // let pre = document.querySelector('#msg pre');
  // pre.textContent = '\n' + JSON.stringify(users, '\t', 2);

  //saving to localStorage
};
// document.addEventListener("DOMContentLoaded", () => {
$(document).ready(function () {
  document.getElementById("newBtn").addEventListener("click", addData);
});
