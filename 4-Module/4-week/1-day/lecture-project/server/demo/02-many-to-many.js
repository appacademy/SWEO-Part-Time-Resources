const demo = async () => {
  const { Band, Instrument, Musician, sequelize } = require('../db/models');
  sequelize.options.logging = false;

  // TESTING MANY-TO-MANY
  console.log("====================\nTESTING MANY-TO-MANY\n====================");
  try {
    console.log("\n-- QUERYING: All Musicians (no output expected) --");
    let musicians = await Musician.findAll();
    musicians.forEach(musician => console.log(musician.toJSON()));

    // Create Adam Appleby, member of The Falling Box
    console.log("\n-- INSERTING: Adam the musician as a member of 'The Falling Box' band --");
    let adam = Musician.build({firstName: 'Adam', lastName: 'Appleby'});
    let fallingBox = await Band.findOne({where: {name: 'The Falling Box'}});
    adam.bandId = fallingBox.id;
    await adam.save();

    // Create Anton Martinovic, member of The Falling Box
    console.log("\n-- INSERTING: Anton the musician as a member of 'The Falling Box' band --");
    let anton = Musician.build({firstName: 'Anton', lastName: 'Martinovic'});
    anton.bandId = fallingBox.id;
    await anton.save();

    // Create Wilson Holt, member of The Falling Box
    console.log("\n-- INSERTING: Wilson the musician as a member of 'The Falling Box' band --");
    let wilson = Musician.build({firstName: 'Wilson', lastName: 'Holt'});
    wilson.bandId = fallingBox.id;
    await wilson.save();

    // Create Marine Sweet, member of America The Piano
    console.log("\n-- INSERTING: Marine the musician as a member of 'America The Piano' band --");
    let marine = Musician.build({firstName: 'Marine', lastName: 'Sweet'});
    let america = await Band.findOne({where: {name: 'America The Piano'}});
    marine.bandId = america.id;
    await marine.save();

    // Create Georgette Kubo, member of America The Piano
    console.log("\n-- INSERTING: Georgette the musician as a member of 'America The Piano' band --");
    let georgette = Musician.build({firstName: 'Georgette', lastName: 'Kubo'});
    georgette.bandId = america.id;
    await georgette.save();

    // Associate Adam with piano and guitar
    console.log("\n-- INSERTING: Instruments for Adam --");
    await adam.addInstruments(await Instrument.findAll({
      where: {type: ['piano', 'guitar']}
    }));
    // Associate Anton with piano and bass
    console.log("\n-- INSERTING: Instruments for Anton --");
    await anton.addInstruments(await Instrument.findAll({
      where: {type: ['piano', 'bass']}
    }));
    // Associate Wilson with cello
    console.log("\n-- INSERTING: Instruments for Wilson --");
    await wilson.addInstruments(await Instrument.findAll({
      where: {type: ['cello']}
    }));
    // Associate Marine with saxophone
    console.log("\n-- INSERTING: Instruments for Marine --");
    await marine.addInstruments(await Instrument.findAll({
      where: {type: ['saxophone']}
    }));
    // Associate Georgette with drums, trumpet, and saxophone
    console.log("\n-- INSERTING: Instruments for Georgette --");
    await georgette.addInstruments(await Instrument.findAll({
      where: {type: ['drums', 'trumpet', 'saxophone']}
    }));

    // Find all musicians that play the saxophone
    // Tests Instruments belongToMany Musicians
    console.log("\n-- QUERYING: All Musicians that play the 'saxophone' Instrument --");
    console.log("(Expect only Georgette and Marine)");
    let saxophone = await Instrument.findOne({where: {type: 'saxophone'}})
    let saxophonists = await saxophone.getMusicians({
      attributes: ['id', 'firstName', 'lastName'],
      order: [['firstName']],
      includeIgnoreAttributes: false
    });
    saxophonists.forEach(musician => console.log(musician.toJSON()));

    // Find all instruments played by Georgette
    // Tests Musicians belongToMany Instruments
    console.log("\n-- QUERYING: All Instruments played by Georgette --");
    console.log("(Expect only drums, saxophone, and trumpet)");
    let georgetteInst = await georgette.getInstruments({
      attributes: ['id', 'type'],
      order: [['type']],
      includeIgnoreAttributes: false
    });
    georgetteInst.forEach(instrument => console.log(instrument.toJSON()));

    // Find Instruments played by members of The Falling Box
    // Tests Instruments belongToMany Musicians, which belongTo a Band
    console.log("\n-- QUERYING: All Instruments played by members of 'The Falling Box' band --");
    console.log("(Expect only bass, cello, guitar, and piano)");
    let fallingInstruments = await Instrument.findAll({
      attributes: ['id', 'type'],
      include: [{
        model: Musician,
        attributes: [],
        include: [{
          model: Band,
          where: { name: 'The Falling Box'}
        }],
        required: true
      }],
      order: ['type']
    });
    fallingInstruments.forEach(instrument => console.log(instrument.toJSON()));
  } catch (err) {
      console.error(err);
  }
};

if (require.main === module) {
  require('dotenv').config();
  const { resetDB, seedAllDB } = require('../test/utils/test-utils');
  (async () => {
    await resetDB("db/dev.db");
    await seedAllDB("db/dev.db");
    await demo();
  })();
} else {
  module.exports = demo;
}