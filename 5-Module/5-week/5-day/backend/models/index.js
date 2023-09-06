const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize({
	dialect: 'sqlite',
	storage: './db.sqlite'
});

const User = sequelize.define('User', {
	email: {
		type: DataTypes.STRING,
		allowNull: false,
		unique: true
	},
	password: {
		type: DataTypes.STRING,
		allowNull: false
	},
	profileImageUrl: {
		type: DataTypes.STRING,
		allowNull: false
	}
});

module.exports = {
	sequelize,
	User
};
