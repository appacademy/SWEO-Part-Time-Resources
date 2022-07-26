const db = 'db/dev.db'

module.exports = {
	development: {
	  storage: db,
	  dialect: "sqlite",
	  seederStorage: "sequelize",
	  benchmark: true,
	  logQueryParameters: true,
	  typeValidation: true,
	  // logging: false
	},
};
