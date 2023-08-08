const chai = require("chai");
let chaiHttp = require("chai-http");
let server;
chai.use(chaiHttp);
const expect = chai.expect;

describe("18 - PUT or PATCH /songs/:songId", () => {
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

  describe("PUT /songs/1", () => {
    it("edits and returns the song with a songId of 1", async () => {
      await chai
        .request(server)
        .put(`/songs/${1}`)
        .set('content-type', 'application/json')
        .send({
          name: "test 1",
          lyrics: 'test 1'
        })
        .then(res => {
          expect(res).to.have.status(200);
          expect(res.body).to.eql({
            songId: 1,
            albumId: 1,
            name: "test 1",
            lyrics: 'test 1',
            trackNumber: 1
          });
        });
      await chai
        .request(server)
        .get(`/songs/${1}`)
        .then(res => {
          expect(res).to.have.status(200);
          expect(res.body).to.eql({
            "songId": 1,
            "name": "test 1",
            "trackNumber": 1,
            "albumId": 1,
            artist: {
              "artistId": 1,
              "name": "Red Hot Chili Peppers"
            },
            album: {
              "albumId": 1,
              "name": "Stadium Arcadium",
              "artistId": 1
            },
            "lyrics": "test 1"
          });
        });
    });
  });

  describe("PATCH /songs/1", () => {
    it("edits and returns the song with a songId of 1", async () => {
      await chai
        .request(server)
        .patch(`/songs/${1}`)
        .set('content-type', 'application/json')
        .send({
          name: "test 2",
          lyrics: 'test 2'
        })
        .then(res => {
          expect(res).to.have.status(200);
          expect(res.body).to.eql({
            songId: 1,
            albumId: 1,
            name: "test 2",
            lyrics: 'test 2',
            trackNumber: 1
          });
        });
      await chai
        .request(server)
        .get(`/songs/${1}`)
        .then(res => {
          expect(res).to.have.status(200);
          expect(res.body).to.eql({
            "songId": 1,
            "name": "test 2",
            "trackNumber": 1,
            "albumId": 1,
            artist: {
              "artistId": 1,
              "name": "Red Hot Chili Peppers"
            },
            album: {
              "albumId": 1,
              "name": "Stadium Arcadium",
              "artistId": 1
            },
            "lyrics": "test 2"
          });
        });
    });
  });
});
