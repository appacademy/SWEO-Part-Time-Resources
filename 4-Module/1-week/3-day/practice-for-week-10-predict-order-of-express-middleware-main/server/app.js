const express = require('express');
const app = express();

// First
// app.use('/', (req, res, next) => { // application level
//   console.log('First');
//   const error = new Error('First');
//   next(error); // will run/trigger an error level middleware
// });

// Second
app.use((req, res, next) => { // application level
  console.log('Second');
  next(); // trigger next middleware
});

const verification = (req, res, next) => { // router-level
	console.log('Third');	// only runs with /other-resource
	next(); // will trigger next middleware
}

const validation = (req, res, next) => {
	console.log('IM THE THIRD AND A HALF')
  //   res.send('Message'); // will stop and return back response to client
	  next()
  }

const verified = (req, res, next)=>{
	console.log('IM THE THIRD OF THE THIRD')
	res.send('END!!!!')
}

// Third
app.get('/other-resource', verification, validation, verified);

// app.HTTPMETHOD, app.METHOD
// app.get('/', cb, cb, cb) 3 in one

// Fourth
const fourth = (req, res, next) => { // fourth function
  console.log('Fourth');			// application level middleware
  const error = new Error('Fourth');
  throw error; // since it throws an error will trigger a error handling middleware
};

// Fifth
const fifth = (err, req, res, next) => { // fifth function
  console.log('Fifth');    				// error handling middleware
  next();  // will trigger/run the next middleware
};

app.use('/', [fourth, fifth]); // application level

// Sixth
app.get('/other-resource', (req, res, next) => { // router level middleware
  console.log('Sixth');  						// only runs with /other-resource
  next(); // will trigger next middle ware
});

// Seventh
app.use((req, res, next) => { // application level middleware
  console.log('Seventh');
  res.send('Message'); // will stop and return to client
});

// Eighth
app.use((err, req, res, next) => { // error handling middleware
  console.log('Eighth');
  res.send('Message'); // will stop and return to client
});

const port = 5000;
app.listen(port, () => console.log('Server is listening on port', port));
