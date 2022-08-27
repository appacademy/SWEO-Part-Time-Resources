'use strict';
const {Post, User} = require('../models')
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    const user = await User.findOne(
      {where : {
      username : 'Demo-lition'
    }})
    
    for await (let i of Array(10)){

      await user.createPost({
        body : "This is a test post"
      })
    }
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('Posts', null, {});
    //  await queryInterface.bulkDelete('Users', null, {});
  }
};
