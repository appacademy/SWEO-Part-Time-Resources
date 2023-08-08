const chai = require("chai");
let chaiHttp = require("chai-http");
let chaiJsonSchema = require('chai-json-schema');
let server = require("../app");
chai.use(chaiHttp);
chai.use(chaiJsonSchema);
const expect = chai.expect;

describe("Phase #3 Specs", () => {
  describe("GET /info", () => {
    it("returns the 'message' query parameter as text", async () => {
      await chai
        .request(server)
        .get("/info")
        .query({ message: "hello" })
        .then(res => {
          expect(res).to.have.status(200);
          expect(res).to.have.header('content-type', /^text/);
          expect(res.text).to.eq("hello");
        });

      await chai
        .request(server)
        .get("/info")
        .query({ message: "world" })
        .then(res => {
          expect(res).to.have.status(200);
          expect(res).to.have.header('content-type', /^text/);
          expect(res.text).to.eq("world");
        });
    });

    it("returns an error message as text if there is no 'message' query parameter", async () => {
      await chai
        .request(server)
        .get("/info")
        .query({ message: "" })
        .then(res => {
          expect(res).to.have.status(200);
          expect(res).to.have.header('content-type', /^text/);
          expect(res.text).to.eq("message required");
        });

      await chai
        .request(server)
        .get("/info")
        .then(res => {
          expect(res).to.have.status(200);
          expect(res).to.have.header('content-type', /^text/);
          expect(res.text).to.eq("message required");
        });
    });
  });
});
