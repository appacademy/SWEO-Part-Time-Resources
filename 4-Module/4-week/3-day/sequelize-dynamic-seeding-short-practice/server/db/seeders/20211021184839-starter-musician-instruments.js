'use strict';

const { Musician, Instrument } = require('../models');
const { Op } = require('sequelize');

const musicianInstruments = [
  {
    musician: { firstName: 'Adam', lastName: 'Appleby' },
    instruments: [{ type: 'piano' }, { type: 'guitar' }]
  },
  {
    musician: { firstName: 'Anton', lastName: 'Martinovic' },
    instruments: [{ type: 'piano' }, { type: 'bass' }]
  },
  {
    musician: { firstName: 'Wilson', lastName: 'Holt' },
    instruments: [{ type: 'cello' }]
  },
  {
    musician: { firstName: 'Marine', lastName: 'Sweet' },
    instruments: [{ type: 'saxophone' }]
  },
  {
    musician: { firstName: 'Georgette', lastName: 'Kubo' },
    instruments: [{ type: 'drums' }, { type: 'trumpet' }, { type: 'saxophone' }]
  },
  {
    musician: { firstName: 'Aurora', lastName: 'Hase' },
    instruments: [{ type: 'violin' }, { type: 'cello' }]
  },
  {
    musician: { firstName: 'Trenton', lastName: 'Lesley' },
    instruments: [{ type: 'piano' }]
  },
  {
    musician: { firstName: 'Camila', lastName: 'Nenci' },
    instruments: [{ type: 'piano' }]
  },
  {
    musician: { firstName: 'Rosemarie', lastName: 'Affini' },
    instruments: [{ type: 'piano' }, { type: 'violin' }]
  },
  {
    musician: { firstName: 'Victoria', lastName: 'Cremonesi' },
    instruments: [{ type: 'violin' }]
  },
];

module.exports = {
  up: async (queryInterface, Sequelize) => {

    // APPROACH ONE
    // =========================================================================
    // Iterate over the musicianInstruments array and get a reference to the 
    // corresponding Musician and each Instrument. Use the add association 
    // method provided by Sequelize to connect these model instances.
    // =========================================================================
    for(let i = 0; i < musicianInstruments.length; i++) {
      const data = musicianInstruments[i];
      const musician =  await Musician.findOne({ where: data.musician });
      const instruments = await Instrument.findAll({ where: { [Op.or]: data.instruments } });
      await musician.addInstruments(instruments);
    }

    // APPROACH TWO
    // =========================================================================
    // Convert the musicianInstruments array into an array of objects 
    // representing records in the MusicianInstruments table. For each entry, 
    // query for the Musician and each Instrument, then iterate over the 
    // instruments to create a record for each combination. Use the bulkInsert 
    // to insert each of these records into the MusicianInstruments table 
    // directly.
    // =========================================================================
    // const musicianInstrumentRecords = [];
    // for(let i = 0; i < musicianInstruments.length; i++){
    //   const data = musicianInstruments[i];
    //   const musician = await Musician.findOne({ where: data.musician });
    //   const instruments = await Instrument.findAll({ where: { [Op.or]: data.instruments } });

    //   instruments.forEach(instrument => {
    //     musicianInstrumentRecords.push({ 
    //       musicianId: musician.id, 
    //       instrumentId: instrument.id 
    //     });
    //   });
    // };
    // await queryInterface.bulkInsert('MusicianInstruments', musicianInstrumentRecords);
  },

  down: async (queryInterface, Sequelize) => {
    // APPROACH ONE
    // =========================================================================
    // Iterate over the musicianInstruments array and get a reference to the 
    // corresponding Musician and each Instrument. Use the remove association 
    // method provided by Sequelize to destroy the record in the join table that 
    // associates these model instances.
    // =========================================================================
    for(let i = 0; i < musicianInstruments.length; i++) {
      const data = musicianInstruments[i];
      const musician =  await Musician.findOne({ where: data.musician });
      const instruments = await Instrument.findAll({ where: { [Op.or]: data.instruments } });
      await musician.removeInstruments(instruments);
    }

    // APPROACH TWO
    // =========================================================================
    // Convert the musicianInstruments array into an array of objects 
    // representing records in the MusicianInstruments table. For each entry, 
    // query for the Musician and each Instrument, then iterate over the 
    // instruments to create a record for each combination. Use the bulkDelete 
    // to delete each of these records from the MusicianInstruments table 
    // directly.
    // =========================================================================
    // const musicianInstrumentRecords = [];
    // for(let i = 0; i < musicianInstruments.length; i++){
    //   const data = musicianInstruments[i];
    //   const musician = await Musician.findOne({ where: data.musician });
    //   const instruments = await Instrument.findAll({ where: { [Op.or]: data.instruments } });

    //   instruments.forEach(instrument => {
    //     musicianInstrumentRecords.push({ 
    //       musicianId: musician.id, 
    //       instrumentId: instrument.id 
    //     });
    //   });
    // };
    // await queryInterface.bulkDelete('MusicianInstruments', {
    //   [Op.or]: musicianInstrumentRecords
    // });
  }
};
