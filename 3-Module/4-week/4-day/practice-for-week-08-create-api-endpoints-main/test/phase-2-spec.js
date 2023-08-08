const chai = require("chai");
const chaiHttp = require("chai-http");
const server = require("../server");
chai.use(chaiHttp);
const expect = chai.expect;

const { dogs } = require("./data");

describe("Phase #2 Specs: GET /dogs/:dogId", () => {
  it("return the object of the specified dog as JSON", async () => {
    await chai
      .request(server)
      .get("/dogs/1")
      .then((res) => {
          expect(res).to.have.status(200);
          expect(res).to.be.json;
          expect(res.header['content-type']).to.equal('application/json');
          expect(res.body.dogId).to.equal(dogs[0].dogId);
          expect(res.body.name).to.equal(dogs[0].name);
          expect(res.body.age).to.equal(dogs[0].age);
      });
  });
});
