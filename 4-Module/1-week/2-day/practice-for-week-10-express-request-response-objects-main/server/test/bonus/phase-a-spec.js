const chai = require("chai");
let chaiHttp = require("chai-http");
let chaiJsonSchema = require('chai-json-schema');
let server = require("../../app");
chai.use(chaiHttp);
chai.use(chaiJsonSchema);
const expect = chai.expect;

describe("Bonus Phase A Specs", () => {
  describe("POST /movies", () => {
    it("returns a JSON object with an 'id' key as a random number", async () => {
      await chai
        .request(server)
        .post("/movies")
        .set('content-type', 'application/json')
        .send({ name: "Test Name", year: "1999", isFavorite: "on" })
        .then(async res1 => {
          expect(res1).to.have.status(200);
          expect(res1).to.be.json;
          const schema = {
            type: 'object',
            required: ['id', ],
            properties: {
              id: {
                type: "number"
              }
            }
          };
          expect(res1.body).to.be.jsonSchema(schema);
          await chai
            .request(server)
            .post("/movies")
            .set('content-type', 'application/json')
            .send({ name: "Test Name", year: "1999", isFavorite: "on" })
            .then(async res2 => {
              expect(
                res2.body.id,
                'id must be randomized for every request'
              ).to.not.eql(res1.body.id)
            });
        });
    });

    it("returns a JSON with a 'name' key equal to the 'name' request body parameter", async () => {
      await chai
        .request(server)
        .post("/movies")
        .set('content-type', 'application/json')
        .send({ name: "Test Name", year: "1999", isFavorite: "on" })
        .then(res => {
          expect(res).to.have.status(200);
          expect(res).to.be.json;
          const schema = {
            type: 'object',
            required: ['name'],
            properties: {
              name: {
                type: "string",
                enum: ["Test Name"]
              },
            }
          };
          expect(res.body).to.be.jsonSchema(schema);
        });

      await chai
        .request(server)
        .post("/movies")
        .set('content-type', 'application/json')
        .send({ name: "Test Name 2", year: "1999", isFavorite: "on" })
        .then(res => {
          expect(res).to.have.status(200);
          expect(res).to.be.json;
          const schema = {
            type: 'object',
            required: ['name'],
            properties: {
              name: {
                type: "string",
                enum: ["Test Name 2"]
              },
            }
          };
          expect(res.body).to.be.jsonSchema(schema);
        });
    });

    it("returns a JSON with a 'year' key equal to the the numeric form of the 'year' request body parameter", async () => {
      await chai
        .request(server)
        .post("/movies")
        .set('content-type', 'application/json')
        .send({ name: "Test Name", year: "1999", isFavorite: "on" })
        .then(res => {
          expect(res).to.have.status(200);
          expect(res).to.be.json;
          const schema = {
            type: 'object',
            required: ['year'],
            properties: {
              year: {
                type: "number",
                enum: [1999]
              },
            }
          };
          expect(res.body).to.be.jsonSchema(schema);
        });

      await chai
        .request(server)
        .post("/movies")
        .set('content-type', 'application/json')
        .send({ name: "Test Name", year: "1", isFavorite: "on" })
        .then(res => {
          expect(res).to.have.status(200);
          expect(res).to.be.json;
          const schema = {
            type: 'object',
            required: ['year'],
            properties: {
              year: {
                type: "number",
                enum: [1]
              },
            }
          };
          expect(res.body).to.be.jsonSchema(schema);
        });
    });

    it("returns a JSON with an 'isFavorite' key as a boolean which is true if the 'favorite' request body parameter exists", async () => {
      await chai
        .request(server)
        .post("/movies")
        .set('content-type', 'application/json')
        .send({ name: "Test Name", year: "1999", favorite: "on" })
        .then(res => {
          expect(res).to.have.status(200);
          expect(res).to.be.json;
          const schema = {
            type: 'object',
            required: ['isFavorite'],
            properties: {
              isFavorite: {
                type: "boolean",
                enum: [true]
              },
            }
          };
          expect(res.body).to.be.jsonSchema(schema);
        });
    });

    it("returns a JSON with an 'isFavorite' key as a boolean which is false if the 'favorite' request body parameter doesn't exist", async () => {
      await chai
        .request(server)
        .post("/movies")
        .set('content-type', 'application/json')
        .send({ name: "Test Name", year: "1999" })
        .then(res => {
          expect(res).to.have.status(200);
          expect(res).to.be.json;
          const schema = {
            type: 'object',
            required: ['isFavorite'],
            properties: {
              isFavorite: {
                type: "boolean",
                enum: [false]
              },
            }
          };
          expect(res.body).to.be.jsonSchema(schema);
        });
    });
  });
});
