"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     */
    await queryInterface.bulkInsert(
      "Colors",
      [
        {
          name: "red",
        },
        {
          name: "blue",
        },
        {
          name: "yellow"
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     */
    await queryInterface.bulkDelete(
      "Colors",
      { name: ["red", "blue", "yellow"] },
      {}
    );
  },
};
