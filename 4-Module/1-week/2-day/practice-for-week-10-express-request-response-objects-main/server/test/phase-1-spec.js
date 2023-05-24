const chai = require("chai");
let chaiHttp = require("chai-http");
let server = require("../app");
chai.use(chaiHttp);
const expect = chai.expect;

describe("Phase #1 Specs", () => {
  describe("GET /version", () => {
    it("returns a text body of '1.0.0'", async () => {
      await chai
        .request(server)
        .get("/version")
        .then(res => {
          expect(res).to.have.status(200);
          expect(res).to.have.header('content-type', /^text/);
          expect(res.text).to.eq("1.0.0");
        });
    });
  });
});
