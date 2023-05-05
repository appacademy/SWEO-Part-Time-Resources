const chai = require("chai");
const chaiHttp = require("chai-http");
const server = require("../server");
chai.use(chaiHttp);
const expect = chai.expect;

const { newDogBody4 } = require("./data");

describe("Phase #5 Specs: DELETE /dogs/:dogId", () => {

  before(async function () {
    await chai
      .request(server)
      .post("/dogs")
      .set('content-type', 'application/json')
      .send(newDogBody4);
  })

  it("deletes a dog from the server data", async () => {
    await chai
      .request(server)
      .delete("/dogs/5")
      .then((res) => {
          expect(res).to.have.status(200);
          expect(res).to.be.json;
          expect(res.body.message).to.equal('Successfully deleted');
      });
  });
});
