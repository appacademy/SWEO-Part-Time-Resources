const express = require('express');
const app = express();

require('dotenv').config();

app.use(express.json());

// Routes will go here
// ...

// Set port and listen for incoming requests
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is listening on port ${port}`));