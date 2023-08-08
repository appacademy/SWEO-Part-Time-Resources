const chai = require("chai");
const chaiHttp = require("chai-http");
const server = require("../server");
chai.use(chaiHttp);
const expect = chai.expect;

const { newDogBody1, newDogBody2 } = require("./data");

describe("Phase #3 Specs: POST /dogs", () => {
  it("creates a dog based on the body of the request.", async () => {
    await chai
      .request(server)
      .post("/dogs")
      .set('content-type', 'application/json')
      .send(newDogBody1)
      .then((res) => {
          expect(res).to.have.status(201);
          expect(res).to.be.json;
          expect(res.header['content-type']).to.equal('application/json');
          expect(res.body.dogId).to.equal(newDogBody1.dogId);
          expect(res.body.name).to.equal(newDogBody1.name);
          expect(res.body.age).to.equal(newDogBody1.age);
      });
  });

  it("creates additional dogs, incrementing the dogId for each", async () => {
      await chai
        .request(server)
        .post("/dogs")
        .set('content-type', 'application/json')
        .send(newDogBody2)
        .then((res) => {
            expect(res).to.have.status(201);
            expect(res).to.be.json;
            expect(res.header['content-type']).to.equal('application/json');
            expect(res.body.dogId).to.equal(newDogBody2.dogId);
            expect(res.body.name).to.equal(newDogBody2.name);
            expect(res.body.age).to.equal(newDogBody2.age);
        });
    });
});
