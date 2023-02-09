require('dotenv').config();
const { removeTestDB, runMigrations, runSeeders } = require('./testUtils');
const { Band, Instrument, Musician } = require('./db/models');


(async () => {
  // Delete database if it exists and recreate by running migrations
  await removeTestDB();
  await runMigrations();
  await runSeeders();

  // TESTING MANY-TO-MANY
  console.log("TESTING MANY-TO-MANY\n====================");
  try {
    // Create Adam Appleby, member of The Falling Box
    let adam = Musician.build({firstName: 'Adam', lastName: 'Appleby'});
    let fallingBox = await Band.findOne({where: {name: 'The Falling Box'}});
    adam.bandId = fallingBox.id;
    await adam.save();

    // Create Anton Martinovic, member of The Falling Box
    let anton = Musician.build({firstName: 'Anton', lastName: 'Martinovic'});
    anton.bandId = fallingBox.id;
    await anton.save();

    // Create Wilson Holt, member of The Falling Box
    let wilson = Musician.build({firstName: 'Wilson', lastName: 'Holt'});
    wilson.bandId = fallingBox.id;
    await wilson.save();

    // Create Marine Sweet, member of America The Piano
    let marine = Musician.build({firstName: 'Marine', lastName: 'Sweet'});
    let america = await Band.findOne({where: {name: 'America The Piano'}});
    marine.bandId = america.id;
    await marine.save();

    // Create Georgette Kubo, member of America The Piano
    let georgette = Musician.build({firstName: 'Georgette', lastName: 'Kubo'});
    georgette.bandId = america.id;
    await georgette.save();

    // Associate Adam with piano and guitar
    await adam.addInstruments(await Instrument.findAll({
      where: {type: ['piano', 'guitar']}
    }));
    // Associate Anton with piano and bass
    await anton.addInstruments(await Instrument.findAll({
      where: {type: ['piano', 'bass']}
    }));
    // Associate Wilson with cello
    await wilson.addInstruments(await Instrument.findAll({
      where: {type: ['cello']}
    }));
    // Associate Marine with saxophone
    await marine.addInstruments(await Instrument.findAll({
      where: {type: ['saxophone']}
    }));
    // Associate Georgette with drums, trumpet, and saxophone
    await georgette.addInstruments(await Instrument.findAll({
      where: {type: ['drums', 'trumpet', 'saxophone']}
    }));

    // Find all musicians that play the saxophone
    // Tests Instruments belongToMany Musicians
    console.log("ALL SAXOPHONISTS");
    console.log("(Expect Georgette and Marine):");
    let saxophone = await Instrument.findOne({where: {type: 'saxophone'}})
    let saxophonists = await saxophone.getMusicians({
      attributes: ['id', 'firstName', 'lastName'], 
      order: [['firstName']], 
      includeIgnoreAttributes: false
    });
    saxophonists.forEach(musician => console.log(musician.toJSON()));

    // Find all instruments played by Georgette
    // Tests Musicians belongToMany Instruments
    console.log("\nALL INSTRUMENTS PLAYED BY GEORGETTE");
    console.log("(Expect drums, saxophone, and trumpet):");
    let georgetteInst = await georgette.getInstruments({
      attributes: ['id', 'type'], 
      order: [['type']], 
      includeIgnoreAttributes: false
    });
    georgetteInst.forEach(instrument => console.log(instrument.toJSON()));

    // Find Instruments played by members of The Falling Box
    // Tests Instruments belongToMany Musicians, which belongTo a Band
    console.log("\nINSTRUMENTS PLAYED BY MEMBERS OF THE FALLING BOX");
    console.log("(Expect bass, cello, guitar, and piano):");
    let fallingInstruments = await Instrument.findAll({ 
      where: {'$Musicians.Band.name$': 'The Falling Box'},
      attributes: ['id', 'type'],
      include: [{
        model: Musician,
        attributes: [],
        include: [{
          model: Band
        }],
      }],
      order: ['type']
    });
    fallingInstruments.forEach(instrument => console.log(instrument.toJSON()));
  } catch (err) {
      console.error(err);
  }
})();