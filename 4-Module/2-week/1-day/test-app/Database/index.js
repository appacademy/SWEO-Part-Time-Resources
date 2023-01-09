const fs = require("fs");
const sqlite = require("sqlite3").verbose();

// connecting to sqlite db
const db = new sqlite.Database(
  "./twitter.sqlite",
  sqlite.OPEN_READWRITE,
  (err) => {
    if (err) return console.log(err);
  }
);

// reading our appropriate sql files and turning it into a strings to run
const utils = fs.readFileSync("./sqlFiles/utils.sql").toString();

const createUsersTable = fs
  .readFileSync("./sqlFiles/users/create.sql")
  .toString();

const insertUsersTable = fs
  .readFileSync("./sqlFiles/users/insert.sql")
  .toString();

const dropUsersTable = fs.readFileSync("./sqlFiles/users/drop.sql").toString();

const createTweetsTable = fs
  .readFileSync("./sqlFiles/tweets/create.sql")
  .toString();

const insertTweetsTable = fs
  .readFileSync("./sqlFiles/tweets/insert.sql")
  .toString();

const dropTweetsTable = fs
  .readFileSync("./sqlFiles/tweets/drop.sql")
  .toString();

// if you dont use serialize, it runs wonky, i believe its some sort of async thing going on.
db.serialize(() => {
  db.run(utils);

  // runs our sql commands for DROP TABLE IF EXISTS
  db.run(dropTweetsTable);
  db.run(dropUsersTable);

  // runs our sql commands for CREATE TABLE for each table
  db.run(createUsersTable);
  db.run(createTweetsTable);

  // runs our sql commands for INSERT INTO seeding our db
  db.run(insertUsersTable);
  // db.run(insertTweetsTable);
});
