const AssertionError = require('assertion-error');
const chai = require('chai');
const makeCallback = require('./pot-plant');

expect = chai.expect;

class Plant {
  constructor(seed) {
    this.seed = seed;
    this.fullyGrown = false;
  }

  grow() {
    this.fullyGrown = true;
    return `${this.seed} plant has fully grown!`
  }

  isGrown() {
    return this.fullyGrown;
  }
}

describe('', () => {
  let seed = "Basil";
  let plant;
  let error;
  let result;
  let addSoilSpy, plantSeedSpy, growPlantSpy;
  before(async () => {
    addSoilSpy = makeCallback('addSoil', true)(Promise.resolve(true));
    plantSeedSpy = makeCallback('plantSeed', true)(true, (seed) => {
      plant = new Plant(seed);
      return Promise.resolve(plant);
    });
    growPlantSpy = makeCallback('growPlant', true)(true, (plant) => {
      if (plant) return plant.grow()
    });
    
    const { potPlant } = require('../01-promise');

    try {
      result = await potPlant(seed);
    } catch (e) {
      error = e;
    }
  });

  context('calls addSoil', () => {
    it('calls the addSoil function', async () => {
      if (error) throw error;
      try {
        expect(addSoilSpy).to.have.been.called();
      } catch (e) {
        throw new AssertionError(`Expected addSoil() to have been called`);
      }
    });

    it(`calls the plantSeed function with the given seed`, async () => {
      if (error) throw error;
      try {
        expect(plantSeedSpy).to.have.been.called.with(seed);
       } catch (e) {
        throw new AssertionError(`Expected plantSeed() to have been called with the given seed`);
      }
    });

    it('calls the growPlant function with the plant returned from the plantSeed function', async () => {
      if (error) throw error;
      try {
        expect(growPlantSpy).to.have.been.called.with(plant);
       } catch (e) {
        throw new AssertionError(`Expected growPlant() to have been called with the plant returned from the plantSeed function`);
      }
    });

    it('resolves to the resolved value of the growPlant function', async () => {
      if (error) throw error;
      expect(result).to.equal(`${seed} plant has fully grown!`);
    });
  });
});
