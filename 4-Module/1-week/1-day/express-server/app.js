const express = require('express');

const app = express();

app.get('/', (req, res) => {
  // res.send('WOw how express');
  res.json({ msg: "Look at me I'm so cool" });
});

const port = 5000;

app.listen(port, () => console.log('Express on: ', port));
