'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Songs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Users',
        }
      },
      // this si gong to be set to null because I have not created the model yet
      albumId: {
        allowNull: true,
        type: Sequelize.INTEGER,
        defaultValue: null
      },
      title: {
        type: Sequelize.STRING(50)
      },
      description: {
        type: Sequelize.STRING(100)
      },
      url: {
        type: Sequelize.STRING(50)
      },
      // this is going to be null, because I have not created the feature yet
      previewImage: {
        type: Sequelize.STRING,
        allowNull: true,
        defaultValue: null
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Songs');
  }
};