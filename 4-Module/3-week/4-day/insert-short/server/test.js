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
    const newDog = Puppy.build({
      name: 'Trudy',
      age_yrs: 2,
      weight_lbs: 38,
      breed: 'Britttany Spaniel',
      microchipped: true
    })
    await newDog.save()
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
    await Puppy.create({
      name: 'Beans',
      age_yrs: 1.6,
      weight_lbs: 42,
      breed: 'Bulldog',
      microchipped: true
    })
    // Your code here
  } catch (err) {
    console.error(err)
  }

})();