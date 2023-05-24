const chai = require("chai");
let chaiHttp = require("chai-http");
let server;
chai.use(chaiHttp);
const expect = chai.expect;

describe("17 - GET /albums/:albumId/songs", () => {
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

  describe("GET /albums/1/songs", () => {
    it("returns all the songs of an album with an albumId of 1", async () => {
      await chai
        .request(server)
        .get(`/albums/${1}/songs`)
        .then(res => {
          expect(res).to.have.status(200);
          expect(res.body).to.eql([
            {
              albumId: 1,
              songId: 1,
              name: 'Dani California'
            }
          ]);
        });
      await chai
        .request(server)
        .post(`/artists/${1}/albums`)
        .set('content-type', 'application/json')
        .send({ name: "test 1" })
        .then(res => {
          expect(res).to.have.status(201);
          expect(res.body).to.eql({
            albumId: 2,
            artistId: 1,
            name: 'test 1'
          });
        });
      await chai
        .request(server)
        .post(`/albums/${1}/songs`)
        .set('content-type', 'application/json')
        .send({
          name: "test 1",
          lyrics: 'test 1',
          trackNumber: 1
        });
      await chai
        .request(server)
        .post(`/albums/${2}/songs`)
        .set('content-type', 'application/json')
        .send({
          name: "test 2",
          lyrics: 'test 2',
          trackNumber: 1
        });
      await chai
        .request(server)
        .get(`/albums/${1}/songs`)
        .then(res => {
          expect(res).to.have.status(200);
          expect(res.body).to.eql([
            {
              albumId: 1,
              songId: 1,
              name: 'Dani California'
            },
            {
              albumId: 1,
              songId: 2,
              name: 'test 1'
            },
          ]);
        });
    });
  });
});
