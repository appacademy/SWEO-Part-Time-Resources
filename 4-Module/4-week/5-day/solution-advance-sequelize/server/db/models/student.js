'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Student extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Student.hasMany(models.StudentClassroom);
      Student.belongsToMany(
          models.Classroom,
          { through: models.StudentClassroom }
      );
    }
  };
  Student.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    leftHanded: DataTypes.BOOLEAN,
    seededBy: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Student',
  });
  return Student;
};