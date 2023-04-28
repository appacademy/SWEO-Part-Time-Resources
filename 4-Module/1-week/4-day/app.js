const express = require('express');
require('dotenv').config()
const app = express();

const home = require('./router/home');
const roster = require('./router/roster');
const user = require('./router/user');

app.use(express.static('assets'))

app.use(home);
app.use('/roster', roster); //THIS IS THE BEST PRACTICE
app.use(user);

app.get('/', (req, res) => {
    res.send("I'm the root")
})

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on ${PORT}`));

