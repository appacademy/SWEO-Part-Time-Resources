const express = require('express');
const app = express();

app.use(express.json());

app.get('/hi', (req, res) => {
  res.send('Hi there!');
});

app.get('/hi/higher', (req, res) => {
  res.send('Can we get much higher');
});

// This is throwing the error (notice no 'err' parameter)
app.use((req, res, next) => {
  // throw new Error("We didn't find that resource");
  const myError = new Error("We didn't find that resource");

  next(myError);
});

// This is an error handler
app.use((err, req, res, next) => {
  console.log(err.message);
  // res.json('Error: Never got to say hi :( ');
	next(err)
});

// app.get('/hi/higher', (req, res) => {
//   res.send('Can we get much higher');
// });



const port = 5000;

app.listen(port, () => console.log("You what's wrong with today", port));
