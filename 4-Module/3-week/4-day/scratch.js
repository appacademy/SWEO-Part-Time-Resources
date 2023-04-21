const express = require('express');
require('dotenv').config();

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Server is Live');
});

//*SELECT

//*INSERT

//*UPDATE

//*DELETE


const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}...`));