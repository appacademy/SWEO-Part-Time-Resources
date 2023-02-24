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

    //!!START
    if (req.query.firstName) {
        query.where.firstName = req.query.firstName;

        // BONUS STEP 7: Change exact name matches to use LIKE for Musicians and
        // Bands
        query.where.firstName = { [Op.like]: `%${req.query.firstName}%`}
    }
    //!!END
    
    // Add keys to the WHERE clause to match the lastName param, if it exists.
    // End result: { where: { lastName: req.query.lastName } }
    
    //!!START
    if (req.query.lastName) {
        query.where.lastName = req.query.lastName;

        // BONUS STEP 7: Change exact name matches to use LIKE for Musicians and
        // Bands
        query.where.lastName = { [Op.like]: `%${req.query.lastName}%`}
    }
    //!!END


    // STEP 2: WHERE clauses on the associated Band model
    // ?bandName=XX
    // Add an object to the `include` array to include the Band model where the 
    // name matches the bandName param, if it exists.
    // End result: { include: [{ model: Band, where: { name: req.query.bandName } }] }

    //!!START
    if (req.query.bandName) {
        // BONUS STEP 5: Specify attributes to be returned
        // ?bandAttributes[]=XX&bandAttributes[]=YY
        // If keyword 'all' is used, do not specify any specific attributes
        // If keyword 'none' is used, do not include any Band attributes
        // If any other attributes are provided, only include those values
        const { bandFields } = req.query;
        let includedAttributes;
        if (!bandFields || bandFields.includes('all')){
            includedAttributes = {};
        } else if ( bandAttributes.includes('none') ) {
            includedAttributes = { attributes: [] };
        } else {
            includedAttributes = { attributes: bandFields }
        }

        // STEP 2
        query.include.push({
            model: Band,
            where: {
                name: req.query.bandName,

                // BONUS STEP 7: Change exact name matches to use LIKE for 
                // Musicians and Bands
                name: { [Op.like]: `%${req.query.bandName}%`}
            },
            // BONUS STEP 5: Specify attributes to be returned
            ...includedAttributes
        })
    }
    //!!END


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

    //!!START
    if (req.query.instrumentTypes) {
        // BONUS STEP 5: Specify attributes to be returned
        // ?instrumentFields[]=XX&instrumentFields[]=YY
        // If keyword 'all' is used, do not specify any specific attributes
        // If keyword 'none' is used, do not include any Instrument attributes
        // If any other attributes are provided, only include those values
        const { instrumentFields } = req.query;
        let includedAttributes;
        if (!instrumentFields || instrumentFields.includes('all')){
            includedAttributes = {};
        } else if ( instrumentFields.includes('none') ) {
            includedAttributes = { attributes: [] };
        } else {
            includedAttributes = { attributes: instrumentFields }
        }

        // STEP 3
        query.include.push({
            model: Instrument,
            where: {
                type: req.query.instrumentTypes
            },
            // Do not include attributes from the MusicianInstruments join table
            through: { attributes: [] },
            // BONUS STEP 5: Specify attributes to be returned
            ...includedAttributes
        })
    }
    //!!END


    // BONUS STEP 4: Specify Musician attributes to be returned
    // ?&musicianFields[]=XX&musicianFields[]=YY
    // Add a key to the query object that will limit the Musician attributes 
    // returned to those specified by the query param musicianFields, if it 
    // exists
    // If keyword 'all' is used, do not specify any specific attributes
    // If keyword 'none' is used, do not include any Musician attributes
    // If any other attributes are provided, only include those values

    //!!START
    const { musicianFields } = req.query;
    let includedAttributes;
    if (!musicianFields || musicianFields.includes('all')){
        includedAttributes = {};
    } else if ( musicianFields.includes('none') ) {
        includedAttributes = { attributes: [] };
    } else {
        includedAttributes = { attributes: musicianFields }
    }
    query = { ...query, ...includedAttributes };
    //!!END


    //!!ADD
    // // BONUS STEP 5: Specify attributes to be returned
    // // These additions should be included in your previously implemented 
    // // associations, STEPS 2 and 3 above.
    // // ?bandFields[]=XX&bandFields[]=YY
    // // ?instrumentFields[]=XX&instrumentFields[]=YY
    // // If keyword 'all' is used, do not specify specific attributes
    // // If keyword 'none' is used, do not include any Instrument attributes
    // // If any other attributes are provided, only include those values
    // // End result for the Band model:
    // /* {
            // include: [{
                // model: Band,
                // where: { name: req.query.bandName },

                // // New to this step:
                // attributes: req.query.bandFields
            // }]
        // }
    // */
    //!!END_ADD


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

    //!!START
    if (req.query.order) {
        const orderPairs = req.query.order;
        // For each potential pair, split on the `,` and return the array
        // [['firstName', 'ASC'], ['lastName'], ['createdAt', 'DESC']]
        // This format matches what Sequelize expects for the `order` option 
        query.order = orderPairs.map(pair => pair.split(','))
    } else {
        // Default values when no order param is given
        query.order = [['lastName'], ['firstName']];
    }
    //!!END


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
