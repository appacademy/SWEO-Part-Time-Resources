const chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../app');
chai.use(chaiHttp);
const expect = chai.expect;

const { resetDB, seedAllDB } = require('./utils/test-utils');

describe('Phase 6 Specs - Ordering', () => {
  before(async function () {
    await resetDB();
    return seedAllDB();
  });

  describe('GET /sports', () => {
    it('orders the results by name of the sport reverse alphabetically', async () => {
      await chai.request(server)
        .get('/sports')
        .then((res) => {
          expect(res).to.have.status(200);
          expect(res).to.be.json;
          expect(res.body).to.be.an('array');
          expect(res.body.map(sport => sport.id)).to.eql([
            1,
            3,
            2,
            4,
          ], 'Expected `id`s in the response array to match');
        });
    });
  });

  describe('GET /teams', () => {
    it('orders the results by homeCity alphabetically first then by name reverse alphabetically', async () => {
      await chai.request(server)
        .get('/teams')
        .then((res) => {
          expect(res).to.have.status(200);
          expect(res).to.be.json;
          expect(res.body).to.be.an('array');
          expect(res.body.map(team => team.id)).to.eql([
            12,
            4,
            9,
            2,
            7,
            8,
            1,
            3,
            6,
            11,
            5,
            10,
          ], 'Expected `id`s in the response array to match');
        });
    });
  });
});
