//Express Router

//The express app object cannot be imported and exported across many files
//so instead we're going to use express router

//It has all the same functionality of app and is identical, however you can import and export it

//Serving static files in express
//Super simple love to see it

//express.static('4-day', [options])

//The root is used for the file path (prefer to use relative path)

//app.use('/', express.static('4-day'))

//ENVIRONMENT VARIABLES
//Environment variables are just variables that we use for super important info
//regarding our application environment

//Common environment variables:
/*

//Execution mode : Development, testing, local, production     - NODE_ENV=development
//Domain names
//API URL/URI
//Public and private authorization keys    - SECRET=password1234
//PORT        -       PORT=5000
 
DBPASSWORD=googlesSecretPAsswordthatprobablychangeseverytwohours
DBLOCATION=googlessecretdblocation
*/

// PORT=8000 node app.js

// Environment variables are located here: process.env

