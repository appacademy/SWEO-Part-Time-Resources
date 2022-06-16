const sqlite = require('sqlite3').verbose();

module.exports.createClient = () => {
  return new Promise((resolve, reject) => {
    const db = new sqlite.Database(':memory:', (err) => {
      if (err) {
        console.error(err.message);
        reject(err);
      }
      resolve(db);
    });
    return db;
  })
};

module.exports.queryRows = (client, query, params = []) => {
  return new Promise((resolve, reject) => {
    client.all(query, params, function(err, rows) {
      if (err) return reject(err);
      else return resolve(rows);
    });
  });
};

module.exports.run = (client, statement) => {
  return new Promise((resolve, reject) => {
    client.exec(statement, function(err) {
      if (err) return reject(err);
      else return resolve();
    });
  });
};
