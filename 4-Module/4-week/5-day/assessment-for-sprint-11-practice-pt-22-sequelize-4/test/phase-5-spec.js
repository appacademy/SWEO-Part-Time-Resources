const chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../app');
chai.use(chaiHttp);
const expect = chai.expect;

const { resetDB, seedAllDB } = require('./utils/test-utils');

describe('Phase 5 Specs - Teams - Eager Loading', () => {
  before(async function () {
    await resetDB();
    return seedAllDB();
  });

  describe('GET /teams/:id', () => {
    it('returns the team specified by id with all its associated Sport(s)', async () => {
      let id = 7;
      await chai.request(server)
        .get(`/teams/${id}`)
        .then((res) => {
          expect(res).to.have.status(200);
          expect(res).to.be.json;
          expect(res.body).to.be.an('object');
          expect(res.body).to.have.property('Sport');
          expect(res.body.Sport.id).to.eq(3);
        });
    });

    it('returns the team specified by id with all its associated Player(s), listed under the property `TeamRoster`', async () => {
      let id = 7;
      await chai.request(server)
        .get(`/teams/${id}`)
        .then((res) => {
          expect(res).to.have.status(200);
          expect(res).to.be.json;
          expect(res.body).to.be.an('object');
          expect(res.body).to.have.property('TeamRoster');
          expect(res.body.TeamRoster.map(player => player.id)).to.eql([
            5,
            6,
            7,
          ], 'Expected `id`s in the `TeamRoster` array to match');
        });
    });
  });
});
