const { setupBeforeNoSeeds, setupChai, removeTestDB, getAllSeederFiles, seedDBFile, runSQLQuery } = require('./utils/test-utils');
const chai = setupChai();
const expect = chai.expect;

describe('Basic Phase 2 - INSERT Using Sequelize Queries', () => {
  let DB_TEST_FILE, models, server;
  before(async () => {
    ({ server, models, DB_TEST_FILE } = await setupBeforeNoSeeds(__filename))
    const [trees, insects] = getAllSeederFiles();
    await seedDBFile(trees, DB_TEST_FILE);
    await seedDBFile(insects, DB_TEST_FILE);
  });
  after(async () => await removeTestDB(DB_TEST_FILE));

  describe('POST /trees (valid requests)', () => {
    let newTreeResponse;
    let newTreeBody;

    it('successfully makes a post request to /trees', async () => {
      const reqBody = {
        "name": "My Big Tree",
        "location": "My Backyard",
        "height": 123.4,
        "size": 57.9
      };

      newTreeResponse = await chai.request(server)
        .post('/trees')
        .send(reqBody)

        expect(newTreeResponse).to.not.be.null;
        expect(newTreeResponse.status).to.be.within(200, 201);
        expect(newTreeResponse).to.be.json;
    });

    it('returns JSON response with status, message, and data attributes', async () => {
      newTreeBody = newTreeResponse.body

      expect(newTreeBody).to.be.an('object');
      expect(newTreeBody).to.have.own.property('status');
      expect(newTreeBody).to.have.own.property('message');
      expect(newTreeBody).to.have.own.property('data');
    });

    it('returns the correct new tree data', async () => {
      expect(newTreeBody.data).to.have.own.property('id');
      expect(newTreeBody.data.id).to.equal(6);
      expect(newTreeBody.data).to.have.own.property('tree');
      expect(newTreeBody.data.tree).to.equal('My Big Tree');
      expect(newTreeBody.data).to.have.own.property('location');
      expect(newTreeBody.data.location).to.equal('My Backyard');
      expect(newTreeBody.data).to.have.own.property('heightFt');
      expect(newTreeBody.data.heightFt).to.equal(123.4);
      expect(newTreeBody.data).to.have.own.property('groundCircumferenceFt');
      expect(newTreeBody.data.groundCircumferenceFt).to.equal(57.9);
      expect(newTreeBody.data).to.have.own.property('createdAt');
      expect(newTreeBody.data).to.have.own.property('updatedAt');
    });

    it('new tree was added to the database', async () => {
      const sqlResponse = await runSQLQuery("SELECT * FROM Trees WHERE tree = 'My Big Tree';", DB_TEST_FILE)
      expect(sqlResponse).to.be.an('array');
      expect(sqlResponse).to.have.length(1);
      expect(sqlResponse[0].id).to.equal(6);
    });
  });


  describe('POST /trees (invalid requests)', () => {

    it('can NOT add a tree with the name of a tree that was added previously', async () => {
      const reqBody = {
        "name": "General Sherman",
        "location": "A new location",
        "height": 375.9,
        "size": 134.2
      };

      const invalidNameTreeResponse = await chai.request(server)
        .post('/trees')
        .send(reqBody);

        expect(invalidNameTreeResponse).to.not.be.null;
        expect(invalidNameTreeResponse.status).to.equal(400);
        expect(invalidNameTreeResponse).to.be.json;
        expect(invalidNameTreeResponse.body).to.be.an('object');
        expect(invalidNameTreeResponse.body).to.have.own.property('status');
        expect(invalidNameTreeResponse.body).to.have.own.property('message');
        expect(invalidNameTreeResponse.body).to.have.own.property('details');
        expect(invalidNameTreeResponse.body).to.not.have.own.property('data');
        const sqlResponse = await runSQLQuery("SELECT * FROM Trees WHERE tree = 'General Sherman';", DB_TEST_FILE)
        expect(sqlResponse).to.be.an('array');
        expect(sqlResponse).to.have.length(1);
        expect(sqlResponse[0].id).to.equal(1);
    });

    it('can NOT add a tree without a name', async () => {
      const reqBody = {
        "name": null,
        "location": "Nowhere"
      };

      const invalidReqBodyResponse = await chai.request(server)
        .post('/trees')
        .send(reqBody)

        expect(invalidReqBodyResponse).to.not.be.null;
        expect(invalidReqBodyResponse.status).to.equal(400);
        expect(invalidReqBodyResponse).to.be.json;
        expect(invalidReqBodyResponse.body).to.be.an('object');
        expect(invalidReqBodyResponse.body).to.have.own.property('status');
        expect(invalidReqBodyResponse.body).to.have.own.property('message');
        expect(invalidReqBodyResponse.body).to.have.own.property('details');
        expect(invalidReqBodyResponse.body).to.not.have.own.property('data');


    });

    it('can NOT add a tree with invalid size measurements', async () => {
      const reqBody = {
        "name": "Another New Tree",
        "location": "Anywhere",
        "height": -123.4,
        "size": -57.9
      };

      const invalidSizeResponse = await chai.request(server)
        .post('/trees')
        .send(reqBody)

        expect(invalidSizeResponse).to.not.be.null;
        expect(invalidSizeResponse.status).to.equal(400);
        expect(invalidSizeResponse).to.be.json;
        expect(invalidSizeResponse.body).to.be.an('object');
        expect(invalidSizeResponse.body).to.have.own.property('status');
        expect(invalidSizeResponse.body).to.have.own.property('message');
        expect(invalidSizeResponse.body).to.have.own.property('details');
        expect(invalidSizeResponse.body).to.not.have.own.property('data');
    });
  });
});
