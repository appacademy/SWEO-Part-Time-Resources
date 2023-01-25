'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tree extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      //!!START SILENT
      // Phase 5
      Tree.belongsToMany(
          models.Insect,
          { through: models.InsectTree}
      );
      //!!END
    }
  };
  Tree.init({
    tree: DataTypes.STRING,
    location: DataTypes.STRING,
    heightFt: {
      type: DataTypes.FLOAT,
      validate: {
        min: 0,
      }
    },
    groundCircumferenceFt: {
      type: DataTypes.FLOAT,
      validate: {
        min: 0,
      }
    }
  }, {
    sequelize,
    modelName: 'Tree',
  });
  return Tree;
};