// console.log(process.env.PASSWORD)
// console.log(process.env.NAME)
// console.log(process.env.MUSIC)
const express = require('express');
const app = express();
const path = require('path');

// app.use('/', express.static(path.join(__dirname, 'space')));
// console.log(__dirname)
//      user URL,            file path on our computer
// app.use('/', express.static('space'))

const mid1 = (req, res, next) => {
  console.log("Hey I'm mid1!");
  next();
};

const mid2 = (req, res, next) => {
  console.log("Hey I'm mid2!!");
  next();
  // res.json({ msg: "I'm mid 2" });
};

// app.get('/', mid1, mid2);
const midArr = [mid1, mid2];
app.get('/', midArr, (req, res) => {
  res.send('This worked!');
});

// const myMid = (req, res, next) => {
//   console.log("Hey look I'm printing!");
//   next();
// };

// app.get('/', myMid);

// app.get('/', (req, res) => {
//   console.log('Wow I printed after myMid!');
//   res.send('This is the / response');
// });

// const myMid = (req, res, next) => {
//   console.log("Hey look I'm printing!");
//   next();
// };

// const missedMid = (req, res, next) => {
//   console.log('I never get to print :(');
//   next();
// };

// app.get('/', myMid);

// app.get('/hello', missedMid, (req, res) => {
//   res.json({ message: 'Finally' });
// });

// app.get('/', (req, res) => {
//   console.log('I still get to print!');
//   res.send('This is the / response');
// });

const port = 5000;

app.listen(port, () => console.log('Hey there mr port', port));

// outer/outer/file1.js
