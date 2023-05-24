const chai = require("chai");
let chaiHttp = require("chai-http");
let server;
chai.use(chaiHttp);
const expect = chai.expect;

describe("15 - POST /albums/:albumId/songs", () => {
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

  describe("POST /albums/1/songs", () => {
    it("creates and returns a song for an album with an albumId of 1", async () => {
      await chai
        .request(server)
        .post(`/albums/${1}/songs`)
        .set('content-type', 'application/json')
        .send({
          name: "test 1",
          lyrics: 'test 1',
          trackNumber: 1
        })
        .then(res => {
          expect(res).to.have.status(201);
          expect(res.body).to.eql({
            songId: 2,
            albumId: 1,
            name: 'test 1',
            lyrics: 'test 1',
            trackNumber: 1
          });
        });
    });
  });
});
