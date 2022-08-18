'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'Colors',
      [{ name: 'red' }, { name: 'blue' }, { name: 'yellow' }],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Colors', {
      name: ['red', 'blue', 'yellow'],
    });
  },
};
