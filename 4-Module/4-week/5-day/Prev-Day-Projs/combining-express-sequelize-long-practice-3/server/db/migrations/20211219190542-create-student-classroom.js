'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('StudentClassrooms', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      studentId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'Students' },
        onDelete: 'CASCADE',
      },
      classroomId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'Classrooms' },
        onDelete: 'CASCADE',
      },
      grade: {
        type: Sequelize.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });

    await queryInterface.addIndex(
      'StudentClassrooms',
      ['studentId', 'classroomId'],
      {
        unique: true
      }
    );
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('StudentClassrooms');
  }
};