const models = require('./models');
const fs = require('fs');

const nodeEnv = process.env.NODE_ENV || 'development';
const { storage: dbPath } = require('../config').db;

function resetDatabase() {
  try {
    console.log('Resetting database...');
    fs.unlinkSync(dbPath);
  } catch(err) {
    console.error('No database to reset');
  }
}

async function migrateAndSeed() {
  const { exec } = require('child_process');
  const sqlite3 = require('sqlite3');

  process.env.NODE_ENV = process.env.NODE_ENV || 'development';

  await new Promise((resolve, reject) => {
    const migrate = exec(
      'npx sequelize db:migrate',
      { env: process.env },
      err => (err ? reject(err): resolve())
    );

    // Forward stdout+stderr to this process
    migrate.stdout.pipe(process.stdout);
    migrate.stderr.pipe(process.stderr);
  });

  await new Promise((resolve, reject) => {
    const migrate = exec(
      'npx sequelize db:seed:all',
      { env: process.env },
      err => (err ? reject(err): resolve())
    );

    // Forward stdout+stderr to this process
    migrate.stdout.pipe(process.stdout);
    migrate.stderr.pipe(process.stderr);
  });
}

module.exports = {
  ...models,
  resetDatabase,
  migrateAndSeed
};