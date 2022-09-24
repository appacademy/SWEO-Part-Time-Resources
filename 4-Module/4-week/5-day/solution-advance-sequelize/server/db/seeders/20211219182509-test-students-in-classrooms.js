'use strict';

const { Student, Classroom, StudentClassroom } = require('../models');
const { Op } = require('sequelize');

const minGrade = 1;
const maxGrade = 5;
const totalClassroomGrades = [
  76, 63, 85, 84, 86, 92, 94, 86, 99, 87, 63,
  76, 63, 85, 84, 86, 92, 94, 86, 99, 87, 63,
];

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    const classrooms = await Classroom.findAll();
    const students = await Student.findAll();

    let isClassroomsFilled = false;
    let studentIdx = 0;
    let numStudents = {};
    let grade = minGrade;
    while (!isClassroomsFilled && studentIdx < students.length) {
      isClassroomsFilled = true;
      let classroomIdx = 0;
      while (classroomIdx < classrooms.length) {
        const cr = classrooms[classroomIdx];
        let student = students[studentIdx];
        let desiredGrade = Math.min(totalClassroomGrades[classroomIdx], grade);
        if (!numStudents.hasOwnProperty(classroomIdx)) {
          numStudents[classroomIdx] = 0;
        }
        if (totalClassroomGrades[classroomIdx] > 0) {
          isClassroomsFilled = false;
          try {
            await StudentClassroom.create({
              studentId: student.id,
              classroomId: cr.id,
              grade: desiredGrade
            });
            numStudents[classroomIdx]++;
            totalClassroomGrades[classroomIdx] -= desiredGrade;
          } catch {}
          studentIdx = studentIdx < students.length - 1 ? studentIdx + 1 : 0;
        }
        classroomIdx++;
        if (desiredGrade === grade) {
          grade = grade >= maxGrade ? minGrade : grade + 1;
        }
      }
    }
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

     // Will be cleaned up with DELETE_CASCADE
  }
};
