'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
			// Sequelize has DataTypes available on it. We use DataTypes in our model 
			// files. That comes directly from the Sequelize object. We instead use
			// Sequelize in migration files, and don't need to specify .DataTypes

    await queryInterface.addColumn('Cats', 'age', {
      // type: Sequelize.FLOAT, // this is the standard approach
      type: Sequelize.DataTypes.FLOAT, // this works as well
    });
    // await queryInterface.addColumn('Cats', 'age', Sequelize.FLOAT);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Cats', 'age');
  },
};
