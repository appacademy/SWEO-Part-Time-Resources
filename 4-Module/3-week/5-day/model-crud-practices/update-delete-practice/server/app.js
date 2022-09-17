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
    // 1) get data from request (puppyId, the request body)
    const puppyId = req.params.puppyId;
    const bodyDataObj = req.body;
    // 2) find the puppy
    const puppyMatch = await Puppy.findOne({
        where:{
            id: puppyId
        }
    })
    // console.log("puppyMatch:", puppyMatch);
    if(puppyMatch){
        puppyMatch.set({
            age_yrs: bodyDataObj.age_yrs,
            weight_lbs: bodyDataObj.weight_lbs,
            microchipped: bodyDataObj.microchipped
        })
        await puppyMatch.save();
        return res.json({
            message: "successfully updated",
            puppy: puppyMatch
        })
    }
    else{
        return res.json({
            message: "Was not able to update puppy",
        })
    }
})


// STEP 2: Delete a puppy by id
app.delete('/puppies/:puppyId', async (req, res, next) => {
    const puppyId = req.params.puppyId;
    // find the record
    const puppyMatch = await Puppy.findOne({
        where:{
            id: puppyId
        }
    })
     //if the record exists, remove it
    if(puppyMatch){
        await puppyMatch.destroy();
        return res.json({
            message: `${puppyMatch.name} puppy has been removed successfully`
        })
    }
    else{
        return res.json({
            message: "was not able to delete record"
        })
    }

   
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