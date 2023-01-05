const express = require("express");
const logger = require("morgan");

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");

const app = express();
const port = 5000;
// ------------------------------------------- middleware
app.use(express.json());
app.use(logger("dev"));
app.use("/", indexRouter);
app.use("/users", usersRouter);

// ------------------------------------------ 404 handling routes
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
