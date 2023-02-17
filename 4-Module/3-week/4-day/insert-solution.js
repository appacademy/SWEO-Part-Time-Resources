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
    const allPuppies = await Puppy.findAll({order: [['name', 'ASC']]});

    res.json(allPuppies);
});


// STEP 3
// Capture the name, age_yrs, breed, weight_lbs, and microchipped attributes
// from the body of the request.
// Use these values to create a new Puppy in the database.
// Respond to the request by sending a success message
app.post('/puppies', async (req, res, next) => {
    // Your code here
    const {name, age_yrs, breed, weight_lbs, microchipped} = req.body;
    const newPuppy = await Puppy.create({
        name, age_yrs, breed, weight_lbs, microchipped
    });
    res.json({
        message: `Successfully made new puppy ${newPuppy.name}`,
        data: newPuppy
    });
})


// Root route - DO NOT MODIFY
app.get('/', (req, res) => {
    res.json({
        message: "API server is running"
    });
});

// Set port and listen for incoming requests - DO NOT MODIFY
const port = 5000;
app.listen(port, () => console.log('Server is listening on port', port));

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//test.js
const { removeTestDB, runMigrations, runSeeders } = require('./testUtils');

// Import environment variables in order to connect to database - DO NOT MODIFY
require('dotenv').config();

const { Puppy } = require('./db/models');


(async () => {

  // Delete database if it exists and recreate by running migrations and seeders
  await removeTestDB();
  await runMigrations();
  await runSeeders();


  // STEP 1
  // Using `build` and `save`, create a record for the following Puppy:
  // name: Trudy
  // age_yrs: 2
  // weight_lbs: 38
  // breed: Brittany Spaniel
  // microchipped: false
  try {
    // Your code here
    const trudy = Puppy.build({
      name: 'Trudy',
      age_yrs: 2,
      weight_lbs: 38,
      breed: 'Brittany Spaniel',
      microchipped: false
    });
    await trudy.save();
  } catch (err) {
    console.error(err)
  }


  // STEP 2
  // Using `create`, create a record for the following Puppy:
  // name: Beans
  // age_yrs: 1.6
  // weight_lbs: 42
  // breed: Bulldog
  // microchipped: true
  try {
    // Your code here
    await Puppy.create({
      name: 'Beans',
      age_yrs: 1.6,
      weight_lbs: 42,
      breed: 'Bulldog',
      microchipped: true
    });
  } catch (err) {
    console.error(err)
  }

})();

