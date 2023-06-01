// Instantiate Express and the application - DO NOT MODIFY
const express = require('express');
const app = express();

// Database file - DO NOT MODIFY
// DO NOT DO THIS - USE .env VARIABLE INSTEAD
const DATA_SOURCE = 'app.db';

/**
 * Step 1 - Connect to the database
 */
const sqlite3 = require('sqlite3');
const db = new sqlite3.Database(DATA_SOURCE, sqlite3.OPEN_READWRITE)

// Express using json - DO NOT MODIFY
app.use(express.json());

// List of all colors in the database - DO NOT MODIFY
app.get('/colors', (req, res, next) => {
    const sql = 'SELECT * FROM colors';
    const params = [];

    db.all(sql, params, (err, rows) => {
        res.json(rows);
    });
});

// One color by id
app.get('/colors/:id', (req, res, next) => {
    /**
     * STEP 2A - SQL Statement
     */
    // Your code here
	const sql = `SELECT id, name FROM COLORS
				WHERE id = ?;`
				// "SELECT * FROM COLORS;"
    /**
     * STEP 2B - SQL Parameters
     */

	const params = [req.params.id]

    /**
     * STEP 2C - Call database function
     *  - return response
     */
	// db.run -> runs a command
	// db.all -> returns all rows
	// db.get -> returns on the first row
	db.get(sql, params, (err, row)=>{
		if(err){
			console.log(err)
		} else {
			res.json(row)
		}
	})
});

// Add color
app.get('/colors/add/:name', (req, res, next) => {
    // SQL INSERT
    const sql = "INSERT INTO colors (name) VALUES (?)";
    const params = [req.params.name];

    // SQL QUERY NEW ROW
    const sqlLast = 'SELECT * FROM colors ORDER BY id DESC LIMIT 1';

    /**
     * STEP 3 - After INSERT, return the new row
     *  - insert
     *  - if error, go to next()
     *  - if no error, query for new row
     *  - return new row
     */
	db.run(sql, params, (err)=> {
		if(err) {
			next(err)
		} else {
			db.get(sqlLast, [], (err, row)=> {
				if(err){
					next(err)
				} else {
					res.json(row)
				}
			})
		}
	})
})

// Root route - DO NOT MODIFY
app.get('/', (req, res) => {
    res.json({
        message: "API server is running"
    });
});

// Set port and listen for incoming requests - DO NOT MODIFY
const port = 5000;
app.listen(port, () => console.log('Server is listening on port', port));
