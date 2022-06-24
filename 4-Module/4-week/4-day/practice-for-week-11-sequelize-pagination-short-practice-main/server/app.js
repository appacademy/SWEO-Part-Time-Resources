// Instantiate Express and the application - DO NOT MODIFY
const express = require('express');
const app = express();

// Import environment variables in order to connect to database - DO NOT MODIFY
require('dotenv').config();
require('express-async-errors');

// Import the models used in these routes - DO NOT MODIFY
const { Musician, Band, Instrument } = require('./db/models');

// Express using json - DO NOT MODIFY
app.use(express.json());


app.get('/musicians', async (req, res, next) => {

    // Parse the query params, set default values, and create appropriate
    // offset and limit values if necessary.
    // Your code here
    let size = parseInt(req.query.size, 10)
    let page = parseInt(req.query.page, 10)

    if (size === 0 || page === 0) {
        return res.json(await Musician.findAll({
            attributes: ['id', 'firstName', 'lastName'],
            include: [{
                model: Band,
                attributes: ['id', 'name']
            }],
        }))
    }
    if (Number.isNaN(size)) size = 5
    if (Number.isNaN(page)) page = 1

    // Query for all musicians
    // Include attributes for `id`, `firstName`, and `lastName`
    // Include associated bands and their `id` and `name`
    // Order by musician `lastName` then `firstName`
    const musicians = await Musician.findAll({
        order: [['lastName'], ['firstName']],
        attributes: ['id', 'firstName', 'lastName'],
        include: [{
            model: Band,
            attributes: ['id', 'name']
        }],
        limit: size,
        offset: size * (page - 1),
        order: [
            ['id']
        ]
        // add limit key-value to query
        // add offset key-value to query
        // Your code here
    });

    res.json(musicians)
});


// BONUS: Pagination with bands
app.get('/bands', async (req, res, next) => {
    // Parse the query params, set default values, and create appropriate
    // offset and limit values if necessary.
    // Your code here

    // Query for all bands
    // Include attributes for `id` and `name`
    // Include associated musicians and their `id`, `firstName`, and `lastName`
    // Order by band `name` then musician `lastName`
    const bands = await Band.findAll({
        order: [['name'], [Musician, 'lastName']],
        attributes: ['id', 'name'],
        include: [{
            model: Musician,
            attributes: ['id', 'firstName', 'lastName']
        }],
        // add limit key-value to query
        // add offset key-value to query
        // Your code here
    });

    res.json(bands)
});


// BONUS: Pagination with instruments
app.get('/instruments', async (req, res, next) => {
    // Parse the query params, set default values, and create appropriate
    // offset and limit values if necessary.
    // Your code here

    // Query for all instruments
    // Include attributes for `id` and `type`
    // Include associated musicians and their `id`, `firstName` and `lastName`
    // Omit the MusicianInstruments join table attributes from the results
    // Include each musician's associated band and their `id` and `name`
    // Order by instrument `type`, then band `name`, then musician `lastName`
    const instruments = await Instrument.findAll({
        order: [['type'], [Musician, Band, 'name'], [Musician, 'lastName']],
        attributes: ['id', 'type'],
        include: [{
            model: Musician,
            attributes: ['id', 'firstName', 'lastName'],
            // Omit the join table (MusicianInstruments) attributes
            through: { attributes: [] },
            include: [{
                model: Band,
                attributes: ['id', 'name']
            }]
        }],
        // add limit key-value to query
        // add offset key-value to query
        // Your code here
    });

    res.json(instruments)
});

// ADVANCED BONUS: Reduce Pagination Repetition
// Your code here


// Root route - DO NOT MODIFY
app.get('/', (req, res) => {
    res.json({
        message: "API server is running"
    });
});

// Set port and listen for incoming requests - DO NOT MODIFY
const port = 5000;
app.listen(port, () => console.log('Server is listening on port', port));