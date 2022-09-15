'use strict';
const { Op } = require("sequelize");
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
    await queryInterface.bulkInsert('Colors', [
      {name: "red"},
      {name: "blue"},
      {name: "yellow"},
    ])
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('Colors', null);
    //  await queryInterface.bulkDelete('Colors', {
    //     [Op.or]: {
    //       name: ["red", "blue"],  
    //     }
    //  });
  }
};
