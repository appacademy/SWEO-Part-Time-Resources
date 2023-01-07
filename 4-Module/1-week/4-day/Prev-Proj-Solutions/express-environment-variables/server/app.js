const express = require('express');
const app = express();
//!!START

// a possible solution using dotenv
require('dotenv').config();
//!!END

app.get('/', (req, res) => {
    res.send(process.env.SECRET_MESSAGE);
});

const port = process.env.PORT;
app.listen(port, () => console.log('Server is listening on port', port));