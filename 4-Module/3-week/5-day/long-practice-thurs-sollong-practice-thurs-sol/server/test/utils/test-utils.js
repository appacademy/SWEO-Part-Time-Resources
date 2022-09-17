const { exec } = require('child_process');
const sqlite3 = require('sqlite3').verbose();

module.exports.runSQL = (statement) => {
  return new Promise((resolve, reject) => {
    const db = new sqlite3.Database(process.env.DB_FILE, sqlite3.OPEN_READWRITE);
    db.run(statement, function(err) {
      db.close();
      err ? reject(err): resolve();
    });
  });
};

const runMigrations = async function () {
  return new Promise((resolve, reject) => {
    const migrate = exec(
      'npx sequelize-cli db:migrate',
      { env: process.env },
      err => (err ? reject(err): resolve())
    );
  }
)};

const removeTestDB = async function () {
  return new Promise((resolve, reject) => {
    const deleteDB = exec(
      `rm ${process.env.DB_FILE} || true`,
      { env: process.env },
      err => (err ? reject(err): resolve())
    );
  }
)};

module.exports.resetDB = async function () {
  await removeTestDB();
  await runMigrations();
};
