const chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../../app');
chai.use(chaiHttp);
const expect = chai.expect;

const { resetDB, seedAllDB } = require('../utils/test-utils');

describe('BONUS: Phase Specs - Matches', () => {
  before(async function () {
    await resetDB();
    return seedAllDB();
  });

  describe('BONUS: GET /matches/:id', () => {
    let id = 1;
    it('returns the Match specified by id along with its associated `HomeTeam`', async () => {
      await chai.request(server)
        .get(`/matches/${id}`)
        .then((res) => {
          expect(res).to.have.status(200);
          expect(res).to.be.json;
          expect(res.body).to.be.an('object');
          expect(res.body).to.have.property('HomeTeam');
          expect(res.body.HomeTeam.name).to.eq('Green Bay Packers');
          expect(res.body.HomeTeam.id).to.eq(9);
        });
    });
    it('returns the Match specified by id along its the associated `AwayTeam`', async () => {
      await chai.request(server)
        .get(`/matches/${id}`)
        .then((res) => {
          expect(res).to.have.status(200);
          expect(res).to.be.json;
          expect(res.body).to.be.an('object');
          expect(res.body).to.have.property('AwayTeam');
          expect(res.body.AwayTeam.name).to.eq('Tampa Bay Buccaneers');
          expect(res.body.AwayTeam.id).to.eq(10);
        });
    });
  });

  describe('CHALLENGE: GET /teams/:teamId/homeMatchesWon', () => {
    let id = 7;
    it('returns all the Matches where the Team specified by id won while being a HomeTeam', async () => {
      await chai.request(server)
        .get(`/teams/${id}/homeMatchesWon`)
        .then((res) => {
          expect(res).to.have.status(200);
          expect(res).to.be.json;
          expect(res.body).to.be.an('array');
          expect(res.body.map(match => match.id)).to.eql([
            2,
            4,
          ], 'Expected `id`s in the response array to match');
        });
    });
  });
});