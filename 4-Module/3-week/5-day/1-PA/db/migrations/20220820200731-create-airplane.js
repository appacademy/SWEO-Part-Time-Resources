'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Airplanes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      flightNumber: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false,
      },
      model: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      inService: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
      homeBase: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      maxNumPassengers: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      currentNumPassengers: {
        type: Sequelize.INTEGER,
      },
      cruisingAltitudeFt: {
        type: Sequelize.INTEGER,
      },
      firstFlightDate: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
				defaultValue: Sequelize.literal("DEFAULT_TIMESTAMP")
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
				defaultValue: Sequelize.literal("DEFAULT_TIMESTAMP")
      },
    });

    await queryInterface.addIndex(
      'Airplanes',
      ['homeBase', 'cruisingAltitudeFt'],
      {
        unique: true,
      }
    );
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Airplanes');
  },
};
