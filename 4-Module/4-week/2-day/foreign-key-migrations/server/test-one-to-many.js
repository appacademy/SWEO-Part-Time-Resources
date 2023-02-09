require('dotenv').config();
const { removeTestDB, runMigrations, runSeeders } = require('./testUtils');
const { Band, Instrument, Musician } = require('./db/models');


(async () => {
  // Delete database if it exists and recreate by running migrations
  await removeTestDB();
  await runMigrations();
  await runSeeders();

  // TESTING ONE-TO-MANY
  console.log("TESTING ONE-TO-MANY\n====================")
  try {
    // Create Adam Appleby, member of The Falling Box
    let adam = Musician.build({firstName: 'Adam', lastName: 'Appleby'});
    let fallingBox = await Band.findOne({where: {name: 'The Falling Box'}});
    adam.bandId = fallingBox.id;
    await adam.save();

    // Find Adam's data including his band's data
    adam = await Musician.findByPk(adam.id, {include: Band})
    console.log("ADAM'S DATA (including associated band):")
    console.log(adam.toJSON());

    // Find all musician data (just Adam, but does not include band data)
    console.log("\nALL MUSICIANS (Expect only Adam's data):")
    let musicians = await Musician.findAll();
    musicians.forEach(musician => console.log(musician.toJSON()))
    
    console.log("\nDELETING BAND 'The Falling Box'")
    await fallingBox.destroy();
    
    // Test that deleting the band deleted Adam
    console.log("ALL MUSICIANS (No expected output):")
    musicians = await Musician.findAll();
    musicians.forEach(musician => console.log(musician.toJSON()))
  } catch (err) {
      console.error(err)
  }
})();