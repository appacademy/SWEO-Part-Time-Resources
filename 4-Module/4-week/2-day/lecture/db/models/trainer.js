'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Trainer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
	  // one to many with Pokemon
	  Trainer.hasMany(
		models.Pokemon,
		{
			foreignKey: 'trainerId',
			onDelete: 'CASCADE',
			hooks: true
		}
	  )
    }
  }
  Trainer.init({
    name: DataTypes.STRING,
    money: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Trainer',
  });
  return Trainer;
};
