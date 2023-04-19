module.exports = {
  development: {
    storage: process.env.DB_FILE, //where to look for the database
    dialect: "sqlite", //what kind of database is being used
    seederStorage: "sequelize", //lets sequelize know which seeds have been run
    benchmark: true, //logs the time it takes to run each query
    logQueryParameters: true, //logs the parameters used in a query
    typeValidation: true, //validates that values are the correct type
    logging: false //logs each SQL query that is run
  }
}
