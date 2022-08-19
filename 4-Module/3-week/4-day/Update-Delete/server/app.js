// Instantiate Express and the application - DO NOT MODIFY
const express = require('express');
const app = express();

// Error handling, env variables, and json middleware - DO NOT MODIFY
require('express-async-errors');
require('dotenv').config();
app.use(express.json());

// Import the models used in these routes - DO NOT MODIFY
const { Puppy } = require('./db/models');

// Index of all puppies - DO NOT MODIFY
app.get('/puppies', async (req, res, next) => {
  const allPuppies = await Puppy.findAll({ order: [['name', 'ASC']] });

  res.json(allPuppies);
});

// STEP 1: Update a puppy by id
app.put('/puppies/:puppyId', async (req, res, next) => {
  const { age_yrs, weight_lbs, microchipped } = req.body;

  // const id = req.params.puppyId;
  // const pupdate = await Puppy.findOne({ where: { id } });
  const pupdate = await Puppy.findByPk(req.params.puppyId);

  if (age_yrs !== undefined) {
    pupdate.age_yrs = age_yrs;
  }
  if (weight_lbs !== undefined) {
    pupdate.weight_lbs = weight_lbs;
  }
  if (microchipped !== undefined) {
    pupdate.microchipped = microchipped;
  }

  await pupdate.save();

  res.json({
    message: 'Pupdate was successful!',
    puppy: pupdate,
  });
});

//! // STEP 1: Update a puppy by id more programmatically
// app.put('/puppies/:puppyId', async (req, res, next) => {
//   const id = req.params.puppyId;
//   const body = req.body;
//   const pupdate = await Puppy.findOne({ where: { id } });

//   const permittedAttributes = ['age_yrs', 'weight_lbs', 'microchipped'];

//   permittedAttributes.forEach((el) => {
//     if (body[el] !== undefined) pupdate[el] = body[el];
//   });

//   await pupdate.save();

//   res.json({
//     message: 'Pupdate was successful!',
//     puppy: pupdate,
//   });
// });

// STEP 2: Delete a puppy by id
app.delete('/puppies/:puppyId', async (req, res, next) => {
  const pupdate = await Puppy.findByPk(req.params.puppyId);

  await pupdate.destroy();

  res.json({
    message: `You murdered poor ${pupdate.name}`,
    puppy: pupdate,
  });
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
