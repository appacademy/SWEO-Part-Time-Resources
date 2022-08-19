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
  // const body = req.body;

  const id = req.params.puppyId;
  // const { puppyId } = req.params;

  const pupdate = await Puppy.findOne({ where: { id } });
  // const pupdate = await Puppy.findByPk(id);

  if (age_yrs !== undefined) pupdate.age_yrs = age_yrs;
  if (weight_lbs !== undefined) pupdate.weight_lbs = weight_lbs;
  if (microchipped !== undefined) pupdate.microchipped = microchipped;

  // ['age_yrs', 'weight_lbs', 'microchipped'].forEach((el) => {
  //   if (body[el] !== undefined) pupdate[el] = body[el];
  // });

  await pupdate.save();

  const checkPup = await Puppy.findByPk(id);

  res.json({
    checkPup,
  });
});

// STEP 2: Delete a puppy by id
app.delete('/puppies/:puppyId', async (req, res, next) => {
  // const id = req.params.puppyId;

  const deathPuppy = await Puppy.findByPk(req.params.puppyId);
  // const deathPuppy = await Puppy.findByPk(id);

  await deathPuppy.destroy();

  res.json({
    msg: 'You killed that poor puppy you sick person',
    death: deathPuppy,
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
