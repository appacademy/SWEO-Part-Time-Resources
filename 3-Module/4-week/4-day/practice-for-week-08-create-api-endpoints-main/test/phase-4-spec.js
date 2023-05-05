const chai = require("chai");
const chaiHttp = require("chai-http");
const server = require("../server");
chai.use(chaiHttp);
const expect = chai.expect;

const { newDogBody3, updateDogBody3 } = require("./data");

describe("Phase #4 Specs: PUT or PATCH /dogs/:dogId", () => {

  before(async function () {
    await chai
      .request(server)
      .post("/dogs")
      .set('content-type', 'application/json')
      .send(newDogBody3);
  })

  it("edit the specified dog based on the body of the request.", async () => {
    await chai
      .request(server)
      .put("/dogs/4")
      .set('content-type', 'application/json')
      .send(updateDogBody3)
      .then((res) => {
          expect(res).to.have.status(200);
          expect(res).to.be.json;
          expect(res.header['content-type']).to.equal('application/json');
          expect(res.body.dogId).to.equal(4);
          expect(res.body.name).to.equal(updateDogBody3.name);
          expect(res.body.age).to.equal(updateDogBody3.age);
      });
  });
});
