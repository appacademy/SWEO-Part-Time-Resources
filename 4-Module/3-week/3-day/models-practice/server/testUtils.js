const {exec} = require('child_process');

module.exports.runMigrations = async function () {
  return new Promise((resolve, reject) => {
    const migrate = exec(
      'npx sequelize-cli db:migrate',
      {env: process.env},
      err => (err ? reject(err): resolve())
    );
  }
)};

module.exports.removeTestDB = async function () {
  return new Promise((resolve, reject) => {
    const deleteDB = exec(
      `rm ${process.env.DB_FILE} || true`,
      {env: process.env},
      err => (err ? reject(err): resolve())
    );
  }
)};