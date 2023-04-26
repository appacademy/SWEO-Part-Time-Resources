const express = require('express');
require('dotenv').config();
const { User, Dog } = require('./db/models');


const app = express();
app.use(express.json());

app.get('/dogs', async (req, res) => {
  const dogs = await Dog.findAll({
    order: [['name', 'DESC'], ['microchipped', 'ASC']]
  });
});

const port = process.env.PORT || 5000;