'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Supply extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Supply.belongsTo(
        models.Classroom,
        { foreignKey: 'classroomId' }
      );
    }
  };
  Supply.init({
    name: DataTypes.STRING,
    category: DataTypes.STRING,
    handed: DataTypes.STRING,
    classroomId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Supply',
  });
  return Supply;
};