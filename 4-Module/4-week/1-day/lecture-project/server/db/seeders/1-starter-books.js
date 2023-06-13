'use strict';

const { Op } = require('sequelize');
const { Book } = require('../models');

const books = [
  {
    title: 'Sense and Sensibility',
    readers: [
      { name: 'Alice', isAuthor: false},
      { name: 'Susan', isAuthor: false}
    ]
  },
  {
    title: 'Emma',
    readers: [
      { name: 'Bob', isAuthor: false},
      { name: 'Jacob', isAuthor: false}
    ]
  },
  {
    title: 'Pride and Prejudice',
    readers: [
      { name: 'Lisa', isAuthor: false},
      { name: 'Mary', isAuthor: true}
    ]
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

    for(let title in books){
      const book = await Book.findOne({where: {title}});

      for(let readerInfo of readers){
        await Reader.create({...readerInfo, bookId: book.id})
      }
    }

   
    try {
      await Reader.bulkCreate(readers, { validate: true});
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

    await queryInterface.bulkDelete('Readers', { [Op.or]: books })
  }
};
