const chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../app');
chai.use(chaiHttp);
const expect = chai.expect;

const { resetDB, seedAllDB } = require('./utils/test-utils');

describe('Phase 5 Specs - Eager Loading', () => {
  before(async function () {
    await resetDB();
    return seedAllDB();
  });

  describe('GET /sports/:name', () => {
    it('returns the sport specified by name with all its teams under a property of `Teams`', async () => {
      let name = 'Basketball'
      await chai.request(server)
        .get(`/sports/${name}`)
        .then((res) => {
          expect(res).to.have.status(200);
          expect(res).to.be.json;
          expect(res.body).to.be.an('object');
          expect(res.body).to.have.property('id');
          expect(res.body.id).to.eq(3);
          expect(res.body).to.have.property('Teams');
          expect(res.body.Teams.map(team => team.id)).to.eql([
            5,
            6,
            7,
            8,
          ], 'Expected `id`s in the `Teams` array to match');
        });
    });
  });

  describe('GET /teams/:id', () => {
    it('returns the team specified by id with all its associated Player(s)', async () => {
      let id = 7;
      await chai.request(server)
        .get(`/teams/${id}`)
        .then((res) => {
          expect(res).to.have.status(200);
          expect(res).to.be.json;
          expect(res.body).to.be.an('object');
          expect(res.body).to.have.property('Players');
          expect(res.body.Players.map(player => player.id)).to.eql([
            5,
            6,
            7,
          ], 'Expected `id`s in the `Players` array to match');
        });
    });
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
  });

  describe('GET /players/:id', () => {
    it('returns the player specified by id with its associated team under a property of `CurrentTeam`', async () => {
      let id = 1;
      await chai.request(server)
        .get(`/players/${id}`)
        .then((res) => {
          expect(res).to.have.status(200);
          expect(res).to.be.json;
          expect(res.body).to.be.an('object');
          expect(res.body).to.have.property('CurrentTeam');
          expect(res.body.CurrentTeam.name).to.eq('Manchester United');
          expect(res.body.CurrentTeam.id).to.eq(1);
        });
    });
  });
});