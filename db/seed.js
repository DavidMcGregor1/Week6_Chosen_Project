const { User } = require("../models/index");
const users = require("../src/registerScript");
const db = require("./db");
let inputUserName = "bob";
let inputEmail = "bob@gmail.com";
let inputPassword = "BobsPassword";
const userNameString = require("../src/script");

console.log("PLEASSSE WORK");

async function seed() {
  //drop if exists and creates if doens't
  await db.sync({
    force: true,
  });

  // const u1 = await User.create({
  //   username: "David",
  //   email: "David@gmail.com",
  //   password: "Password1",
  // });
  // console.log(u1.toJSON());

  for (i = 0; i < 10; i++) {
    await User.create({
      username: `${userNameString}`,
      email: `${inputEmail}`,
      password: `${inputPassword}`,
    });
  }

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
