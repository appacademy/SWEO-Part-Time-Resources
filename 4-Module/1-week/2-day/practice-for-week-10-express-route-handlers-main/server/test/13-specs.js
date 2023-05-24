const chai = require("chai");
let chaiHttp = require("chai-http");
let server;
chai.use(chaiHttp);
const expect = chai.expect;

describe("13 - GET /albums?startsWith={letter}", () => {
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

  describe("GET /albums?startsWith=S", () => {
    it("returns all albums that start with the letter 'S' or 's'", async () => {
      const letter = 'S';
      await chai
        .request(server)
        .get(`/albums?startsWith=${letter}`)
        .then(res => {
          expect(res).to.have.status(200);
          expect(res.body).to.eql([
            {
              albumId: 1,
              artistId: 1,
              name: "Stadium Arcadium"
            }
          ]);
        });
      await chai
        .request(server)
        .post(`/artists`)
        .set('content-type', 'application/json')
        .send({ name: "Sweet Caroline" });
      await chai
        .request(server)
        .post(`/artists/2/albums`)
        .set('content-type', 'application/json')
        .send({ name: "slick" });
      await chai
        .request(server)
        .get(`/albums?startsWith=${letter}`)
        .then(res => {
          expect(res).to.have.status(200);
          expect(res.body).to.eql([
            {
              albumId: 1,
              artistId: 1,
              name: "Stadium Arcadium"
            },
            {
              albumId: 2,
              artistId: 2,
              name: 'slick'
            }
          ]);
        });
    });
  });

  describe("GET /albums?startsWith=s", () => {
    it("returns all albums that start with the letter 'S' or 's'", async () => {
      const letter = 's';
      await chai
        .request(server)
        .get(`/albums?startsWith=${letter}`)
        .then(res => {
          expect(res).to.have.status(200);
          expect(res.body).to.eql([
            {
              albumId: 1,
              artistId: 1,
              name: "Stadium Arcadium"
            },
            {
              albumId: 2,
              artistId: 2,
              name: 'slick'
            }
          ]);
        });
    });
  });
});
