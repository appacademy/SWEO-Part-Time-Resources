// unopinioniated and minimalistic
// npm init -y
// npm install express@^4.0.0
// npm install -D nodemon

const express = require('express');
const app = express();

app.use( express.json() );

const paths = ['/', '/home', '/bigCityDreams'];

app.get(paths, (req, res) => {
  res.send('Hello World!');
});
app.post('/users/:id', (req, res) => {
  // req.query.whatever
  console.log(req.params.id);
  res.status(200);
  // res.send('hello')
  let body = {
    name: 'Jason',
    pets: ['Toby']
  }
  res.json(body)
});
// app.put app.patch app.delete

const port = 5000;
app.listen(port, () => console.log(`Listening on port ${port}...`));