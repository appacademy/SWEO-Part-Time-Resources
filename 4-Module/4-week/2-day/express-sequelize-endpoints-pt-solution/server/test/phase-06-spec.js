const { setupChai, removeTestDB, setupBeforeNoSeeds, seedAllDB } = require('./utils/test-utils');
const chai = setupChai();
const expect = chai.expect;

describe('Intermediate Phase 6: Updating Foreign Key References in Seed Data', () => {
  let DB_TEST_FILE, models, server;
  before(async () => ({ server, models, DB_TEST_FILE } = await setupBeforeNoSeeds(__filename)));
  after(async () => await removeTestDB(DB_TEST_FILE));

  describe('Foreign key references in the seeder file offsets insect by 1 and tree by 2', () => {
    it('InsectTree join table includes required records from seeding', async () => {
      const ant = await models.Insect.create({
        name: 'Leafcutter Ant',
        description: 'Rust to dark-brown color',
        fact: 'Their life expectancy is 10-15 years.',
        territory: 'South and Central America',
        millimeters: 10
      });
      const kapok = await models.Tree.create({
        tree: 'Kapok',
        location: 'Arenal National Park',
        heightFt: 200,
        groundCircumferenceFt: 50
      });
      const rubber = await models.Tree.create({
        tree: 'Indian Rubber',
        location: 'Southeast Asia',
        heightFt: 100,
        groundCircumferenceFt: 105
      });
      await seedAllDB(DB_TEST_FILE);
      const insectTrees = (await models.InsectTree.findAll({
        order: ['id']
      }));
      const mappedInsectTrees = {};
      for (let i = 0; i < insectTrees.length; i++) {
        const insectTree = insectTrees[i];
        const insect = await models.Insect.findOne({
          where: { id: insectTree.insectId }
        });
        const tree = await models.Tree.findOne({
          where: { id: insectTree.treeId }
        });
        if (!(insect.name in mappedInsectTrees)) {
          mappedInsectTrees[insect.name] = [];
        }
        mappedInsectTrees[insect.name].push(tree.tree);
      }
      expect(mappedInsectTrees["Western Pygmy Blue Butterfly"].length).to.eq(4);
      expect(mappedInsectTrees["Western Pygmy Blue Butterfly"]).to.have.members([
        "General Grant",
        "General Sherman",
        "Lincoln",
        "Stagg"
      ]);
      expect(mappedInsectTrees["Patu Digua Spider"].length).to.eq(1);
      expect(mappedInsectTrees["Patu Digua Spider"]).to.have.members([
        "Stagg"
      ]);
    });
  });
});
