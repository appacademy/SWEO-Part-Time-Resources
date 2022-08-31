const express = require('express');
const app = express();

// First
// try app.use("/banana",...)
app.use('/', (req, res, next) => {
  console.log('First');
  const error = new Error('First');
  next(error);
});

// Second
app.use((req, res, next) => {
  console.log('Second');
  next();
});

// Third
const first = (req, res, next) => {
  console.log('Third');
  next();
}

const second = (req, res, next) => {
  res.send('Message');
}
app.get('/other-resource', first, second);

// Fourth
const fourth = (req, res, next) => {
  console.log('Fourth');
  const error = new Error('Fourth');
  throw error;
};

// Fifth
const fifth = (err, req, res, next) => {
  console.log('Fifth');
  next(); 
  //if just next() --> we are going to go to a regular middleware next 
  //if next(err) --> passing err into the next, then we have to go FIND the next middleware that can HANDLE AN ERROR.
};

app.use('/', [fourth, fifth]); //middleware determins if we should hit fourth, or fifth, or both, or none

// Sixth
app.get('/other-resource', (req, res, next) => {
  console.log('Sixth');
  next();
});

// Seventh
app.use((req, res, next) => {
  console.log('Seventh');
  res.send('Message'); //if it was next(err) instead of res.send, we would then go to the next application level middleware (eight can handle an error)
});

// Eighth
app.use((err, req, res, next) => {
  console.log('Eighth');
  res.send('Message');
});

const port = 5000;
app.listen(port, () => console.log('Server is listening on port', port));