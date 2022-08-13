const makePromise = require('./test/pot-plant');

const addSoil = makePromise('addSoil');
const plantSeed = makePromise('plantSeed');
const growPlant = makePromise('growPlant');

/**
 * Do not change code above this line.
 * See README.md for instructions

 ******************************************************************************/

// Your code here
// Robert's solution
// async function potPlant(seed) {
//   const soil = await addSoil();
//   const plant = await plantSeed(seed);
//   const grow = await growPlant(plant);
//   return grow;
// }


async function potPlant(seed){
  await addSoil();
  const seedPlanted = await plantSeed(seed);
  const plantGrown = await growPlant(seedPlanted);
  return plantGrown;
}

// Christopher's solution using promise chaining
// function potPlant(seed){
//   return addSoil()
//     .then(()=>plantSeed(seed))
//     .then((seedPlanted)=> growPlant(seedPlanted));
// }

/*******************************************************************************
 * Do not change code below this line.
 */

if (!exports) {
  var exports = {};
}
(function (exports) {
  try {
    exports.potPlant = potPlant;
  } catch (e) {
    exports.potPlant = () => { throw e };
  }
})(exports);