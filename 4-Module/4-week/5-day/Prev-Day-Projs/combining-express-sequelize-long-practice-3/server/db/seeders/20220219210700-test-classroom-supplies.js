'use strict';

const { Supply, Classroom } = require('../models');
const { Op } = require('sequelize');

const supplyIndices = [
  [0, 0, 0, 2, 4, 5, 6, 7, 11, 14, 17, 17, 17, 20, 21, 22],
  [0, 1, 2, 3, 8, 9, 10, 12, 13, 15, 17, 19, 21, 23],
  [0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 16, 18, 19, 23],
]

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

    const commonSupplies = await Supply.findAll();

    const classrooms = await Classroom.findAll();

    for (let i = 0; i < classrooms.length; i++) {
      const cr = classrooms[i];

      // cycle through the supply combinations (in supplyIndices)
      // to choose one (using mod, a.k.a. %)
      // and build list of new supplies for this classroom
      const supplyList = supplyIndices[i % supplyIndices.length]
        .map(index => {
          // generic supply in case index is out of range for common supplies seed data
          const item = { name: `Other Supply ${index + 1}`, category: 'Other' };
          if (index < commonSupplies.length) {
            item.name = commonSupplies[index].dataValues.name;
            item.category = commonSupplies[index].dataValues.category;
            if (commonSupplies[index].dataValues.handed) {
              item.handed = commonSupplies[index].dataValues.handed;
            }
          }
          return item;
        });

      // add supply list to current classroom
      for (let j = 0; j < supplyList.length; j++) {
          await cr.createSupply(supplyList[j]);
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
  }
};
