const expect = require('chai').expect;
const path = require('path');
const fs = require('fs');

const { createClient, run } = require('./sqlite-client');

const createFileName = '01-create-tables.sql';
const insertFileName = '02-insert-data.sql';

module.exports.createTables = async function (){
  let client, createError, otherError;
  try {
    client = await createClient();
  } catch (e) {
    client = undefined;
    console.error(e);
    otherError = e.message;
  }

  try {
    const createSqlPath = path.resolve(__dirname, '../sql-files', createFileName);
    const createSql = fs.readFileSync(createSqlPath, 'utf-8');

    await run(client, createSql);
  } catch (e) {
    console.log(e);
    createError = e;
  }

  return { client, createError, otherError };
};

module.exports.insertData = async function(client, otherError) {
  try {
    const insertSqlPath = path.resolve(__dirname, '../sql-files', insertFileName);
    const insertSql = fs.readFileSync(insertSqlPath, 'utf-8');

    await run(client, insertSql);
  } catch (e) {
    otherError = e.message;
  }
  return otherError;
};

module.exports.stopTestOnError = function (client, createError, otherError) {
  if (!client) {
    expect.fail('Cannot create a SQLite3 database in-memory');
  }
  else if (createError) {
    expect.fail(`Error while running ${createFileName}: ${createError.message}`);
  }
  else if (otherError) {
    expect.fail(otherError);
  }
}