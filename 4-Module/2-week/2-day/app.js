const express = require('express');
const app = express();
const sqlite3 = require('sqlite3');

const db_source = "./app.db";
const db = new sqlite3.Database(
    db_source,
    sqlite3.OPEN_READWRITE
)

app.get('/', (req, res) => {
    const sql = "SELECT * FROM pies WHERE price=25";

    db.all(sql, (err, rows) => {
        res.json(rows);
    })
})

app.use(express.json());

const PORT = 5001;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));