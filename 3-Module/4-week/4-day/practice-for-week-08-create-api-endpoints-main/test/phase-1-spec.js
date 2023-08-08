const chai = require("chai");
const chaiHttp = require("chai-http");
const server = require("../server");
chai.use(chaiHttp);
const expect = chai.expect;

const { dogs } = require("./data");

describe("Phase #1 Specs: GET /dogs", () => {
  it("returns the `dogs` array as JSON", async () => {
    await chai
      .request(server)
      .get("/dogs")
      .then((res) => {
          expect(res).to.have.status(200);
          expect(res).to.be.json;
          expect(res.header['content-type']).to.equal('application/json');
          expect(res.body[0].dogId).to.equal(dogs[0].dogId);
          expect(res.body[0].name).to.equal(dogs[0].name);
          expect(res.body[0].age).to.equal(dogs[0].age);
      });
  });
});
