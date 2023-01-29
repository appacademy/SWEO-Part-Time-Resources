require('express-async-errors');

// Import environment variables in order to connect to database - DO NOT MODIFY
require('dotenv').config();

// Instantiate Express and the application - DO NOT MODIFY
const express = require('express');
const app = express();

// Express using json - DO NOT MODIFY
app.use(express.json());

// Connect routers API - DO NOT MODIFY
app.use('/', require('./routes/verification'));
app.use('/classrooms', require('./routes/classrooms'));
app.use('/students', require('./routes/students'));
app.use('/supplies', require('./routes/supplies'));

// Root route - DO NOT MODIFY
app.get('/', (req, res) => {
    res.json({
        message: "API server is running"
    });
});

// Custom error middleware (triggered via call to next(err)) - DO NOT MODIFY
app.use((err, req, res, next) => {
    console.error(err);
    res.status(400);

    if (!err.hasOwnProperty('name')) {
        err = {
            name: "BadRequest",
            ...err,
        }
    };

    res.json(err);
});

// Custom 404 (path not defined) - DO NOT MODIFY
app.use((req, res) => {
    res.status(404);
    res.json({
        error: 'Not Found'
    });
});

// Set port and listen for incoming requests - DO NOT MODIFY
const port = 8000;
app.listen(port, () => console.log('Server is listening on port', port));