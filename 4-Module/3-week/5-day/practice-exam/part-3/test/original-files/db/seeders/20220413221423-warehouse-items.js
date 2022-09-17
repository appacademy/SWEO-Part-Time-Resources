'use strict';

const { WarehouseItem } = require('../models');

const validWarehouseItems = [
  {
    "name": "Paint",
    "price": 12.12,
    "quantity": 12,
    "isUsed": false,
  },
  {
    "name": "Wine Glass",
    "price": 10.10,
    "quantity": 10,
    "isUsed": true,
  },
  {
    "name": "Webcam",
    "price": 50.50,
    "quantity": 5,
    "isUsed": false,
  },
];

module.exports = {
  async up (queryInterface, Sequelize) {
    try {
      await WarehouseItem.bulkCreate(validWarehouseItems, {
        validate: true,
      });
    } catch (err) {
      console.log(err);
      throw err;
    }
  },

  async down (queryInterface, Sequelize) {
    for (let itemInfo of validWarehouseItems) {
      try {
        await WarehouseItem.destroy({
          where: itemInfo
        });
      } catch (err) {
        console.log(err);
        throw err;
      }
    }
  }
};