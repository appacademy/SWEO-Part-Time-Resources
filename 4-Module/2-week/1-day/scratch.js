const express = require('express');
const app = express();

require('dotenv').config();

const sqlite3 = require('sqlite3');
const db = new sqlite3.Database(
  process.env.DATA_SOURCE,
  sqlite3.OPEN_READWRITE
);

app.use(express.json());

//ROUTES
app.get('/', (req, res) => {
  res.send('SERVER IS LIVE');
});
// db.all for multiple
app.get('/dogs', (req, res, next) => {
  const sql = 'SELECT * FROM dogs';
  const params = [];

  db.all(sql, params, (err, rows) => {
    if (err) {
      // next(err);
      res.send(err.message);
    } else {
      res.json(rows);
    }
  });
});

// db.get for singular
app.get('/dogs/:dogId', (req, res, next) => {
  const sql = `SELECT * FROM dogs WHERE id = ?`;
  const params = [req.params.dogId];

  db.get(sql, params, (err, row) => {
    if (err) {
      // next(err);
      res.send(err.message);
    } else {
      res.json(row);
    }
  });
})
app.post('/dogs', (req, res, next) => {
  const sql = 'INSERT INTO dogs (name, age, isChipped, sex, breed) VALUES (?,?,?,?,?)';
  const params = [
    req.body.name,
    req.body.age,
    req.body.isChipped,
    req.body.sex,
    req.body.breed
  ]

  db.run(sql, params, (err) => {
    if (err) {
      res.send(err.message);
    } else {
      const sqlLast = 'SELECT * FROM dogs ORDER BY id DESC LIMIT 1';

      db.get(sqlLast, [], (err, row) => {
        res.json(row);
      });
    }
  })
})

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`LISTENING ON PORT ${port}...`));