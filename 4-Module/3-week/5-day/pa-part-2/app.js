require('express-async-errors');
require('dotenv').config();
const express = require('express');
const app = express();

const port = 8002;
app.listen(port, () => console.log('Server-2 is listening on port', port));