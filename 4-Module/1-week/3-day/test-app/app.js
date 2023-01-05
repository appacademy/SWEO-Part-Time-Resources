const express = require("express");
const logger = require("morgan");

const app = express();
app.use(logger("dev"));
app.use(express.json());
const port = 5000;

// initializing our users object
const users = {
  1: {
    id: 1,
    firstName: "Blake",
    hobbies: ["cooking", "anime", "video games"],
  },
  2: { id: 2, firstName: "Andres", hobbies: ["traveling", "poker", "coding"] },
};

// get our / route
app.get("/", (req, res) => {
  return res.status(200).send("Welcome to our test application!");
});

// get all users
app.get("/users", (req, res) => {
  return res.status(200).send(users);
});

//get one user
app.get("/users/:id", (req, res) => {
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
app.post("/users", (req, res) => {
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

  //   //with using middleware of app.use(express.json());

  const newUser = req.body;
  users[newUser["id"]] = newUser;
  if (users[newUser.id]) {
    //console.log("are user was added", users);
    return res.status(201).send(newUser);
  }
});

// put/update a user
app.put("/users/:id", (req, res) => {
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
app.delete("/users/:id", (req, res) => {
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
app.use((req, res, next) => {
  const err = new Error("Sorry, the requested resource couldn't be found.");
  err.statusCode = 404;
  next(err);
});

// Catch-all error-handling middleware
app.use((err, req, res, next) => {
  console.log(err);
  const statusCode = err.statusCode || 500;
  res.status(statusCode);
  res.json({
    message: err.message || "Something went wrong",
    statusCode,
  });
});
// starting our application
app.listen(port, () => console.log(`Listening on port ${port}...`));
