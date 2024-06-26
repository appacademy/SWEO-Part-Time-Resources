const { setupBeforeNoSeeds, setupChai, removeTestDB, getAllSeederFiles, seedDBFile, runSQLQuery } = require('./utils/test-utils');
const chai = setupChai();
const expect = chai.expect;

describe('Intermediate Phase 4 - UPDATE Using Sequelize Queries', () => {
  let DB_TEST_FILE, models, server;
  before(async () => {
    ({ server, models, DB_TEST_FILE } = await setupBeforeNoSeeds(__filename))
    const [trees, insects] = getAllSeederFiles();
    await seedDBFile(trees, DB_TEST_FILE);
    await seedDBFile(insects, DB_TEST_FILE);
  });
  after(async () => await removeTestDB(DB_TEST_FILE));

  describe('PUT /trees/:id (valid requests)', () => {

    it('update a valid tree by id', async () => {

        const reqBody = {
            "id": 3,
            "name": "President-edit",
            "location": "Sequoia National Park-edit",
            "height": 240.91,
            "size": 93.1
        }

        await chai.request(server)
            .put(`/trees/${reqBody.id}`)
            .send(reqBody)
            .then((res) => {
                expect(res).to.have.status(200);
                expect(res).to.be.json;
                expect(res.body).to.be.an('object');
                expect(res.body).to.have.property('status');
                expect(res.body.status).to.equal('success');
                expect(res.body).to.have.property('message');
                expect(res.body.message).to.equal('Successfully updated tree');
                expect(res.body).to.have.property('data');

                expect(res.body.data.id).to.equal(reqBody.id);
                expect(res.body.data.tree).to.equal(reqBody.name);
                expect(res.body.data.location).to.equal(reqBody.location);
                expect(res.body.data.heightFt).to.equal(reqBody.height);
                expect(res.body.data.groundCircumferenceFt).to.equal(reqBody.size);
                expect(res.body.data).to.have.property('updatedAt');
                expect(res.body.data).to.have.property('createdAt');
            });
    });

    it('tree was updated in the database', async () => {
      const sqlResponse = await runSQLQuery("SELECT * FROM Trees WHERE id = 3;", DB_TEST_FILE)
      expect(sqlResponse).to.be.an('array');
      expect(sqlResponse).to.have.length(1);
      expect(sqlResponse[0].tree).to.equal("President-edit");
    });
  });


  describe('PUT /trees/:id (invalid requests)', () => {

    it('cannot update a tree that does not exist', async () => {

        const reqBody = {
            "id": 17,
            "name": "Invalid-edit",
            "location": "My backyard-edit",
            "height": 100,
            "size": 25
        }

        await chai.request(server)
            .put(`/trees/${reqBody.id}`)
            .send(reqBody)
            .then((res) => {
                expect(res).to.have.status(400);
                expect(res).to.be.json;
                expect(res.body).to.be.an('object');
                expect(res.body).to.have.property('status');
                expect(res.body.status).to.equal('not-found');
                expect(res.body).to.have.property('message');
                expect(res.body.message).to.equal(`Could not update tree ${reqBody.id}`);
                expect(res.body).to.have.property('details');
                expect(res.body.details).to.equal('Tree not found');
            });
    });

    it('handles request body ids and request params ids that do not match', async () => {
        const paramsId = 2

        const reqBody = {
            "id": 3,
            "name": "mismatch-edit",
            "location": "mismatch-edit",
            "height": 135,
            "size": 72
        }

        await chai.request(server)
            .put(`/trees/${paramsId}`)
            .send(reqBody)
            .then((res) => {
                expect(res).to.have.status(400);
                expect(res).to.be.json;
                expect(res.body).to.be.an('object');
                expect(res.body).to.have.property('status');
                expect(res.body.status).to.equal('error');
                expect(res.body).to.have.property('message');
                expect(res.body.message).to.equal('Could not update tree');
                expect(res.body).to.have.property('details');
                expect(res.body.details).to.equal(`${paramsId} does not match ${reqBody.id}`);
            });
    });

    it('invalid id requests do not update either database record', async () => {
      const sqlResponse1 = await runSQLQuery("SELECT * FROM Trees WHERE id = 3;", DB_TEST_FILE)
      expect(sqlResponse1).to.be.an('array');
      expect(sqlResponse1).to.have.length(1);
      expect(sqlResponse1[0].tree).to.not.equal("mismatch-edit");

      const sqlResponse2 = await runSQLQuery("SELECT * FROM Trees WHERE id = 2;", DB_TEST_FILE)
      expect(sqlResponse2).to.be.an('array');
      expect(sqlResponse2).to.have.length(1);
      expect(sqlResponse2[0].tree).to.not.equal("mismatch-edit");
    });
  });
});
