module.exports = {
  development: {
    storage: process.env.DB_FILE, //where to look for the database
    dialect: "sqlite", //what kind of database is being used
    seederStorage: "sequelize", //tracks which seeds have been run
    benchmark: true, //log the time it takes to run each query
    logQueryParameters: true, //logs the parameters of a query
    typeValidation: true, //makes sure provided data matches database contraints
    logging: false //log each SQL query
  }
}
