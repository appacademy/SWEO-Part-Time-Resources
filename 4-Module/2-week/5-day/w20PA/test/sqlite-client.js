const Database = require('better-sqlite3');

module.exports.createClient = () => {
  const db = new Database(':memory:');
  return db;
};

module.exports.queryRows = (client, query, params = []) => {
  query = query.replace(/.*--.*/g, "\n");
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
  }
};

module.exports.run = (client, statement) => {
  statement = statement.replace(/\*.--.*\n/g, "\n");
  if (!statement) throw new Error("No SQL statement in file.");
  return client.exec(statement);
};
