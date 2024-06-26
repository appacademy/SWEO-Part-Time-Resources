const { setupBeforeNoSeeds, setupChai, removeTestDB, getAllSeederFiles, seedDBFile } = require('./utils/test-utils');
const chai = setupChai();
const expect = chai.expect;

describe('Basic Phase 3 - DELETE Using Sequelize Queries', () => {
  let DB_TEST_FILE, models, server;
  before(async () => {
    ({ server, models, DB_TEST_FILE } = await setupBeforeNoSeeds(__filename))
    const [trees, insects] = getAllSeederFiles();
    await seedDBFile(trees, DB_TEST_FILE);
    await seedDBFile(insects, DB_TEST_FILE);
  });
  after(async () => await removeTestDB(DB_TEST_FILE));

  describe('DELETE /trees/:id (valid requests)', () => {
    let newTree;

    before(async () => {
      const reqBody = {
        "name": "Tree to be deleted",
        "location": "My new Backyard",
        "height": 150,
        "size": 67.4
      };

      newTreeResponse = await chai.request(server)
        .post('/trees')
        .send(reqBody)

      newTree = await models.Tree.findOne({ where: {tree: "Tree to be deleted"}, raw: true})

    })

    it('deleted a tree by id', async () => {

        const allTreesBefore = await models.Tree.count()

        await chai.request(server)
            .delete(`/trees/${newTree.id}`)
            .then((res) => {
                expect(res).to.have.status(200);
                expect(res).to.be.json;
                expect(res.body).to.be.an('object')
                expect(res.body).to.have.property('status');
                expect(res.body.status).to.equal('success');
                expect(res.body).to.have.property('message');
                expect(res.body.message).to.equal(`Successfully removed tree ${newTree.id}`);

            });
        const allTreesAfter = await models.Tree.count()
        expect(allTreesAfter).to.equal(allTreesBefore - 1)
    });
  });


  describe('DELETE /trees/:id (invalid requests)', () => {

    it('cannot delete a tree that does not exist', async () => {

        const allTreesBefore = await models.Tree.count()

        let id = 17;
        await chai.request(server)
            .delete(`/trees/${id}`)
            .then((res) => {
                expect(res).to.have.status(400);
                expect(res).to.be.json;
                expect(res.body).to.be.an('object')
                expect(res.body).to.have.property('status');
                expect(res.body.status).to.equal('not-found');
                expect(res.body).to.have.property('message');
                expect(res.body.message).to.equal(`Could not remove tree ${id}`);
                expect(res.body).to.have.property('details');
                expect(res.body.details).to.equal('Tree not found');

            });
        const allTreesAfter = await models.Tree.count()
        expect(allTreesAfter).to.equal(allTreesBefore)
    });
  });
});
