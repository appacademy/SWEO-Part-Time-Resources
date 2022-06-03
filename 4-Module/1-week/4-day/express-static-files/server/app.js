const express = require('express');
const app = express();

// // Part 1
// app.use(express.static('assets'));

// Part 2
app.use(express.static('assets/scripts'));

// Part 3
app.use('/stylesheets', express.static('assets/css'));
app.use('/html', express.static('assets/html/index.html'));

// BONUS
app.use('/stickers', express.static('assets/images'));

const port = 5000;
app.listen(port, () => console.log('Server is listening on port', port));