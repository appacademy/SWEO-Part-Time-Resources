'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Insect extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      //!!START SILENT
      // Phase 5
      Insect.belongsToMany(
          models.Tree,
          { through: models.InsectTree}
      );
      //!!END
    }
  };
  Insect.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    fact: DataTypes.STRING,
    territory: DataTypes.STRING,
    millimeters: {
      type: DataTypes.FLOAT,
      validate: {
        min: 0,
      },
    }
  }, {
    sequelize,
    modelName: 'Insect',
  });
  return Insect;
};