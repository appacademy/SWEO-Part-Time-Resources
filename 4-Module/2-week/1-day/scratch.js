const express = require('express');
const app = express();

require('dotenv').config();

app.use(express.json());

//ROUTES
app.get('/', (req, res) => {
  res.send('SERVER IS LIVE');
});
app.get('/dogs', (req, res, next) => {
  res.send('lets gets some dogs');
})
app.get('/dogs/:dogId', (req, res, next) => {
  res.send('lets get a singular dog');
})

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`LISTENING ON PORT ${port}...`));