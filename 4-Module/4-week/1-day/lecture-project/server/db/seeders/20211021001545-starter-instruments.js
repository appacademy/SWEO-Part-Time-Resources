'use strict';

const { Op } = require('sequelize');
const { Book } = require('../models');

const books = [
  {
    title: 'Anne of Green Gables',
    Author: {
      
    }
  }
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

    for(let type in instruments){
      const instrument = await Instrument.findOne({where: {type}});

      for(let band of list){
        await Band.create({...band, instrumentId: instrument.id})
      }
    }

   
    try {
      await Instrument.bulkCreate(instruments, { validate: true});
    } catch(err) {
      console.error(err);
      throw err;
    };
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    await queryInterface.bulkDelete('Instruments', { [Op.or]: instruments })
  }
};
