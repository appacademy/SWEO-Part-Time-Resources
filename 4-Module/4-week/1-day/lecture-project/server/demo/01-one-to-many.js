const demo = async () => {
  const { Band, Musician, sequelize } = require('../db/models');
  sequelize.options.logging = false;

  // TESTING ONE-TO-MANY
  console.log("====================\nTESTING ONE-TO-MANY\n====================");
  try {
    console.log("\n-- QUERYING: All Musicians (no output expected) --");
    let musicians = await Musician.findAll();
    musicians.forEach(musician => console.log(musician.toJSON()));

    // Create Adam Appleby, member of The Falling Box
    console.log("\n-- INSERTING: Adam the musician as a member of 'The Falling Box' band --");
    let adam = Musician.build({ firstName: 'Adam', lastName: 'Appleby' });
    let fallingBox = await Band.findOne({where: {name: 'The Falling Box'}});
    adam.bandId = fallingBox.id;
    await adam.save();

    // Find Adam's data including his band's data
    adam = await Musician.findByPk(adam.id, {include: Band});
    console.log("\n-- QUERYING: Adam's data (including associated band) --")
    console.log(adam.toJSON());

    // Find all musician data (just Adam, but does not include band data)
    console.log("\n-- QUERYING: All Musicians --");
    console.log("(Only Adam's data should be displayed)");
    musicians = await Musician.findAll();
    musicians.forEach(musician => console.log(musician.toJSON()))

    console.log("\n-- DELETING: 'The Falling Box' band with all associated musicians --");
    await fallingBox.destroy();

    // Test that deleting the band deleted Adam
    console.log("\n-- QUERYING: All Musicians (no output expected) --");
    musicians = await Musician.findAll();
    musicians.forEach(musician => console.log(musician.toJSON()));
  } catch (err) {
      console.error(err)
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