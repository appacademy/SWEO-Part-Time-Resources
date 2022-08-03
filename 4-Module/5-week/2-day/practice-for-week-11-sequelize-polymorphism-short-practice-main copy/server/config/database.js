module.exports = {
  development: {
    storage: 'db/test.db',
    dialect: "sqlite",
    seederStorage: "sequelize",
    benchmark: true,
    logQueryParameters: true,
    typeValidation: true,
    logging: false
  },
};
