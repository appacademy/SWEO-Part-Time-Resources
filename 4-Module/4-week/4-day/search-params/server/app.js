// Instantiate Express and the application - DO NOT MODIFY
const express = require('express');
const app = express();

// Import environment variables in order to connect to database - DO NOT MODIFY
require('dotenv').config();
require('express-async-errors');

// Import the models used in these routes - DO NOT MODIFY
const { Band, Musician, Instrument } = require('./db/models');
const { Op } = require('sequelize');

// Express using json - DO NOT MODIFY
app.use(express.json());


app.get('/musicians', async (req, res, next) => {
    // Establish base query object to be built up
    let query = {
        where: {},
        include: []
    };

    const {
        firstName,
        lastName,
        bandName,
        instrumentTypes,
        musicianFieelds,
        order
    } = req.query

    // Pagination Options
    // ?page=XX&size=YY
    // A limit and offset are calculated and added in as keys to the query
    // object.
    const page = req.query.page === undefined ? 1 : parseInt(req.query.page);
    const size = req.query.size === undefined ? 5 : parseInt(req.query.size);
    if (page >= 1 && size >= 1) {
        query.limit = size;
        query.offset = size * (page - 1);
    }
    

    // STEP 1: WHERE clauses on the Musician model
    // ?firstName=XX&lastName=YY
    // Add keys to the WHERE clause to match the firstName param, if it exists.
    // End result: { where: { firstName: req.query.firstName } }

    // Your code here
    if(firstName){
        query.where.firstname = firstName
    }

    // Add keys to the WHERE clause to match the lastName param, if it exists.
    // End result: { where: { lastName: req.query.lastName } }
    
    // Your code here
    if(lastName){
        query.where.lastName = lastName
    }


    // STEP 2: WHERE clauses on the associated Band model
    // ?bandName=XX
    // Add an object to the `include` array to include the Band model where the 
    // name matches the bandName param, if it exists.
    // End result: { include: [{ model: Band, where: { name: req.query.bandName } }] }

    // Your code here
    if(bandName){
        query.include.push(
            {
                model: Band,
                where: {
                    name: bandName
                }
            }
        )
    }


    // STEP 3: WHERE Clauses on the associated Instrument model 
    // ?instrumentTypes[]=XX&instrumentTypes[]=YY
    // Add an object to the `include` array to include the Instrument model 
    // where the type matches any value in the instrumentTypes param array, if it 
    // exists. Do not include any attributes from the join table 
    // MusicianInstruments.
    // End result: 
    /* { 
        include: [{ 
            model: Instrument, 
            where: { type: req.query.instrumentTypes }, 
            through: { attributes: [] } // Omits the join table attributes
        }] } 
    */

    // Your code here
    if(instrumentTypes && instrumentTypes.length >= 1){
        query.include.push({
            model: Instrument,
            where: {
                type: instrumentTypes
            },
            through: {attributes: []}
        })
    }


    // BONUS STEP 4: Specify Musician attributes to be returned
    // ?&musicianFields[]=XX&musicianFields[]=YY
    // Add a key to the query object that will limit the Musician attributes 
    // returned to those specified by the query param musicianFields, if it 
    // exists
    // If keyword 'all' is used, do not specify any specific attributes
    // If keyword 'none' is used, do not include any Musician attributes
    // If any other attributes are provided, only include those values

    // Your code here


    // BONUS STEP 5: Specify attributes to be returned
    // These additions should be included in your previously implemented
    // associations, STEPS 2 and 3 above.
    // ?bandFields[]=XX&bandFields[]=YY
    // ?instrumentFields[]=XX&instrumentFields[]=YY
    // If keyword 'all' is used, do not specify specific attributes
    // If keyword 'none' is used, do not include any Instrument attributes
    // If any other attributes are provided, only include those values
    // End result for the Band model:
    /* {
            include: [{
                model: Band,
                where: { name: req.query.bandName },

                // New to this step:
                attributes: req.query.bandFields
            }]
        }
    */


    // BONUS STEP 6: Order Options
    // ?order[]=XX,xx&order[]=YY&order[]=ZZ,zz
    // Add a key to the query object that will order the results by the Musician 
    // attributes specified by the order query param, if it exists.
    // If the order param does not exist, a default order of lastName, then 
    // firstName should be used.
    // The order param takes the form of an array of strings.
    // The strings may include a `,` to separate the attribute from an 
    // `ASC`/`DESC` indication. If the indicator is not present, it is assumed a 
    // default `ASC` order and does not need to be included.
    // Example: ?order[]=firstName,asc&order[]=lastName&order[]=createdAt,desc
    // End result: { order: [['firstName', 'asc'], ['lastName'], ['createdAt', 'desc']] }

    // Your code here


    // Perform compiled query
    const musicians = await Musician.findAndCountAll(query);

    res.json(musicians)
});


// Root route - DO NOT MODIFY
app.get('/', (req, res) => {
    res.json({
        message: "API server is running"
    });
});

// Set port and listen for incoming requests - DO NOT MODIFY
const port = 5000;
app.listen(port, () => console.log('Server is listening on port', port));