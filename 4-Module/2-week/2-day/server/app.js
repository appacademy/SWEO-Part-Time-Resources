const express = require('express');
const sqlite3 = require('sqlite3');
require('dotenv').config();

const app = express();

app.use(express.json())

const db = new sqlite3.Database(
    process.env.data_source,
    sqlite3.OPEN_READWRITE
);

app.use(express.json());



app.get('/trees', (req, res) => {
    const sql = "SELECT * FROM trees;"
    const params = [];

    db.all(sql, params, (err, rows) => {
        if(err){
            console.log(err);
        } else {
            res.json(rows);
        }
    })
});


app.post('/trees', (req, res) => {

    const { name, heightFt} = req.body;

    const sql = "INSERT INTO trees (name, height_ft) VALUES (?, ?);"

    const params = [name, heightFt];

    db.run(sql, params, (err) => {
        if(err){
            console.log(err);
        } else {
           res.json({"message": "success!"})
        }
    })
});






const port = process.env.port;
app.listen(port, () => console.log(`Sever is on and running on port ${port}`));