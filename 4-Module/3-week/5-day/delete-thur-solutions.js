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


// STEP 1: Update a puppy by id
app.put('/puppies/:puppyId', async (req, res, next) => {
    //!!START
    // Find puppy by id
    const updatedPuppy = await Puppy.findByPk(req.params.puppyId);
    // Extract permitted attributes from req.body
    const { age_yrs, weight_lbs, microchipped } = req.body;

    // Only assign values if they are defined on the request body
    // Explicit `undefined` check is important when dealing with booleans
    if (age_yrs !== undefined) {
        updatedPuppy.age_yrs = age_yrs;
    }
    if (weight_lbs !== undefined) {
        updatedPuppy.weight_lbs = weight_lbs;
    }
    if (microchipped !== undefined) {
        updatedPuppy.microchipped = microchipped;
    }

    await updatedPuppy.save();
    res.json({
        message: `Successfully updated puppy with id ${req.params.puppyId}.`,
        puppy: updatedPuppy
    });
    //!!END
})


// STEP 2: Delete a puppy by id
app.delete('/puppies/:puppyId', async (req, res, next) => {
    //!!START
    const deletedPuppy = await Puppy.findByPk(req.params.puppyId);
    await deletedPuppy.destroy();
    res.json({
        message: `Successfully deleted puppy with id ${req.params.puppyId}.`,
        puppy: deletedPuppy
    });
    //!!END
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
