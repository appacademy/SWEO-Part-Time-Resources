//github
const express = require('express');
const app = express();
//!!START

// Part 1
// app.use(express.static('assets'));

// Part 2
app.use(express.static('assets/scripts'));

// Part 3
app.use('/stylesheets', express.static('assets/css'));

// BONUS
app.use('/stickers', express.static('assets/images'));
//!!END

const port = 5000;
app.listen(port, () => console.log('Server is listening on port', port));
