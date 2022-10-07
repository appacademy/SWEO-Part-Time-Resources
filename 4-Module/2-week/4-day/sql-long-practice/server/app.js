// Instantiate Express and the application
const express = require('express');
const app = express();

// Process environment variables
require('dotenv').config();

// Express using json
app.use(express.json());

// Connect router for trees API
const treesRouter = require('./routes/trees');
app.use('/trees', treesRouter);

// Root route
app.get('/', (req, res) => {
    res.json({
        message: "API server is running"
    });
});

// Custom error middleware (triggered via call to next(err))
app.use((err, req, res, next) => {
    console.error(err);
    res.status(400);
    res.json({
        error: err.message,
    });
});

// Custom 404 (path not defined, or next() called without error)
app.use((req, res) => {
    res.status(404);
    res.json({
        error: 'not found'
    });
})

// Set port and listen for incoming requests
const port = 5000;
app.listen(port, () => console.log('Server is listening on port', port));