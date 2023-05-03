const express = require("express");
const logger = require("morgan");
const sqlite = require("sqlite3").verbose();

// connecting to sqlite db
const db = new sqlite.Database(
  "./Database/twitter.sqlite",
  sqlite.OPEN_READWRITE,
  (err) => {
    if (err) return console.log(err);
  }
);

console.log("here", db);
const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");

const app = express();
const port = 5000;

app.use(logger("dev"));
app.use(express.json());
app.use("/", indexRouter);
app.use("/users", usersRouter);

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