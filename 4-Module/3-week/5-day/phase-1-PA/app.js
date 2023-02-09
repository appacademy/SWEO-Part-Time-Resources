require('express-async-errors');
require('dotenv').config();
const express = require('express');
const app = express();

const port = 8001;
app.listen(port, () => console.log('Server-1 is listening on port', port)); 