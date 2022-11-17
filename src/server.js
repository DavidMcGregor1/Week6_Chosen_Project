const express = require("express");
const app = express();
const port = 5001;

app.get("/logon/", (req, res) => {
  const userNameParam = req.query.user;
  const pass = req.query.pass;
  console.log(pass);

  let users = [
    {
      userName: "Dave",
      id: 1,
      password: "Password1",
    },

    {
      userName: "Bob",
      id: 2,
      password: "GreenMelons5",
    },

    {
      userName: "Mark",
      id: 3,
      password: "SpicyTuna2",
    },
  ];

  for (i in users) {
    username = users[i].userName;
    password = users[i].password;

    if (userNameParam === username && pass === password) {
      res.json(users[i]);
      return;
    }
  }

  res.sendStatus(401);
});

app.listen(port, () => {
  console.log("App listening on port" + port);
});
