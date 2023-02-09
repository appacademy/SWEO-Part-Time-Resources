const chai = require('chai');
const chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);
const expect = chai.expect;

const { resetDB, seedAllDB } = require('./utils/test-utils');
const { Superhero } = require('../db/models');
const { validSuperheros } = require('../db/seeders/20220413205503-valid-superheros.js');

describe('Phase 2 Specs - Superheros', () => {
  beforeEach(function () {
    return resetDB();
  });

  it('commits all seeder files successfully', async () => {
    await expect(seedAllDB()).to.not.eventually.be.rejectedWith(Error);
    await resetDB();
    expect(validSuperheros.length).to.be.gte(5);
    await expect(Superhero.bulkCreate(validSuperheros, {
      validate: true,
    })).to.not.eventually.be.rejectedWith(Error);
  });

  it('has at least 5 entries in the Superheros table after committing all seeder files', async () => {
    await seedAllDB()
    const numSuperheros = await Superhero.count({});
    expect(numSuperheros).to.be.least(5);
  });
})