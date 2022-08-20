require('express-async-errors');
require('dotenv').config();
const express = require('express');
const app = express();

const { User } = require('./db/models');

// const { Op } = require('sequelize'); // optional

app.get('/', async (req, res, next) => {

})

app.use(express.json());

const port = 5000;
app.listen(port, () => console.log('Listening on port', port));
