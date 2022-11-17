let users = [];

const addData = (ev) => {
  ev.preventDefault(); //to stop the form submitting
  let aUser = {
    id: Date.now(),
    username: document.getElementById("username-input").value,
    email: document.getElementById("email-input").value,
    password: document.getElementById("password-input").value,
  };
  users.push(aUser);
  document.forms[0].reset(); // to clear the form for the next entries
  //document.querySelector('form').reset();

  //for display purposes only
  console.log("added", { users });
  // let pre = document.querySelector('#msg pre');
  // pre.textContent = '\n' + JSON.stringify(users, '\t', 2);

  //saving to localStorage
  localStorage.setItem("users", JSON.stringify(users));
};
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("newBtn").addEventListener("click", addData);
});

exports = { users };
