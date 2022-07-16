const path = require('path');

module.exports = {
  development: {
    storage: path.join(__dirname, '..', 'db', 'database.sqlite'),
    host: 'localhost',
    dialect: 'sqlite',
    logging: console.log,
    seederStorage: 'sequelize'
  },
  test: {
    storage: path.join(__dirname, '..', 'db', 'test.sqlite'),
    host: 'localhost',
    dialect: 'sqlite',
    logging: console.log,
    seederStorage: 'sequelize'
  },
};