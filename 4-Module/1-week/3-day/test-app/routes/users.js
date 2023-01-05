const express = require("express");

const router = express.Router();

const users = {
  1: {
    id: 1,
    firstName: "Blake",
    hobbies: ["cooking", "anime", "video games"],
  },
  2: { id: 2, firstName: "Andres", hobbies: ["traveling", "poker", "coding"] },
};

// get all users
router.get("/", (req, res) => {
  return res.status(200).send(users);
});

//get one user
router.get("/:id", (req, res) => {
  const stringId = req.params.id;
  // console.log(
  //   "our request paramaters as its base string",
  //   typeof stringId === "string",
  //   stringId
  // );
  // vanilla js that will coerce the a numbered string to be a data type of a number, you can use this or parseInt()
  id = req.params.id * 1;
  //console.log("our id as a number", typeof id === "number", id);
  const user = users[id];

  if (user) {
    return res.status(200).send(user);
  } else {
    return res.status(404).send("Sorry this user does not exist");
  }
});

// post one user to users
router.post("/", (req, res) => {
  //without using middleware

  //   let body = [];
  //   req
  //     .on("data", (chunk) => {
  //       body.push(chunk);
  //     })
  //     .on("end", () => {
  //       body = Buffer.concat(body).toString();
  //       const newUser = JSON.parse(body);
  //       users[newUser["id"]] = newUser;
  //       if (users[newUser.id]) {
  //         console.log("are user was added", users);
  //         return res.status(201).send(newUser);
  //       }
  //     });

  //   //with using middleware of router.use(express.json());

  const newUser = req.body;
  users[newUser["id"]] = newUser;
  if (users[newUser.id]) {
    //console.log("are user was added", users);
    return res.status(201).send(newUser);
  }
});

// put/update a user
router.put("/:id", (req, res) => {
  const userId = req.params.id * 1;
  if (users[userId]) {
    const updatedUser = req.body;
    users[userId] = updatedUser;
    return res.status(200).send({
      message: `user ${userId} has successfully been updated`,
      updatedUser: users[userId],
    });
  } else {
    return res.status(404).send("Sorry this user does not exist");
  }
});

// delete one user
router.delete("/:id", (req, res) => {
  const userId = req.params.id * 1;

  if (users[userId]) {
    delete users[userId];
    //console.log("we have deleted our user", users);
    return res.status(200).send({
      message: `user ${userId} has successfully been deleted`,
      userId,
    });
  } else {
    return res.status(404).send("Sorry this user does not exist");
  }
});

module.exports = router;
