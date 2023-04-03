// unopinionated and minimalistic

const express = require('express');
const app = express();

app.use(express.json());

let paths = ['/','/home','/hello'];
let data = {
  users: []
};

app.get(paths, (req, res) => {
  res.send(data.users);
});
app.post('/users', (req, res) => {
  console.log(req.query.name, req.query.age);
  let newUser = {
    name: req.body.name,
    age: req.body.age
  }
  data.users.push(newUser);
  res.status(200);
  // res.send(body)
  res.json(newUser);
})
app.post('/users/:userId', (req, res) => {
  console.log(req.params);
})
// app.post
// app.put
// app.patch
// app.delete

const port = 5000;
app.listen(port, () => console.log(`Listening on port ${port}...`));