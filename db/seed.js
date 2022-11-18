/* global console , $ , document */
const { User } = require("../models/index");
const db = require("./db");

console.log("PLEASSSE WORK");

async function seed() {
  //drop if exists and creates if doens't
  await db.sync({
    force: true,
  });

  await User.bulkCreate(
    [
      {
        username: "bob",
        email: "Bob@gmail.com",
        password: "SoggyFlannel4",
      },

      {
        username: "John",
        email: "John@gmail.com",
        password: "ExquisiteMelon78",
      },

      {
        username: "Steve",
        email: "Steve@gmail.com",
        password: "SteveIsTheBest2",
      },

      {
        username: "Stacey",
        email: "Stacey@gmail.com",
        password: "BeautifulRoses9",
      },

      {
        username: "Mark",
        email: "Mark@gmail.com",
        password: "SecurePassWord47",
      },

      {
        username: "Alex",
        email: "Alex@gmail.com",
        password: "SlipperyChicken4",
      },
    ],
    { validate: true }
  );
}

seed();
