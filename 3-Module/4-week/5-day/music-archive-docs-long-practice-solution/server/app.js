const express = require('express');
const fs = require('fs');
const morgan = require('morgan');
const app = express();

app.use(express.json());

app.use(morgan('dev'));

app.disable('etag');

const db = require('./db');

let nextArtistId = 2;
let nextAlbumId = 2;
let nextSongId = 2;

const { NotFoundError, BodyError } = require('./errors');

app.use(require('./routes'));

app.use("/assets", express.static("assets", {
  etag: false,
  lastModified: false
}));

app.use((req, res) => {
  throw new NotFoundError("404 - Page Not Found");
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  const data = {
    message: err.message,
    statusCode: err.status
  }
  return res.json(data);
});

const port = process.env.PORT || 5000;

// Remove database
db.resetDatabase();
// migrate and seed the database
db.migrateAndSeed()
  .then(() => {
    app.listen(port, () => console.log('Server is listening on port', port));
  })
  .catch(() => {
    console.error('Could not migrate and seed the database');
  });