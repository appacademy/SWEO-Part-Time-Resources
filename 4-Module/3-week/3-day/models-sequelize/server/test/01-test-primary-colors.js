const { setupBefore, setupChai, removeTestDB, seedDBFile, undoAllSeeds, runSQL, runSQLQuery, getAllSeederFiles } = require('./utils/test-utils');
const chai = setupChai();
const expect = chai.expect;

describe('Seeder Specs - Primary Colors', () => {
  let DB_TEST_FILE, models, server, seedFile;
  before(async () => {
    ({ server, models, DB_TEST_FILE } = await setupBefore(__filename));
    ([seedFile] = getAllSeederFiles());
  });
  after(async () => await removeTestDB(DB_TEST_FILE));

  it('commits primary colors seeder file successfully', async () => {
    await expect(seedDBFile(seedFile, DB_TEST_FILE)).to.not.eventually.be.rejectedWith(Error);
  });

  it('has at least 3 entries in the Colors table after committing primary color seeder file', async () => {
    const colors = await runSQLQuery("SELECT * FROM 'Colors' WHERE name IN ('red', 'yellow', 'blue')", DB_TEST_FILE);
    expect(colors).to.have.lengthOf(3);
  });

  it('has a down function that deletes ONLY the three colors created in the up function', async () => {
    await runSQL("INSERT INTO 'Colors'(name) VALUES ('test color')", DB_TEST_FILE);
    await expect(undoAllSeeds(DB_TEST_FILE)).to.not.eventually.be.rejectedWith(Error);
    const colors = await runSQLQuery("SELECT * FROM 'Colors' WHERE name IN ('red', 'yellow', 'blue')", DB_TEST_FILE);
    expect(colors).to.have.lengthOf(0);
    const allColors = await runSQLQuery("SELECT * FROM 'Colors'", DB_TEST_FILE);
    expect(allColors).to.have.lengthOf(1);
  });
});
