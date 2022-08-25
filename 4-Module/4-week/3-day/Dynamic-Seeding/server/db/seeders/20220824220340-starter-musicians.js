'use strict';

const { Band, Musician } = require('../models');

const bandMusicians = [
  {
    name: 'The Falling Box',
    musicians: [
      { firstName: 'Adam', lastName: 'Appleby' },
      { firstName: 'Anton', lastName: 'Martinovic' },
      { firstName: 'Wilson', lastName: 'Holt' },
    ],
  },
  {
    name: 'America The Piano',
    musicians: [
      { firstName: 'Marine', lastName: 'Sweet' },
      { firstName: 'Georgette', lastName: 'Kubo' },
    ],
  },
  {
    name: 'Loved Autumn',
    musicians: [{ firstName: 'Aurora', lastName: 'Hase' }],
  },
  {
    name: 'Playin Sound',
    musicians: [
      { firstName: 'Trenton', lastName: 'Lesley' },
      { firstName: 'Camila', lastName: 'Nenci' },
    ],
  },
  {
    name: 'The King River',
    musicians: [
      { firstName: 'Rosemarie', lastName: 'Affini' },
      { firstName: 'Victoria', lastName: 'Cremonesi' },
    ],
  },
];

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // for (let i = 0; i < bandMusicians.length; i++) {
    // 	const bandObj = bandMusicians[i]
    // }
    // const band = await Band.findOne({ where: { name: name } });
    for (const bandObj of bandMusicians) {
      const { name, musicians } = bandObj;
      const band = await Band.findOne({ where: { name } });

      for (const musicObj of musicians) {
        band.createMusician(musicObj);
      }
    }
  },

  down: async (queryInterface, Sequelize) => {
    // Musician.destroy({
    // 	where: { firstName: musicObj.firstName, lastName: musicObj.lastName },
    // });
    for (const bandObj of bandMusicians) {
      const { musicians } = bandObj;

      for (const musicObj of musicians) {
        Musician.destroy({ where: musicObj });
      }
    }
  },
};
