module.exports = {
  development: {
    storage: "db/dev.db",
    dialect: "sqlite",
    seederStorage: "sequelize",
    logQueryParameters: true,
    typeValidation: true
  },
  test: {
    storage: "db/test.db",
    dialect: "sqlite",
    seederStorage: "sequelize",
    logging: false
  },
};
