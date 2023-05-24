const chai = require("chai");
let chaiHttp = require("chai-http");
let chaiJsonSchema = require('chai-json-schema');
let server = require("../../app");
chai.use(chaiHttp);
chai.use(chaiJsonSchema);
const expect = chai.expect;

describe("Bonus Phase B Specs", () => {
  describe("GET /logo.png", () => {
    it("returns the image server file 'public/logo.png'", async () => {
      await chai
        .request(server)
        .get("/logo.png")
        .then(res => {
          expect(res).to.have.status(200);
          expect(res).to.have.header('content-type', 'image/png');
          expect(res.body).to.be.instanceOf(Buffer);
        });
    });
  });
});
