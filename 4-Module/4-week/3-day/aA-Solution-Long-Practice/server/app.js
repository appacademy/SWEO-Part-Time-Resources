// Instantiate Express and the application - DO NOT MODIFY
const express = require('express');
const app = express();

// Import environment variables in order to connect to database - DO NOT MODIFY
require('dotenv').config();

// Express using json - DO NOT MODIFY
app.use(express.json());

// Connect router for trees API - DO NOT MODIFY
const treesRouter = require('./routes/trees');
app.use('/trees', treesRouter);

// Connect router for insects API - DO NOT MODIFY
const insectsRouter = require('./routes/insects');
app.use('/insects', insectsRouter);

// Connect router for joined API - DO NOT MODIFY
const joinedRouter = require('./routes/joined');
app.use('/', joinedRouter);

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
    res.json(err);
});

// Custom 404 (path not defined) - DO NOT MODIFY
app.use((req, res) => {
    res.status(404);
    res.json({
        error: 'not found'
    });
});

// Set port and listen for incoming requests - DO NOT MODIFY
const port = 5000;
app.listen(port, () => console.log('Server is listening on port', port));
