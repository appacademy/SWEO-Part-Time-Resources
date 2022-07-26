'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Owner extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

	  // one to one
	  // .hasOne
	  // .belongsTo

	  // one to many
	  // .hasMany
	  // .belongsTo

	  // many to many
	  // .belongsToMany

	  Owner.hasMany(
		models.Shirt,
		{
			foreignKey: 'ownerId',
			onDelete: 'CASCADE',
			hooks: true
		}
	  )
    }
  }
  Owner.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    phoneNumber: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Owner',
  });
  return Owner;
};
