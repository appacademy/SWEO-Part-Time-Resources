const { setupBefore, setupChai, removeTestDB, seedDBFile, undoAllSeeds, runSQLQuery, runSQL, getAllSeederFiles } = require('../utils/test-utils');
const chai = setupChai();
const expect = chai.expect;

describe('BONUS Seeder Specs - Fancy Colors', () => {
  let DB_TEST_FILE, models, server, seedFile;
  before(async () => {
    ({ server, models, DB_TEST_FILE } = await setupBefore(__filename));
    ([_, seedFile] = getAllSeederFiles());
  });
  after(async () => await removeTestDB(DB_TEST_FILE));

  it('commits fancy colors seeder file successfully', async () => {
    await expect(seedDBFile(seedFile, DB_TEST_FILE)).to.not.eventually.be.rejectedWith(Error);
  });

  it('has at least 1 entry in the Colors table after committing fancy color seeder file', async () => {
    const colors = await runSQLQuery("SELECT * FROM 'Colors' WHERE name NOT IN ('red', 'yellow', 'blue')", DB_TEST_FILE);
    expect(colors).to.have.lengthOf.at.least(1);
  });

  it('has a down function that deletes ONLY the colors created in the up function', async () => {
    await runSQL("INSERT INTO 'Colors'(name) VALUES ('test color')", DB_TEST_FILE);
    const colors = await runSQLQuery("SELECT * FROM 'Colors' WHERE name NOT IN ('red', 'yellow', 'blue')", DB_TEST_FILE);
    expect(colors).to.have.lengthOf.at.least(2);
    await expect(undoAllSeeds(DB_TEST_FILE)).to.not.eventually.be.rejectedWith(Error);
    const allColors = await runSQLQuery("SELECT * FROM 'Colors' WHERE name NOT IN ('red', 'yellow', 'blue')", DB_TEST_FILE);
    expect(allColors).to.have.lengthOf(1);
  });
});
