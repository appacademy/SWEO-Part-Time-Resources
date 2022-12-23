const chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../app');
chai.use(chaiHttp);
const expect = chai.expect;

const { resetDB, seedAllDB } = require('./utils/test-utils');

describe('Phase 7 Specs - GET /players', () => {
  before(async function () {
    await resetDB();
    return seedAllDB();
  });

  describe('has a search filter for the firstName attribute of a player', () => {
    context("if firstName parameter is 'Aaron'", () => {
      it("filters player results to have a firstName attribute of 'Aaron'", async () => {
        await chai.request(server)
          .get('/players?firstName=Aaron')
          .then((res) => {
            expect(res).to.have.status(200);
            expect(res).to.be.json;
            expect(res.body).to.be.an('object');
            expect(res.body).to.have.own.property('players');
            expect(res.body.players.map(player => player.id)).to.eql([
              2,
              10,
            ], 'Expected `id`s in the `players` array to match');
          });
      });
    });
    context("if firstName parameter is 'aaron'", () => {
      it("filters player results to have a firstName attribute of 'Aaron'", async () => {
        await chai.request(server)
          .get('/players?firstName=aaron')
          .then((res) => {
            expect(res).to.have.status(200);
            expect(res).to.be.json;
            expect(res.body).to.be.an('object');
            expect(res.body).to.have.own.property('players');
            expect(res.body.players.map(player => player.id)).to.eql([
              2,
              10,
            ], 'Expected `id`s in the `players` array to match');
          });
      });
    });
    context("if firstName parameter is ''", () => {
      it("returns a 400 response with errors", async () => {
        await chai.request(server)
          .get('/players?firstName=')
          .then((res) => {
            expect(res).to.have.status(400);
            expect(res).to.be.json;
            expect(res.body).to.be.an('object');
            expect(res.body).to.have.own.property('errors');
          });
      });
    });
  });

  describe('has a search filter for the number attribute of a player', () => {
    context('if number is not a number or not an integer', () => {
      it("returns a 400 response with errors", async () => {
        await chai.request(server)
          .get('/players?number=hello')
          .then((res) => {
            expect(res).to.have.status(400);
            expect(res).to.be.json;
            expect(res.body).to.be.an('object');
            expect(res.body).to.have.own.property('errors');
          });
      });
    });
    context('if number is less than 0', () => {
      it("returns a 400 response with errors", async () => {
        await chai.request(server)
          .get('/players?number=-1')
          .then((res) => {
            expect(res).to.have.status(400);
            expect(res).to.be.json;
            expect(res.body).to.be.an('object');
            expect(res.body).to.have.own.property('errors');
          });
      });
    });
    context('if number is an integer greater than or equal to 0', () => {
      it("filters player results by a number attribute of 0 if number filter is '0'", async () => {
        await chai.request(server)
          .get('/players?number=0')
          .then((res) => {
            expect(res).to.have.status(200);
            expect(res).to.be.json;
            expect(res.body).to.be.an('object');
            expect(res.body).to.have.own.property('players');
            expect(res.body.players.map(player => player.id)).to.eql([
              7,
            ], 'Expected `id`s in the `players` array to match');
          });
      });
      it("filters player results by a number attribute of 12 if number filter is '12'", async () => {
        await chai.request(server)
          .get('/players?number=12')
          .then((res) => {
            expect(res).to.have.status(200);
            expect(res).to.be.json;
            expect(res.body).to.be.an('object');
            expect(res.body).to.have.own.property('players');
            expect(res.body.players.map(player => player.id)).to.eql([
              10,
              11,
            ], 'Expected `id`s in the `players` array to match');
          });
      });
    });
  });

  describe('paginates the results by optional page and size query parameters', () => {
    context('if page parameter is 2 and size parameter is 3', () => {
      it('adds page and size values to the response body', async () => {
        await chai.request(server)
          .get('/players?page=2&size=3')
          .then((res) => {
            expect(res).to.have.status(200);
            expect(res).to.be.json;
            expect(res.body).to.be.an('object');
            expect(res.body).to.have.own.property('page');
            expect(res.body.page).to.eq(2);
            expect(res.body).to.have.own.property('size');
            expect(res.body.size).to.eq(3);
          });
      });
      it('paginates the results with a page of 2 and size of 3', async () => {
        await chai.request(server)
          .get('/players?page=2&size=3')
          .then((res) => {
            expect(res).to.have.status(200);
            expect(res).to.be.json;
            expect(res.body).to.be.an('object');
            expect(res.body).to.have.own.property('players');
            expect(res.body.players.map(player => player.id)).to.eql([
              4,
              5,
              6,
            ], 'Expected `id`s in the `players` array to match');
          });
      });
    });
    context('if page parameter is undefined', () => {
      it('paginates the results with a default page of 1', async () => {
        await chai.request(server)
          .get('/players?size=3')
          .then((res) => {
            expect(res).to.have.status(200);
            expect(res).to.be.json;
            expect(res.body).to.be.an('object');
            expect(res.body).to.have.own.property('players');
            expect(res.body.players.map(player => player.id)).to.eql([
              1,
              2,
              3,
            ], 'Expected `id`s in the `players` array to match');
          });
      });
    });
    context('if size parameter is undefined', () => {
      it('paginates the results with a default size of 2', async () => {
        await chai.request(server)
          .get('/players?page=2')
          .then((res) => {
            expect(res).to.have.status(200);
            expect(res).to.be.json;
            expect(res.body).to.be.an('object');
            expect(res.body).to.have.own.property('players');
            expect(res.body.players.map(player => player.id)).to.eql([
              3,
              4,
            ], 'Expected `id`s in the `players` array to match');
          });
      });
    });
    context('if size parameter is 11', () => {
      it('paginates the results with a max size of 10', async () => {
        await chai.request(server)
          .get('/players?page=1&size=11')
          .then((res) => {
            expect(res).to.have.status(200);
            expect(res).to.be.json;
            expect(res.body).to.be.an('object');
            expect(res.body).to.have.own.property('players');
            expect(res.body.players.map(player => player.id)).to.eql([
              1,
              2,
              3,
              4,
              5,
              6,
              7,
              8,
              9,
              10,
            ], 'Expected `id`s in the `players` array to match');
          });
      });
    });
  });
});
