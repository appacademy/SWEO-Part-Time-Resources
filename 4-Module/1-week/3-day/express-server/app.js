const express = require('express')
const app = express()

const myMid = (req, res, next) => {
    console.log("Hey look I'm printing!");
    next();
  };
  
  const missedMid = (req, res, next) => {
    console.log('I never get to print :(');
    next();
  };
  
  app.get('/', myMid);
  
  app.get(['/hello', '/whatever', '/1243123'], missedMid);
  
  app.get('/', (req, res) => {
    console.log('I still get to print!');
    res.send('This is the / response');
  });

const port = 5000
app.listen(port, () => console.log('listening', port))