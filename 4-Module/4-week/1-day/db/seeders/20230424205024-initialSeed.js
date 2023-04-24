'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users', [
      { name: 'John' },
      { name: 'Jane' },
      { name: 'Mary' },
      { name: 'Kay' },
      { name: 'Selena' },
    ]);
    await queryInterface.bulkInsert('dogs', [
      {name: 'Poppy', user_id:1},
      {name: 'Chi-Chi', user_id:2},
      {name: 'Nonna', user_id:1},
      {name: 'June', user_id:3},
      {name: 'Jummpy', user_id:4},
      {name: 'Sven', user_id:5},
    ])
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', {
      name: ['John','Jane','Mary','Kay','Selena']
    });
    await queryInterface.bulkDelete('dogs', {
      user_id: [1, 2, 3, 4, 5]
    });
  }
};
