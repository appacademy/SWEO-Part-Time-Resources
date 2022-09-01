const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('GET / This is the root URL');
});

// app.use((req,res,next)=>{
//   const err = new ReferenceError("This was a reference error!");
//   next(err);
// })

// "Resource Not Found Error" middleware
app.use((req, res, next) => {
  const err = new Error('Sorry, the requested resource couldn\'t be found.');
  // err is an object so we can attach a property like .statusCode to it so that the next handler can use.
  err.statusCode = 404;

  // go to the next ERROR HANDLER MIDDLEWARE
  next(err);
});

app.use((err, req, res, next)=>{
  if(err instanceof ReferenceError){
    err.statusCode = 401
    err.message = "Reference Error! Bananas!!"
    next(err);
  }
  else{
    next(err);
  }
})

// Catch-all error-handling middleware
app.use((err, req, res, next) => {
  console.log(err);
  // if err.statusCode property has a code, use that, otherwise default to 500;
  const statusCode = err.statusCode || 500;
  res.status(statusCode);

  // if err.message property exists use that, otherwise default to 'Something went wrong'
  res.json({
    message: err.message || 'Something went wrong',
    statusCode
  });
});

const port = 5000;
app.listen(port, () => console.log('Server is listening on port', port));