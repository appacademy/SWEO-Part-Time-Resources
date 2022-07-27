'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Move extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
	  Move.belongsToMany(
		models.Pokemon,
		{
			through: models.PokemonMove
		}
	  )
    }
  }
  Move.init({
    name: DataTypes.STRING,
    type: DataTypes.STRING,
    power: DataTypes.INTEGER,
    accuracy: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Move',
  });
  return Move;
};
