const express = require('express');
const app = express();

const path = require('path')
// Your code here

app.use('/stylesheets', express.static(path.join(__dirname, 'assets/css')))
app.use('/scripts', express.static(path.join(__dirname,'assets/scripts')))
app.use('/images', express.static(path.join(__dirname,'assets/images')))

const port = 5000;
app.listen(port, () => console.log('Server is listening on port', port));
