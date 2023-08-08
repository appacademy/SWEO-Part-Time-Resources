const chai = require("chai");
let chaiHttp = require("chai-http");
let server;
chai.use(chaiHttp);
const expect = chai.expect;

describe("06 - PUT or PATCH /artists/:artistId", () => {
  // Reset all the data:
  before(() => {
    const path = require('path');

    const data = path.resolve(__dirname, '../data.js');
    const app = path.resolve(__dirname, '../app.js');
    const artists = path.resolve(__dirname, '../seeds/artists.json');
    const albums = path.resolve(__dirname, '../seeds/albums.json');
    const songs = path.resolve(__dirname, '../seeds/songs.json');

    delete require.cache[data];
    delete require.cache[app];
    delete require.cache[artists];
    delete require.cache[albums];
    delete require.cache[songs];

    server = require("../app");
  });

  describe("PUT /artists/1", () => {
    it("updates and returns the artist with an artistId of 1", async () => {
      await chai
        .request(server)
        .put(`/artists/${1}`)
        .set('content-type', 'application/json')
        .send({ name: "test 1" })
        .then(res => {
          expect(res).to.have.status(200);
          expect(res.body).to.eql({
            "artistId": 1,
            "name": "test 1"
          });
        });

      await chai
        .request(server)
        .get(`/artists/${1}`)
        .then(res => {
          expect(res).to.have.status(200);
          expect(res.body).to.eql({
            "artistId": 1,
            "name": "test 1",
            "albums": [
              {
                "albumId": 1,
                "name": "Stadium Arcadium",
                "artistId": 1
              }
            ]
          });
        });
    });
  });

  describe("PATCH /artists/1", () => {
    it("updates and returns the artist with an artistId of 1", async () => {
      server = require('../app');
      await chai
        .request(server)
        .patch(`/artists/${1}`)
        .set('content-type', 'application/json')
        .send({ name: "test 2" })
        .then(res => {
          expect(res).to.have.status(200);
          expect(res.body).to.eql({
            "artistId": 1,
            "name": "test 2"
          });
        });
      
      await chai
        .request(server)
        .get(`/artists/${1}`)
        .then(res => {
          expect(res).to.have.status(200);
          expect(res.body).to.eql({
            "artistId": 1,
            "name": "test 2",
            "albums": [
              {
                "albumId": 1,
                "name": "Stadium Arcadium",
                "artistId": 1
              }
            ]
          });
        });
    });
  });
});
