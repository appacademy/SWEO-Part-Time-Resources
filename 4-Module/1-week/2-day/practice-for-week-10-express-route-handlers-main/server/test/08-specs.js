const chai = require("chai");
let chaiHttp = require("chai-http");
let server;
chai.use(chaiHttp);
const expect = chai.expect;

describe("08 - GET /artists/:artistId/albums", () => {
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

  describe("GET /artists/1/albums", () => {
    it("returns all the albums of the artist with an artistId of 1", async () => {
      await chai
        .request(server)
        .get(`/artists/${1}/albums`)
        .then(res => {
          expect(res).to.have.status(200);
          expect(res.body).to.eql([
            {
              albumId: 1,
              artistId: 1,
              name: 'Stadium Arcadium'
            }
          ]);
        });
    });
  });

  describe("GET /artists/2/albums", () => {
    it("returns an empty array for all new artists", async () => {
      await chai
        .request(server)
        .post("/artists")
        .set('content-type', 'application/json')
        .send({ name: "test 1" })
        .then(res => {
          expect(res).to.have.status(201);
          expect(res.body).to.eql({ artistId: 2, name: "test 1" });
        });

      await chai
        .request(server)
        .get(`/artists/${2}/albums`)
        .then(res => {
          expect(res).to.have.status(200);
          expect(res.body).to.eql([]);
        });
    });
  });
});
