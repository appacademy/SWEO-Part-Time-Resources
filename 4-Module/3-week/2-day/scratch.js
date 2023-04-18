const express = require('express');
// require('dotenv').config();

const app = express();
app.get('/bookmarks', (req, res) => {
    let userInput = req.body.userInput;         
    // "'Week 1 Notes'; DROP TABLE Bookmarks"

    let query = `SELECT * FROM Bookmarks WHERE title = ${userInput}`;
    // `SELECT * FROM Bookmarks WHERE title = 'Week 1 Notes'; DROP TABLE Bookmarks`
});

app.use( '/home', homeRouter );
app.use( '/roster', rosterRouter);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}...`));