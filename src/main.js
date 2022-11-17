const { User } = require("../models");

async function main() {
  //   await User.update(
  //     {
  //       name: "Johnny",
  //     },
  //     {
  //       where: {
  //         name: "John",
  //       },
  //     });

  //select command
  const users = await User.findAll({
    attributes: ["username"],
  });
  console.table(users.map((user) => user.toJSON()));
}

main();
