// Phase 6
'use strict';

const { InsectTree } = require('../models');
const { Op } = require('sequelize');

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

    // Phase 6
    await InsectTree.bulkCreate([
      {
        insectId: 2,
        treeId: 3
      },
      {
        insectId: 2,
        treeId: 4
      },
      {
        insectId: 2,
        treeId: 6
      },
      {
        insectId: 2,
        treeId: 7
      },
      {
        insectId: 3,
        treeId: 7
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    // Phase 6
    await InsectTree.destroy({
      where: {
        [Op.or]: [
          {
            insectId: 2,
            treeId: 3
          },
          {
            insectId: 2,
            treeId: 4
          },
          {
            insectId: 2,
            treeId: 6
          },
          {
            insectId: 2,
            treeId: 7
          },
          {
            insectId: 3,
            treeId: 7
          },
        ]
      }
    });
  }
};

// Challenge:
// const { Insect, Tree} = require('../models');
// const { Op } = require('sequelize');

// const insectsTrees = [
//   {
//     insect: { name: "Western Pygmy Blue Butterfly" },
//     trees: [
//       { tree: "General Sherman" },
//       { tree: "General Grant" },
//       { tree: "Lincoln" },
//       { tree: "Stagg" },
//     ],
//   },
//   {
//     insect: { name: "Patu Digua Spider" },
//     trees: [
//       { tree: "Stagg" },
//     ],
//   },
// ]

// module.exports = {
//   up: async (queryInterface, Sequelize) => {
//     /**
//      * Add seed commands here.
//      *
//      * Example:
//      * await queryInterface.bulkInsert('People', [{
//      *   name: 'John Doe',
//      *   isBetaMember: false
//      * }], {});
//     */

//     // Phase 6
//     for (let i = 0; i < insectsTrees.length; i++) {
//       const data = insectsTrees[i];
//       const insect = await Insect.findOne({ where: data.insect });
//       const trees = await Tree.findAll({ where: { [Op.or]: data.trees } });
//       await insect.addTrees(trees);
//     }
//   },

//   down: async (queryInterface, Sequelize) => {
//     /**
//      * Add commands to revert seed here.
//      *
//      * Example:
//      * await queryInterface.bulkDelete('People', null, {});
//      */

//     // Phase 6
//     for (let i = 0; i < insectsTrees.length; i++) {
//       const data = insectsTrees[i];
//       const insect = await Insect.findOne({ where: data.insect });
//       const trees = await Tree.findAll({ where: { [Op.or]: data.trees } });
//       await insect.removeTrees(trees);
//     }
//   }
// };
