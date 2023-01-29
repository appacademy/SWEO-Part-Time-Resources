'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Classroom extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Classroom.hasMany(models.StudentClassroom);
      Classroom.belongsToMany(
          models.Student,
          { through: models.StudentClassroom }
      );
      Classroom.hasMany(
        models.Supply, {
          foreignKey: 'classroomId',
          onDelete: 'CASCADE',
          hooks: true
      });
    }
  };
  Classroom.init({
    name: DataTypes.STRING,
    studentLimit: {
      type: DataTypes.INTEGER,
      validate: {
        min: 1,
      }
    },
    // Phase 5: Alternate solution 3
    //!!START
    // // Phase 5A: Alternate solution 3
    // studentCount: DataTypes.VIRTUAL,
    // // Phase 5B: Alternate solution 3
    // supplyCount: DataTypes.VIRTUAL,
    // // Phase 5C: Alternate solution 3
    // overloaded: DataTypes.VIRTUAL,
    // // Optional Phase 5D: Alternate solution 3
    // avgGrade: DataTypes.VIRTUAL,
    //!!END
  }, {
    sequelize,
    modelName: 'Classroom',
  });
  return Classroom;
};