const { setupBeforeNoSeeds, setupChai, removeTestDB, getAllSeederFiles, seedDBFile } = require('./utils/test-utils');
const chai = setupChai();
const expect = chai.expect;

describe('Intermediate Phase 5: Join Table & Associations', () => {
  let DB_TEST_FILE, models, server;
  before(async () => {
    ({ server, models, DB_TEST_FILE } = await setupBeforeNoSeeds(__filename))
    const [trees, insects] = getAllSeederFiles();
    await seedDBFile(trees, DB_TEST_FILE);
    await seedDBFile(insects, DB_TEST_FILE);
  });
  after(async () => await removeTestDB(DB_TEST_FILE));

  describe('Many to Many Association between Insect and Tree', () => {

    it('can properly associate insect with tree', async () => {

        const beforeInsectTreeCount = await models.InsectTree.count()

        let grant = await models.Tree.findOne ({
            where: { tree: "General Grant"}
        });

        const insect1 = models.Insect.build({name: "new insect", millimeters: 1.3});
        await insect1.save()

        const beforeGrantInsects = await grant.getInsects();
        const beforeGrantInsectsCount = beforeGrantInsects.length

        expect(beforeGrantInsects).to.be.an('array');
        expect(beforeGrantInsects).to.have.length(beforeGrantInsectsCount);

        grant.addInsects(await models.Insect.findAll({
            where: { name: "new insect" }
        }));

        grant = await models.Tree.findOne ({
            where: { tree: "General Grant"}
        });

        const afterGrantInsects = await grant.getInsects();
        const afterInsectTreeCount = await models.InsectTree.count()

        expect(afterGrantInsects).to.be.an('array');
        expect(afterGrantInsects).to.have.length(beforeGrantInsectsCount + 1);
        expect(afterInsectTreeCount).to.equal(beforeInsectTreeCount + 1);
    });

    it('can properly associate tree with insect', async () => {

        const beforeInsectTreeCount = await models.InsectTree.count()

        let insect2 = models.Insect.build({name: "second new insect", millimeters: 1.3});
        await insect2.save()

        const beforeInsectTrees = await insect2.getTrees();
        const beforeInsectTreesLength = beforeInsectTrees.length


        expect(beforeInsectTrees).to.be.an('array');
        expect(beforeInsectTrees).to.have.length(beforeInsectTreesLength);

        insect2.addTrees(await models.Tree.findAll({
            where: { tree: "Lincoln" }
        }));

        insect2 = await models.Insect.findOne ({
            where: { name: "second new insect"}
        });

        const afterInsectTrees = await insect2.getTrees();
        const afterInsectTreeCount = await models.InsectTree.count()

        expect(afterInsectTrees).to.be.an('array');
        expect(afterInsectTrees).to.have.length(beforeInsectTreesLength + 1);
        expect(afterInsectTreeCount).to.equal(beforeInsectTreeCount + 1);
    });
  });
});
