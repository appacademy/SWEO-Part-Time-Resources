'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pokemon extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
	  // one to many with Trainer
	  Pokemon.belongsTo(
		models.Trainer,
		{
			foreignKey: 'trainerId'
		}
	  )

	  // many to many with Move
	  Pokemon.belongsToMany(
		models.Move,
		{
			through: models.PokemonMove
		}
	  )
    }
  }
  Pokemon.init({
    name: DataTypes.STRING,
    type1: DataTypes.STRING,
    type2: DataTypes.STRING,
    trainerId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Pokemon',
  });
  return Pokemon;
};
