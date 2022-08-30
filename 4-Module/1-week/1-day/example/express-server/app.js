const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.json('Wow this is quite express');
});

app.post('/', (req, res) => {
  res.json('Got a POST request')
})

app.put('/user', (req, res) => {
  res.json('Got a PUT request at /user')
})


const port = 5000;

app.listen(port, () => console.log('Heyyooooooo', port));
