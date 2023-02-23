'use strict';

const { Band, Musician } = require('../models');
const { Op } = require('sequelize');

// Establish a single data source
// Reduces repetition in the code and facilitates maintenance/future changes
const bandMusicians = [
  {
    name: 'The Falling Box',
    musicians: [
      { firstName: 'Adam', lastName: 'Appleby' },
      { firstName: 'Anton', lastName: 'Martinovic' },
      { firstName: 'Wilson', lastName: 'Holt' }
    ]
  },
  {
    name: 'America The Piano',
    musicians: [
      { firstName: 'Marine', lastName: 'Sweet' },
      { firstName: 'Georgette', lastName: 'Kubo' }
    ]
  },
  {
    name: 'Loved Autumn',
    musicians: [
      { firstName: 'Aurora', lastName: 'Hase' }
    ]
  },
  {
    name: 'Playin Sound',
    musicians: [
      { firstName: 'Trenton', lastName: 'Lesley' },
      { firstName: 'Camila', lastName: 'Nenci' }
    ]
  },
  {
    name: 'The King River',
    musicians: [
      { firstName: 'Rosemarie', lastName: 'Affini' },
      { firstName: 'Victoria', lastName: 'Cremonesi' }
    ]
  }
]

module.exports = {
  up: async (queryInterface, Sequelize) => {
    for(let bandIdx = 0; bandIdx < bandMusicians.length; bandIdx++){
      const { name, musicians } = bandMusicians[bandIdx];
      const band = await Band.findOne({ where: { name } });
      for(let musicianIdx = 0; musicianIdx < musicians.length; musicianIdx++) {
        const musician = musicians[musicianIdx];
        // APPROACH ONE
        // =====================================================================
        // Use the create association method provided by the hasMany association
        // =====================================================================
        await band.createMusician(musician);
        // APPROACH TWO
        // =====================================================================
        // Create a new Musician with the band's id
        // =====================================================================
        // await Musician.create({ ...musician, bandId: band.id });
      }
    }
    
    // APPROACH THREE
    // =========================================================================
    // Convert the bandMusicians array into an array of just musician objects to
    // be used in the bulkInsert. Each Musician needs a bandId, so iterating 
    // over each entry of bandMusicians should include getting a reference to 
    // the band in order to extract its id and add it to each musician object.
    // =========================================================================
    // const musiciansList = [];
    // for(let i = 0; i < bandMusicians.length; i++){
    //   const bandData = bandMusicians[i];
    //   const band = await Band.findOne({ where: { name: bandData.name } });
    //   const musicians = bandData.musicians.map(musician => {
    //     return { ...musician, bandId: band.id }
    //   })
    //   musiciansList.push(...musicians);
    // }  
    // await queryInterface.bulkInsert('Musicians', musiciansList);

  },

  down: async (queryInterface, Sequelize) => {
    
    // APPROACH ONE
    // =========================================================================
    // Iterate over the bandMusicians array, then over the nested array of 
    // musicians, destroying each musician record as it is encountered.
    // =========================================================================
    for(let bandIdx = 0; bandIdx < bandMusicians.length; bandIdx++){
      const { musicians } = bandMusicians[bandIdx];
      for(let musicianIdx = 0; musicianIdx < musicians.length; musicianIdx++){
        await Musician.destroy({ where: musicians[musicianIdx] });
      }
    }

    // APPROACH TWO
    // =========================================================================
    // Convert the bandMusicians array into an array of just musician objects to
    // be used in the bulkDelete. The { firstName: ..., lastName: ... } format 
    // matches the format to be used in an [Op.or] comparison.
    // =========================================================================
    // const musiciansList = bandMusicians.reduce(
    //   (acc, band) => [...acc, ...band.musicians], 
    //   []
    // );
    
    // await queryInterface.bulkDelete('Musicians', {
    //   [Op.or]: musiciansList
    // });
  }
};
