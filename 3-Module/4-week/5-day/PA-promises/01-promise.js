const makePromise = require('./test/pot-plant');

const addSoil = makePromise('addSoil');
const plantSeed = makePromise('plantSeed');
const growPlant = makePromise('growPlant');

/**
 * Do not change code above this line.
 * See README.md for instructions

 ******************************************************************************/
//? resolve("value in here").then(("becomesThisValue") => )

const potPlant = (seed) => {
  return addSoil()
    .then(() => plantSeed(seed))
    .then((plant) => growPlant(plant));
};

// const potPlant = async (seed) => {
//   await addSoil();
//   const plant = await plantSeed(seed);
//   const finalPlant = await growPlant(plant);
//   return finalPlant;
//   // return await growPlant(plant);
// };

// function potPlant(seed) {
//   return addSoil()
//     .then(() => {
//       return plantSeed(seed);
//     })
//     .then((res) => {
//       return growPlant(res);
//     });
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
    exports.potPlant = () => {
      throw e;
    };
  }
})(exports);
