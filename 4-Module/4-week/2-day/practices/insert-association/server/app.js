// Instantiate Express and the application - DO NOT MODIFY
const express = require('express');
const app = express();

// Import environment variables in order to connect to database - DO NOT MODIFY
require('dotenv').config();
require('express-async-errors');

// Import the models used in these routes - DO NOT MODIFY
const { Band, Musician, Instrument } = require('./db/models');

// Express using json - DO NOT MODIFY
app.use(express.json());


// STEP 1: Creating from an associated model (One-to-Many)
app.post('/bands/:bandId/musicians', async (req, res, next) => {
    //add a musician to the band given the id of a band and the musician data

    // 1) go and get the data that we need from the req 
    const id = req.params.bandId;
    const {firstName, lastName} = req.body;
    console.log("iddddd-------", id);
    console.log("firstname lastname-------", firstName);

    // 2) grab the instance of the band that we want to add the newly registered band member
    const band = await Band.findByPk(id);
    const musicianAdded = await band.createMusician({
        firstName:firstName, 
        lastName, //lastName:lastName
    })
    return res.json({
        "message": `Created new musician for band ${band.name}.`,
        musician: musicianAdded
    })

})

// STEP 2: Connecting two existing records (Many-to-Many)
app.post('/musicians/:musicianId/instruments', async (req, res, next) => {
    // req data
    const musicianId = req.params.musicianId
    const { instrumentIds } = req.body;
    // find musician w/ musicianId
    const musician = await Musician.findByPk(musicianId);
    
    await musician.addInstrument(instrumentIds);

    res.json({
        message: `Associated ${musician.firstName} with instruments ${instrumentIds}.`
    });
})


// Get the details of one band and associated musicians - DO NOT MODIFY
app.get('/bands/:bandId', async (req, res, next) => {
    const payload = await Band.findByPk(req.params.bandId, {
        include: { model: Musician },
        order: [[Musician, 'firstName']]
    });
    res.json(payload);
});

// Get the details all bands and associated musicians - DO NOT MODIFY
app.get('/bands', async (req, res, next) => {
    const payload = await Band.findAll({
        include: {model: Musician}, 
        order: [['name'], [Musician, 'firstName']]
    });
    res.json(payload);
});

// Get the details of one musician and associated instruments - DO NOT MODIFY
app.get('/musicians/:musicianId', async (req, res, next) => {
    const payload = await Musician.findByPk(req.params.musicianId, {
        include: {model: Instrument},
        order: [[Instrument, 'type']]
    });
    res.json(payload);
});

// Get the details all musicians and associated instruments - DO NOT MODIFY
app.get('/musicians', async (req, res, next) => {
    const payload = await Musician.findAll({
        include: { model: Instrument }, 
        order: [['firstName'], ['lastName'], [Instrument, 'type']]
    });
    res.json(payload);
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