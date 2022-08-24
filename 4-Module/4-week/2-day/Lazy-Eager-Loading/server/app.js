// Instantiate Express and the application - DO NOT MODIFY
const express = require('express');
const app = express();

// Import environment variables in order to connect to database - DO NOT MODIFY
require('dotenv').config();

// Import the models used in these routes - DO NOT MODIFY
const { Band, Musician } = require('./db/models');

// Express using json - DO NOT MODIFY
app.use(express.json());

// STEP 1: Example of lazy loading
app.get('/bands-lazy/:id', async (req, res, next) => {
  const band = await Band.findByPk(req.params.id);
  const bandMembers = await band.getMusicians({ order: [['firstName']] });
  const payload = {
    id: band.id,
    name: band.name,
    createdAt: band.createdAt,
    updatedAt: band.updatedAt,
    Musicians: bandMembers,
  };

  // // conditional stuff
  // const moreData = {
  //   flavor: 'tasty',
  // };

  // // even more conditionals
  // const evenMoreData = {
  //   double: '2 times',
  // };

  // const finalPayload = { ...payload, ...moreData, ...evenMoreData };

  // res.json(finalPayload);
  res.json(payload);
});

// STEP 1: Example of eager loading
app.get('/bands-eager/:id', async (req, res, next) => {
  const payload = await Band.findByPk(req.params.id, {
    include: { model: Musician },
    order: [[Musician, 'firstName']],
  });
  res.json(payload);
});

// STEP 2: Lazy loading all bands
app.get('/bands-lazy', async (req, res, next) => {
  const allBands = await Band.findAll({ order: [['name']] });
  const payload = [];
  for (let i = 0; i < allBands.length; i++) {
    const band = allBands[i];
    // const bandMembers = await Musician.findAll({ where: { id: band.id } });
    const bandMembers = await band.getMusicians({ order: [['firstName']] });

    const bandData = {
      id: band.id,
      name: band.name,
      createdAt: band.createdAt,
      updatedAt: band.updatedAt,
      Musicians: bandMembers,
    };
    payload.push(bandData);
  }
  res.json(payload);
});

// STEP 3: Eager loading all bands
app.get('/bands-eager', async (req, res, next) => {
  const payload = await Band.findAll({
    include: Musician,
    // include: { model: Musician },

    order: [['name'], [Musician, 'firstName']],
  });
  res.json(payload);
});

// Root route - DO NOT MODIFY
app.get('/', (req, res) => {
  res.json({
    message: 'API server is running',
  });
});

// Set port and listen for incoming requests - DO NOT MODIFY
const port = 5000;
app.listen(port, () => console.log('Server is listening on port', port));
