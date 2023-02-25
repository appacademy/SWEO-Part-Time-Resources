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
});
