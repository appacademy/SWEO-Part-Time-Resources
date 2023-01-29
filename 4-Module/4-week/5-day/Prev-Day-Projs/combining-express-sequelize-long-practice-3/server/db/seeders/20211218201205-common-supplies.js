'use strict';

const { Op } = require('sequelize');

const commonSupplies = [
  {
    name: '#2 Pencil',
    category: 'Writing',
  },
  {
    name: 'Mechanical Pencil',
    category: 'Writing',
  },
  {
    name: 'Pen - Blue',
    category: 'Writing',
  },
  {
    name: 'Pen - Black',
    category: 'Writing',
  },
  {
    name: 'Safety Scissors',
    category: 'Cutting',
    handed: 'right',
  },
  {
    name: 'Safety Scissors',
    category: 'Cutting',
    handed: 'left',
  },
  {
    name: 'Large Eraser',
    category: 'Correcting',
  },
  {
    name: 'Highlighter - Yellow',
    category: 'Correcting',
  },
  {
    name: 'Highlighter - Blue',
    category: 'Correcting',
  },
  {
    name: 'Highlighter - Green',
    category: 'Correcting',
  },
  {
    name: 'Whiteout',
    category: 'Correcting',
  },
  {
    name: 'Glue Stick',
    category: 'Pasting',
  },
  {
    name: 'Transparent Tape',
    category: 'Pasting',
  },
  {
    name: 'Liquid Glue',
    category: 'Pasting',
  },
  {
    name: '1/2" Binder',
    category: 'Storage',
  },
  {
    name: '3/4" Binder',
    category: 'Storage',
  },
  {
    name: '1" Binder',
    category: 'Storage',
  },
  {
    name: 'Pocket Folder',
    category: 'Storage',
  },
  {
    name: 'Spiral Notebook - Small',
    category: 'Paper',
  },
  {
    name: 'Spiral Notebook - Medium',
    category: 'Paper',
  },
  {
    name: 'Loose Left Paper',
    category: 'Paper',
  },
  {
    name: 'Construction Paper',
    category: 'Paper',
  },
  {
    name: 'Hand Sanitizer',
    category: 'Cleanliness',
  },
  {
    name: 'Tissues',
    category: 'Cleanliness',
  },
  {
    name: 'Paper Towels',
    category: 'Cleanliness',
  },
];

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
    await queryInterface.bulkInsert('Supplies', commonSupplies);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Supplies', { [Op.or]: commonSupplies });
  }
};
