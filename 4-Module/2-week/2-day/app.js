const express = require('express')
const app = express()
const sqlite3 = require('sqlite3')

require('dotenv').config()

const db = new sqlite3.Database(
	process.env.data_source,
	sqlite3.OPEN_READWRITE
);

const sqlSelectTable = "SELECT * FROM users;"
const createTableUsers = `
CREATE TABLE users (
	id INTEGER PRIMARY KEY AUTOINCREMENT,
	first_name VARCHAR(40) NOT NULL,
	last_name VARCHAR(40) NOT NULL,
	username VARCHAR(100) UNIQUE
);
`

db.all(sqlSelectTable, [], (err, rows) => {
	if(!rows) {
		db.run(createTableUsers, [], (err) => {
			if(err) {
				console.log(err)
			}
		})
	}
})

app.use(express.json())

// db.get -> allows to search for one piece of information and return that information
// db.run -> allows to run commands such as insert, delete, update
// db.all -> allows to get everything from that query

app.get('/users/:id', (req, res)=> {
	const id = req.params.id

	const sql = `SELECT * FROM USERS
				 WHERE id = ?;
				`
	const params = [
		id
	]

	db.get(sql, params, (err, row)=> {
		if(err) {
			console.log(err)
			return res.json(err)
		} else if (row) {
			return res.json(row)
		} else {
			res.json({
				"message" : "user not found"
			})
		}
	})
})

app.post('/users', (req, res) => {

	const {firstName, lastName, username} = req.body

	const sql = `INSERT INTO USERS (first_name, last_name, username)
				 VALUES (?, ?, ?);
   				`
	const params = [firstName, lastName, username]

	db.run(sql, params, (err)=> {
		if(err) {
			console.log(err)
		} else {
			res.json({
				'message' : 'successfully added user',
				'user' : {
					firstName,
					lastName,
					username
				}
			})
		}
	})
})

const port = process.env.port
app.listen(port, ()=> {
	console.log(`Server is up and running on port ${port}`)
})
