const chai = require("chai");
let chaiHttp = require("chai-http");
let server;
chai.use(chaiHttp);
const expect = chai.expect;

describe("09 - GET /albums/:albumId", () => {
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

  describe("GET /albums/1", () => {
    it("returns the album with an albumId of 1 and its artist and songs", async () => {
      await chai
        .request(server)
        .get(`/albums/${1}`)
        .then(res => {
          expect(res).to.have.status(200);
          expect(res.body).to.eql({
            albumId: 1,
            artistId: 1,
            name: 'Stadium Arcadium',
            artist: {
              "artistId": 1,
              "name": "Red Hot Chili Peppers"
            },
            songs: [
              {
                "songId": 1,
                "name": "Dani California",
                "trackNumber": 1,
                "albumId": 1,
                "lyrics": "Getting born in the state of Mississippi\nPapa was a copper, and her mama was a hippy\nIn Alabama she would swing a hammer\nPrice you got to pay when you break the panorama\nShe never knew that there was anything more than poor\nWhat in the world does your company take me for?\nBlack bandanna, sweet Louisiana\nRobbing on a bank in the state of Indiana\nShe's a runner\nRebel, and a stunner\nOn her merry way saying baby, watcha gonna?\nLooking down the barrel of a hot metal forty-five\nJust another way to survive\nCalifornia, rest in peace\nSimultaneous release\nCalifornia, show your teeth\nShe's my priestess\nI'm your priest\nYeah, yeah, yeah\nShe's a lover, baby, and a fighter\nShould've seen it coming when I got a little brighter\nWith a name like Dani California\nDay was gonna come when I was gonna mourn ya\nA little loaded, she was stealing another breath\nI love my baby to death\nCalifornia, rest in peace\nSimultaneous release\nCalifornia, show your teeth\nShe's my priestess\nI'm your priest\nYeah, yeah, yeah\nWho knew the other side of you?\nWho knew that others died to prove?\nToo true to say goodbye to you\nToo true to say, say, say\nPushed the fader, gifted animator\nOne for the now, and eleven for the later\nNever made it up to Minnesota\nNorth Dakota man\nWasn't gunnin' for the quota\nDown in the Badlands she was saving the best for last\nIt only hurts when I laugh\nGone too fast\nCalifornia, rest in peace\nSimultaneous release\nCalifornia, show your teeth\nShe's my priestess\nI'm your priest\nYeah, yeah, yeah\nCalifornia, rest in peace\nSimultaneous release\nCalifornia, show your teeth\nShe's my priestess\nI'm your priest\nYeah, yeah, yeah"
              }
            ]
          });
        });
    });
  });
});
