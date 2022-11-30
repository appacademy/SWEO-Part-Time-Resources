// DO NOT EDIT - Initialize Express, handle JSON requests
const express = require('express');
const app = express();

app.use(express.json());

/**
 *  Basic Phase 1 - Plain-text response
 *     Method: GET
 *     Route: /version
 *     Response: 1.0.0
 */
// Your code here
app.get('/version', (req, res) => {
    res.send('1.0.0')
})

/**
 *  Basic Phase 2 - Route param and JSON response
 *      Method: GET
 *      Route: /viewers
 *      Route Parameter: id
 *      Response: JSON containing user object with id, first name, last name,
 *                birthdate and list of favorite movies
 *
 *  Hint: Use your name, birthdate and favorite movies (as strings in the code)
 *  combined with the id sent as a route parameter in the url
 */
// Your code here
app.get('/viewers/:id', (req, res) => {
    res.json({
        id: req.params.id,
        firstName: 'James',
        lastName: 'Thompson',
        favoriteMovies: [
            'Tombstone',
            'Deadpool',
            'Where the Crawdads Sing'
        ]
    })
})

/** Basic Phase 3 - Query params in URL
 *      Method: GET
 *      Route: /info
 *      Request: message
 *      Response: message (reflected back to the user)
 *      Error Handling: If "message" is missing from the query string,
 *                      then respond with "message required"
 *
 *      Sample routes:
 *          /info?message=Hello, world!
 *          /info?message=
 *          /info
 *      Sample responses, respectively (as seen in the browser):
 *          Hello, world!
 *          message required
 *          message required
 */
// Your code here
app.get('/info', (req, res) => {
    if(req.query.message){
        res.send(req.query.message)
    } else {
        res.send('message required')
    }
})

/**
 *  IMPORTANT: Scroll to the top for basic phases.
 *
 *  Do the basic phases first. You can return to the bonus phases later for
 *  extra practice during assessment preparation.
 */

/**
 *  Advanced Bonus Phase A - Respond with a JSON object using
 *                           values from the request object
 *      Method: POST
 *      Route: /movies
 *      Request (JSON): name, year, favorite
 *          name - string
 *          year - string of 4 digits
 *          favorite - string "on", or missing (if not favorite)
 *      Response (JSON):
 *          id - random integer
 *          name - string
 *          year - integer
 *          isFavorite - boolean
 *
 *      Sample request object:
 *          {"name":"Bash","year":"2002","favorite":"on"}
 *      Sample response object:
 *          {"id":7884906,"name":"Bash","year":2002,"isFavorite":true}
 *
 *      Alternate request object:
 *          {"name":"Honey Sweet","year":"1967"}
 *      Alternate response object:
 *          {"id":98765432,"name":"Honey Sweet","year":1967,"isFavorite":false}
 */
// Your code here
app.post('/movies', (req, res) => {
    res.json({
        id: Math.floor(Math.random()* 1000),
        name: `${req.body.name}`,
        year: Number(req.body.year),
        isFavorite: Boolean(req.body.favorite)
    })
})

/**
 *  Advanced Bonus Phase B - Research how to return static
 *                           files in a public folder
 *
 *      Use your researching skills, to figure out how to return files from
 *      a folder in your Express server.
 *
 *      If you get stuck, skip this. You will study this in more detail
 *      in a future lesson. You can come back while studying for the
 *      assessment and complete this phase for additional practice.
 *
 *      Reference: https://expressjs.com/en/starter/static-files.html
 *
 *      Test route: /logo.png
 */
// Your code here
app.use(express.static('public'))

// DO NOT EDIT - Set port and listener
const port = 5000;
app.listen(port, () => console.log('Server is listening on port', port));