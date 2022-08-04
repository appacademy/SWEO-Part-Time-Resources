const express = require('express');
const app = express();

// require('dotenv').config() // only if we use dotenv

app.get('/', (req, res) => {
    res.send(process.env.SECRET_MESSAGE);
});

const port = process.env.PORT;
app.listen(port, () => console.log('Server is listening on port', port));