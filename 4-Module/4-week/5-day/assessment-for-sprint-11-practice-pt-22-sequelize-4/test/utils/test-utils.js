const { exec } = require('child_process');
const sqlite3 = require('sqlite3').verbose();

module.exports.runSQL = (statement) => {
  return new Promise((resolve, reject) => {
    const db = new sqlite3.Database(process.env.DB_FILE, sqlite3.OPEN_READWRITE, (err) => {
      if (err) console.log(err);
    });
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
  });
};

module.exports.seedAllDB = async function () {
  return new Promise((resolve, reject) => {
    const seed = exec(
      'npx sequelize-cli db:seed:all',
      { env: process.env },
      err => (err ? reject(err): resolve())
    );
  }
)};

// all files in the /test/original-files folder will replace those files in the
  // equivalent path in the root directory
const replaceFilesScript = `
destination_dir=.
original_dir=./test/original-files
find "$original_dir" -type f -exec bash -c 'cp -v $0 "\${0/$1/$2}"' {} $original_dir $destination_dir \\;
`;

module.exports.resetFiles = async function () {
  return new Promise((resolve, reject) => {
    const replaceFilesProcess = exec(
      replaceFilesScript,
      { env: process.env },
      err => (err ? reject(err): resolve())
    );
    replaceFilesProcess.stdout.on('data', function(data) {
      console.log(data); 
    });
  }
)};

module.exports.resetDB = async function () {
  await removeTestDB();
  await runMigrations();
};