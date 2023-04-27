const express = require('express');
require('dotenv').config()

const app = express();

const home = require('./router/home')
const roster = require('./router/roster');

app.use(home);
app.use(roster);

app.get('/', (req,res) => {
    res.send("BOOM ROUTINGGGGG")
})


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on ${PORT}`));