'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'Colors',
      [
        {
          name: 'really red',
          createdAt: new Date('December 17, 1995 03:24:00'),
          updatedAt: new Date('December 17, 1995 03:24:00'),
        },
        {
          name: 'really blue',
          createdAt: new Date('December 17, 1995 03:24:00'),
          updatedAt: new Date('December 17, 1995 03:24:00'),
        },
        {
          name: 'really yellow',
          createdAt: new Date('December 17, 1995 03:24:00'),
          updatedAt: new Date('December 17, 1995 03:24:00'),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Colors', {
      name: ['really red', 'really blue', 'really yellow'],
    });
  },
};
