// const myFunc = (one, two, three, a, e, yg, tie) => {
//   console.log('nothing');
// };

// console.log(myFunc.length);
const express = require('express');

const app = express();

app.get('/hi', (req, res) => {
  res.send('Hi there!');
});

// This is throwing the error (notice no 'err' parameter)
app.use((req, res, next) => {
  // throw new Error("We didn't find that resource");

  const myError = new Error("We didn't find that resource");
  next(myError);
});

// This is an error handler
app.use((err, req, res, next) => {
  console.log(err.name);
  next();
  // res.send('Error: Never got to say hi :( ');
});

app.use((req, res, next) => {
  res.send('Woah that error went away!');
});

const port = 5000;

app.listen(port, () => console.log('Is that a bird? A plae', port));
