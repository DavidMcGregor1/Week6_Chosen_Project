const express = require("express");
const { User } = require("../models");
const app = express();
app.use(express.json());
const port = 5001;
app.use("/static", express.static("public"));
// express.static.mime.define({ "application/javascript": ["js"] });
//sfs
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

app.put("/user/", async (req, res) => {
  console.log(req.body);
  const userNameParam = req.body.username;
  const pass = req.body.password;
  const emailParam = req.body.email;
  console.log(userNameParam, pass, emailParam);

  await User.create(req.body).then(() => {
    console.log("Done");
    res.sendStatus(200);
  });
});

app.listen(port, () => {
  console.log("App listening on port" + port);
});
