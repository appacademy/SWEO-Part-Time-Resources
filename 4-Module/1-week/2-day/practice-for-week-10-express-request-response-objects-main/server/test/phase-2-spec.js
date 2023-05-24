const chai = require("chai");
let chaiHttp = require("chai-http");
let chaiJsonSchema = require('chai-json-schema');
let server = require("../app");
chai.use(chaiHttp);
chai.use(chaiJsonSchema);
const expect = chai.expect;

describe("Phase #2 Specs", () => {
  describe("GET /viewers/:id", () => {
    it("returns a user object containing an id equivalent to the route parameter value", async () => {
      await chai
        .request(server)
        .get("/viewers/1")
        .then(res => {
          expect(res).to.have.status(200);
          expect(res).to.be.json;
          const schema = {
            type: 'object',
            required: ['id'],
            properties: {
              id: {
                enum: ["1", 1]
              }
            }
          };
          expect(res.body).to.be.jsonSchema(schema);
        });

      await chai
        .request(server)
        .get("/viewers/UUID1")
        .then(res => {
          expect(res).to.have.status(200);
          expect(res).to.be.json;
          const schema = {
            type: 'object',
            required: ['id'],
            properties: {
              count: {
                type: 'id',
                enum: ["UUID1"]
              }
            }
          };
          expect(res.body).to.be.jsonSchema(schema);
        });
    });

    it("returns a user object containing a firstName string", async () => {
      await chai
        .request(server)
        .get("/viewers/1")
        .then(res => {
          expect(res).to.have.status(200);
          expect(res).to.be.json;
          const schema = {
            type: 'object',
            required: ['firstName'],
            properties: {
              firstName: {
                type: 'string',
                minLength: 1
              }
            }
          };
          expect(res.body).to.be.jsonSchema(schema);
        });
    });

    it("returns a user object containing a lastName string", async () => {
      await chai
        .request(server)
        .get("/viewers/1")
        .then(res => {
          expect(res).to.have.status(200);
          expect(res).to.be.json;
          const schema = {
            type: 'object',
            required: ['lastName'],
            properties: {
              lastName: {
                type: 'string',
                minLength: 1
              }
            }
          };
          expect(res.body).to.be.jsonSchema(schema);
        });
    });

    it("returns a user object containing a birthDate string", async () => {
      await chai
        .request(server)
        .get("/viewers/1")
        .then(res => {
          expect(res).to.have.status(200);
          expect(res).to.be.json;
          const schema = {
            type: 'object',
            required: ['birthDate'],
            properties: {
              birthDate: {
                type: 'string',
                format: "date"
              }
            }
          };
          expect(res.body).to.be.jsonSchema(schema);
        });
    });

    it("returns a user object containing a favoriteMovies array of strings", async () => {
      await chai
        .request(server)
        .get("/viewers/1")
        .then(res => {
          expect(res).to.have.status(200);
          expect(res).to.be.json;
          const schema = {
            type: 'object',
            required: ['favoriteMovies'],
            properties: {
              favoriteMovies: {
                type: 'array',
                minItems: 1
              }
            }
          };
          expect(res.body).to.be.jsonSchema(schema);
        });
    });
  });
});
