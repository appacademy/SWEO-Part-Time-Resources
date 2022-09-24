'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class StudentClassroom extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      StudentClassroom.belongsTo(models.Student);
      StudentClassroom.belongsTo(models.Classroom);
    }
  };
  StudentClassroom.init({
    studentId: DataTypes.INTEGER,
    classroomId: DataTypes.INTEGER,
    grade: DataTypes.INTEGER,
    // Optional Phase 5D: Alternate solution 3
    //!!START
    // avgGrade: DataTypes.VIRTUAL
    //!!END
  }, {
    sequelize,
    modelName: 'StudentClassroom',
  });
  return StudentClassroom;
};