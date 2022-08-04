// // require('dotenv').config(); // if using dotenv

// console.log(process.env.NAME); // Zaviar
// // console.log(process.env.name); // undefined
// console.log(process.env.MUSIC); // lofi
// console.log(process.env.PASSWORD); // YouWillNeverKnow

const express = require('express');
const path = require('path');
const app = express();

// console.log(__dirname)

app.use('/', express.static(path.join(__dirname, "space")))

app.use('/banana', express.static('space'));
// app.use('/', express.static('space/earth'));

// app.use("whatever you want to immediately follow localhost:5000", express.static("name of the folder file path"))
// app.use(express.static('space/earth'));

// const myMiddleware = (req, res, next) => {
//   console.log("I'm a middleware function!");

// };

// app.get('/', myMiddleware);

// app.get('/', myMiddleware, (req, res) => {
//   res.json({ msg: "Yo I'm middleware" });
// });

// const mid1 = (req, res, next) => {
//   console.log("Hey I'm mid1!");
//   next();
// };

// const mid2 = (req, res, next) => {
//   console.log("Hey I'm mid2!!");
//   next();
// };

// const mid3 = (req, res, next) => {
//   console.log("Hey I'm mid3!!!");
// 	next();
// };

// const midArray = [mid3, mid1, mid2];

// app.get('/', midArray, (req, res) => {
//   res.send('Holy cow I ran so many middlewares');
// });

// const myMid = (req, res, next) => {
//   console.log("Hey look I'm printing!");
//   next();
// };

// app.get('/', myMid);

// app.get('/', (req, res) => {
//   console.log('Wow I printed after myMid!');
//   res.send('This is the / response');
// });

const myMid = (req, res, next) => {
  console.log("Hey look I'm printing!");
  next();
};

const missedMid = (req, res, next) => {
  console.log('I never get to print :(');
  next();
};

app.get('/', myMid);

app.get('/hello', missedMid);

app.get('/', (req, res) => {
  console.log('I still get to print!');
  res.send('This is the / response');
});

const port = 5000;

app.listen(port, () => console.log('Hey there mr port', port));
