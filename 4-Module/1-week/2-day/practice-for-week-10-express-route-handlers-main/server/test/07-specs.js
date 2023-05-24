const chai = require("chai");
let chaiHttp = require("chai-http");
let server;
chai.use(chaiHttp);
const expect = chai.expect;

describe("07 - DELETE /artists/:artistId", () => {
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

  describe("DELETE /artists/1", () => {
    it("deletes the artist with an artistId of 1 and returns a message of 'Successfully deleted'", async () => {
      await chai
        .request(server)
        .delete(`/artists/${1}`)
        .then(res => {
          expect(res).to.have.status(200);
          expect(res.body).to.eql({
            "message": "Successfully deleted"
          });
        });

      await chai
        .request(server)
        .get(`/artists`)
        .then(res => {
          expect(res).to.have.status(200);
          expect(res.body).to.eql([]);
        });
    });
  });
});
