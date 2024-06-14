const expect = require('chai').expect;
const path = require('path');
const fs = require('fs');

const { createClient, run } = require('./sqlite-client');

module.exports.createTablesAndInsertData = async function (fileName){
  let client, insertError, otherError;
  try {
    client = await createClient();
  } catch (e) {
    client = undefined;
    console.error(e);
    otherError = e.message;
  }

  try {
    const filePath = path.resolve(__dirname, '../sql-practice', fileName);
    const sqlStatements = fs.readFileSync(filePath, 'utf-8');

    await run(client, sqlStatements);
  } catch (e) {
    console.error(e);
    insertError = e.message;
  }
  return { client, insertError, otherError };
};

module.exports.stopTestOnError = function (client, insertError, otherError) {
  if (!client) {
    expect.fail('Cannot create a SQLite3 database in-memory');
  }
  else if (insertError) {
    expect.fail(insertError);
  }
  else if (otherError) {
    expect.fail(otherError);
  }
}
