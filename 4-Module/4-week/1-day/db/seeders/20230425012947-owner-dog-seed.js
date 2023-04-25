'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Owners', [
      {name: 'John'},  {name: 'Edith'},
      {name: 'Greg'},  {name: 'Forrest'},
      {name: 'Alex'},  {name: 'Jeff'},
      {name: 'Jamie'}, {name: 'Cheryn'},
      {name: 'Mike'},  {name: 'Chris'},
    ]);
    await queryInterface.bulkInsert('Dogs', [
      {name: 'Poppy', ownerId: 1}, {name: 'Spot', ownerId: 6},
      {name: 'Duchess', ownerId: 2}, {name: 'Ladybird', ownerId: 5},
      {name: 'Yoshi', ownerId: 3}, {name: 'Marmaduke', ownerId: 4},
      {name: 'Duke', ownerId: 2}, {name: 'Airbud', ownerId: 7},
      {name: 'Hank', ownerId: 1}, {name: 'Toto', ownerId: 8},
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Owners', {
      name: ['John', 'Edith', 'Greg', 'Forrest', 'Alex', 'Jeff', 'Jamie', 'Cheryn', 'Mike', 'Chris']
    });
    await queryInterface.bulkDelete('Dogs', {
      ownerId: [1,2,3,4,5,6,7,8,9,10]
    });
  }
};
