const express = require('express');
const app = express();
const sqlite3 = require('sqlite3');

const db_source = "./app.db";
const db = new sqlite3.Database(
    db_source,
    sqlite3.OPEN_READWRITE
)

app.use(express.json());

app.get('/', (req, res, next) => {
    const sql = 'SELECT * FROM pies';
    const params = [];

    db.all(sql, params, (err, rows) => {
        res.json(rows);
    })

})


const PORT = 5001;

app.listen(PORT, () => console.log(`Server running on ${PORT}`));