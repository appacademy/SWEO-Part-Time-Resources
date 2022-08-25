"use strict";

const { commerce } = require("faker");

function random100() {
  return Math.floor(Math.random() * 100) + 1;
}

function randomImage() {
  const images = [
    "/images/pokemon_berry.svg",
    "/images/pokemon_egg.svg",
    "/images/pokemon_potion.svg",
    "/images/pokemon_super_potion.svg",
  ];
  const index = Math.floor(Math.random() * images.length);
  return images[index];
}

function* generateItems() {
  for (let pokemonId = 1; pokemonId <= 125; pokemonId += 1) {
    for (let i = 0; i < 3; i += 1) {
      yield {
        pokemonId,
        name: commerce.productName(),
        price: random100(),
        happiness: random100(),
        imageUrl: randomImage(),
      };
    }
  }
}

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert("Items", [...generateItems()]);
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete("Items");
  },
};