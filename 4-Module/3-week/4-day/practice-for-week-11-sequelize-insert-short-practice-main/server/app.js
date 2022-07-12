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
    let puppies = await Puppy.findAll()
    res.json(puppies)
});


// STEP 3
// Capture the name, age_yrs, breed, weight_lbs, and microchipped attributes
// from the body of the request.
// Use these values to create a new Puppy in the database.
// Respond to the request by sending a success message
app.post('/puppies', async (req, res, next) => {
    // const {name, age_yrs, breed, weight_lbs, microchipped} = req.body
    // let puppy = await Puppy.create({
    //     name: name, 
    //     age_yrs: age_yrs, 
    //     breed: breed, 
    //     weight_lbs: weight_lbs, 
    //     microchipped: microchipped 
    // })
    let puppy = await Puppy.create(req.body)
    res.json({
        message : `${req.body.name} was added to the database`,
        puppy : puppy
    })
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