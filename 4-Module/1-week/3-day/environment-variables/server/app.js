const express = require('express');
const app = express();
// const app = require('express')()

require('dotenv').config()
// const dotenv = require('dotenv');
// dotenv.config()

app.get('/', (req, res) => {
  res.send(process.env.SECRET_MESSAGE);
});

const port = process.env.PORT;
app.listen(port, () => console.log('Server is listening on port', port));
