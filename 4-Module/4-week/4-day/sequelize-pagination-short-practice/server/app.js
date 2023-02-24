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
    //!!ADD
    // // Parse the query params, set default values, and create appropriate 
    // // offset and limit values if necessary.
    //!!END_ADD
    //!!START
    // Parse the page and size from the request's query parameters
    let { page, size } = req.query;

    // Set default values for the page and size if not provided
    if (!page) page = 1;
    if (!size) size = 5;

    page = parseInt(page);
    size = parseInt(size);
    
    // If both the page and size have positive values, create corresponding
    // limit and offset values. If either value is 0 (or negative), no limit or 
    // offset should be used.
    const pagination = {};
    if (page >= 1 && size >= 1) {
        pagination.limit = size;
        pagination.offset = size * (page - 1);
    }
    //!!END 
    
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
        //!!ADD
        // // add limit key-value to query
        // // add offset key-value to query
        //!!END_ADD
        //!!START
        // Use the spread operator to add any key/value pairs that exist in the 
        // pagination object to the query.
        ...pagination
        //!!END
    });

    res.json(musicians)
});


// BONUS: Pagination with bands
app.get('/bands', async (req, res, next) => {
    //!!ADD
    // // Parse the query params, set default values, and create appropriate 
    // // offset and limit values if necessary.
    //!!END_ADD
    //!!START
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
    //!!END 
    
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
        //!!ADD
        // // add limit key-value to query
        // // add offset key-value to query
        //!!END_ADD
        //!!START
        // Use the spread operator to add any key/value pairs that exist in the 
        // pagination object to the query.
        ...pagination
        //!!END
    });

    res.json(bands)
});


// BONUS: Pagination with instruments
//!!ADD
// app.get('/instruments', async (req, res, next) => {
//!!END_ADD
//!!START SILENT
// Utilize the createPaginationObjectMiddleware to create a middleware function 
// with a defaultSize of 4 and standard defaultPage of 1.
// Use the req.pagination created by this middleware in the query instead of 
// having to construct pagination objects within the route handler.
app.get('/instruments', createPaginationObjectMiddleware({ defaultSize: 4 }), async (req, res, next) => {
//!!END  
    //!!ADD
    // // Parse the query params, set default values, and create appropriate 
    // // offset and limit values if necessary.
    // // Your code here
    //!!END_ADD
    
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
        //!!ADD
        // // add limit key-value to query
        // // add offset key-value to query
        //!!END_ADD
        //!!START
        // Use the spread operator to add any key/value pairs that exist in the 
        // pagination object to the query.
        ...req.pagination
        //!!END
    });

    res.json(instruments)
});

// ADVANCED BONUS: Reduce Pagination Repetition
//!!START
// Creates a middleware function with specified default values for page and size.
// Can be invoked in any route that implements pagination.
// The higher order function allows for arguments to dictate new defaultSize and 
// defaultPage values for each route handler, returning a customized middleware.
// The middleware returned adds a pagination key to the req object.
// The pagination object has keys for offset and limit.
// Allows the route to spread the created object to implement pagination
// i.e., `...req.pagination` in the Sequelize query.
function createPaginationObjectMiddleware({ defaultSize=5, defaultPage=1 }){
    return function createPaginationObject(req, res, next){
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
//!!END


// Root route - DO NOT MODIFY
app.get('/', (req, res) => {
    res.json({
        message: "API server is running"
    });
});

// Set port and listen for incoming requests - DO NOT MODIFY
const port = 5000;
app.listen(port, () => console.log('Server is listening on port', port));
