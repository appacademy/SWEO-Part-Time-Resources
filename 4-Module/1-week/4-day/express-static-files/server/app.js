const express = require('express');
const app = express();
// Your code here


// app.use(express.static('assets'))

app.use(express.static('assets/scripts'))

app.use('/stylesheets', express.static('assets/css'))


const port = 5000;
app.listen(port, () => console.log('Server is listening on port', port));