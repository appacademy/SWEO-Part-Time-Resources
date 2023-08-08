const chai = require("chai");
let chaiHttp = require("chai-http");
let server;
chai.use(chaiHttp);
const expect = chai.expect;

describe("04 - GET /artists/latest/albums", () => {
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

  describe("GET /artists/latest/albums", () => {
    it("returns the latest artist's albums in the server data", async () => {
      await chai
        .request(server)
        .get("/artists/latest/albums")
        .then(res => {
          expect(res).to.have.status(200);
          expect(res.body).to.eql({
            "latest": {
              "albums": [
                {
                  "albumId": 1,
                  "name": "Stadium Arcadium",
                  "artistId": 1
                }
              ]
            }
          });
        });
    });

    it("returns the most newly created artist's albums in the server data", async () => {
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
        .get("/artists/latest/albums")
        .then(res => {
          expect(res).to.have.status(200);
          expect(res.body).to.eql({
            "latest": {
              "albums": []
            }
          });
        });
    });
  });
});
