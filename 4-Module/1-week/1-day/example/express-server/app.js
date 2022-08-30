const express = require('express');

const app = express();
// console.log("-------app-------", app);

app.get('/', (req, res) => {
  // res.send('Wow this is quite express HTML');
  res.json('Server app received a GET request');
});

app.post('/', (req, res) => {
  res.send('Server app received a POST request')
})

app.put('/', (req, res) => {
  res.send('Server app received a PUT request')
})

app.delete('/', (req, res) => {
  res.send('Server app received a DELETE request at ')
})

// ---------------GET method with a different url path
app.get('/users', (req, res) => {
  res.json(["Chris", "Aman"]);
});

app.post('/users', (req, res) => {
  // logic to create a user...
  res.json("created the user");
});

const port = 5002;

app.listen(port, () => console.log('Heyyooooooo', port));
