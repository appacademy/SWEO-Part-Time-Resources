const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Wow this is quite express');
});

const port = 5000;

app.listen(port, () => console.log('Heyyooooooo', port));
