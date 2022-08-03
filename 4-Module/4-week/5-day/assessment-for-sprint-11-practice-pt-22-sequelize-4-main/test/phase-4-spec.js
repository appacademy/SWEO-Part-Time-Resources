const chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../app');
chai.use(chaiHttp);
const expect = chai.expect;

const { resetDB, seedAllDB } = require('./utils/test-utils');

const { DraftPick, Player } = require('../db/models');

describe('Phase 4 Specs - Fans', () => {
  before(async function () {
    await resetDB();
    return seedAllDB();
  });

  describe('GET /fans/:fanId/drafts', () => {
    let id = 2;
    it('returns the Players that the Fan specified by id has added to their DraftPicks', async () => {
      await chai.request(server)
        .get(`/fans/${id}/drafts`)
        .then((res) => {
          expect(res).to.have.status(200);
          expect(res).to.be.json;
          expect(res.body).to.be.an('array');
          expect(res.body.map(player => player.id)).to.eql([
           8,
           14,
           6,
           15,
          ], 'Expected `id`s in the response array to match');
        });
    });
  });

  describe('DELETE /fans/:fanId', () => {
    let id = 2;
    it('deletes the Fan specified by id, and deletes the DraftPicks associated with that Fan', async () => {
      await chai.request(server)
        .delete(`/fans/${id}`)
        .then((res) => {
          expect(res).to.have.status(200);
          expect(res).to.be.json;
          expect(res.body).to.be.an('object');
          expect(res.body).to.have.property('message');
        });

        const numDrafts = await DraftPick.count({
          where: {
            fanId: id
          }
        });
        expect(numDrafts).to.eq(0);
    });
  });

  describe('POST /teams/:id/players', () => {

    it('creates a new player in the Players table and associates it correctly with the Team specified by id', async () => {
      let id = 1;
      let reqBody = {
        'firstName': 'John',
        'lastName': 'Doe',
        'number': 13,
        'isRetired': 'false'
      };
      await chai.request(server)
        .post(`/teams/${id}/players`)
        .send(reqBody)
        .then((res) => {
          expect(res).to.have.status(200);
          expect(res).to.be.json;
          expect(res.body).to.be.an('object');
          expect(res.body).to.have.property('firstName');
          expect(res.body).to.have.property('lastName');
          expect(res.body).to.have.property('number');
          expect(res.body).to.have.property('isRetired');
          expect(res.body).to.have.property('currentTeamId');
          expect(res.body.currentTeamId).to.deep.equal(id);
        });

        const players = await Player.findAll({
          where: { currentTeamId: id }
        })
        expect(players.length).to.equal(2)
    });
  });

});
