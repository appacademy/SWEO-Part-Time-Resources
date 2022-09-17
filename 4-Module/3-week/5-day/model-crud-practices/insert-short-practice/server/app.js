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
    // follow data: req.body
    console.log("req.body for puppies:", req.body);
    // destructure the properties from req.body
    const {name, age_yrs, breed, weight_lbs, microchipped} = req.body;

    //create new instance with the body data
    const createdPuppy = await Puppy.create({
        name,
        age_yrs,
        breed,
        weight_lbs,
        microchipped
    });
    console.log("careatedPuppy:", createdPuppy)
    if(createdPuppy){
        return res.json(createdPuppy);
    }
    return res.json("Cannot create puppy");
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