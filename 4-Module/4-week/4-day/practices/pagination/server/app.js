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
    const queryObj = req.query;
    console.log("queryobbjj-----", queryObj);
    let {page, size} = queryObj;

    // attempt to change page and size to a number
    page = Number(page); //Number("bobby") --> NaN
    size = Number(size);
    console.log(page, size)

    // if page and size are anything BUT NUMBERS, then set the default value to be page = 1, size =  5
    if(Number.isNaN(page)) page = 1;
    if(Number.isNaN(size)) size = 5;
    console.log(page, size)

    // now calculate the limit and the offset based on our page and size results
    let limit;
    let offset;

    //if page is 0, we want to get all the records not any limit or offset
    if(page === 0){
        limit = null;
        offset = null;
    }
    else{
        limit = size;
        offset = size * (page-1)
    }

    
    
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
        // add limit key-value to query
        limit: limit,
        offset: offset
        // Your code here
    });

    res.json(musicians)
});


// BONUS: Pagination with bands
app.get('/bands', async (req, res, next) => {

    // // Parse the query params, set default values, and create appropriate 
    // // offset and limit values if necessary.

    // Parse the page and size from the request's query parameters
    let { page, size } = req.query;

    // Set default values for the page and size if not provided
    page = (page === undefined) ? 1 : parseInt(page);
    size = (size === undefined) ? 3 : parseInt(size);
    
    // If both the page and size have positive values, create corresponding
    // limit and offset values. If either value is 0 (or negative), no limit or 
    // offset should be used.
    const pagination = {};
    if (page >= 1 && size >= 1) {
        pagination.limit = size;
        pagination.offset = size * (page - 1);
    }

    
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

        // // add limit key-value to query
        // // add offset key-value to query
        // Use the spread operator to add any key/value pairs that exist in the 
        // pagination object to the query.
        ...pagination

    });

    res.json(bands)
});


// BONUS: Pagination with instruments

// app.get('/instruments', async (req, res, next) => {
// Utilize the createPaginationObjectMiddleware to create a middleware function 
// with a defaultSize of 4 and standard defaultPage of 1.
// Use the req.pagination created by this middleware in the query instead of 
// having to construct pagination objects within the route handler.
app.get('/instruments', createPaginationObjectMiddleware({ defaultSize: 4 }), async (req, res, next) => {

    // // Parse the query params, set default values, and create appropriate 
    // // offset and limit values if necessary.
    // // Your code here

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

        // // add limit key-value to query
        // // add offset key-value to query
        // Use the spread operator to add any key/value pairs that exist in the 
        // pagination object to the query.
        ...req.pagination
    });

    res.json(instruments)
});

// ADVANCED BONUS: Reduce Pagination Repetition
function createPaginationObjectMiddleware({ defaultSize = 5, defaultPage = 1 }) {
    return function createPaginationObject(req, res, next) {
        let { page, size } = req.query;
        page = page === undefined ? defaultPage : parseInt(page);
        size = size === undefined ? defaultSize : parseInt(size);
        const pagination = {};
        if (page >= 1 && size >= 1) {
            pagination.limit = size;
            pagination.offset = size * (page - 1);
        }
        req.pagination = pagination;
        next();
    }
}


// Root route - DO NOT MODIFY
app.get('/', (req, res) => {
    res.json({
        message: "API server is running"
    });
});

// Set port and listen for incoming requests - DO NOT MODIFY
const port = 5000;
app.listen(port, () => console.log('Server is listening on port', port));