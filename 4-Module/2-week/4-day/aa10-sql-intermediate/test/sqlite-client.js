const Database = require('better-sqlite3');

module.exports.createClient = () => {
  const db = new Database(':memory:');
  return db;
};

module.exports.queryRows = (client, query, params = []) => {
  query = query
    .replace(/--.*\n/g, "\n")
    .replace(/--.*$/, '')
    .replace(/"/g, "'");
  if (!query) throw new Error("No SQL statement in file.");
  try {
    const stmt = client.prepare(query);
    const rows = stmt.raw().iterate();
    const data = [];
    for (const row of rows) {
      data.push(row);
    }
    return data;
  } catch (err) {
    console.log(query);
    throw err;
  }
};

module.exports.run = (client, statement) => {
  statement = statement
    .replace(/--.*\n/g, "\n")
    .replace(/--.*$/, '')
    .replace(/"/g, "'");
  if (!statement) throw new Error("No SQL statement in file.");
  try {
    return client.exec(statement);
  } catch (err) {
    console.log(statement);
    throw err;
  }
};
