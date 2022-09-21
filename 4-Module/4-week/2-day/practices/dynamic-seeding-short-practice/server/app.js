// Instantiate Express and the application - DO NOT MODIFY
const express = require('express');
const app = express();

// Import environment variables in order to connect to database - DO NOT MODIFY
require('dotenv').config();

// Import the models used in these routes - DO NOT MODIFY
const { Band, Musician, Instrument } = require('./db/models');

// Express using json - DO NOT MODIFY
app.use(express.json());

// Singular band and associated musicians - DO NOT MODIFY
app.get('/bands/:id', async (req, res, next) => {
    const payload = await Band.findByPk(req.params.id, {
        include: {model: Musician},
        order: [[Musician, 'firstName']]
    });
    res.json(payload);
});

// All bands and associated musicians - DO NOT MODIFY
app.get('/bands', async (req, res, next) => {
    const payload = await Band.findAll({
        include: {model: Musician}, 
        order: [['name'], [Musician, 'firstName']]
    });
    res.json(payload);
});

// Singular musician and associated instruments - DO NOT MODIFY
app.get('/musicians/:id', async (req, res, next) => {
    const payload = await Musician.findByPk(req.params.id, {
        include: {model: Instrument},
        order: [['firstName'], [Instrument, 'type']]
    });
    res.json(payload);
});

// All musicians and associated instruments - DO NOT MODIFY
app.get('/musicians', async (req, res, next) => {
    const payload = await Musician.findAll({
        include: {model: Instrument}, 
        order: [['firstName'], [Instrument, 'type']]
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