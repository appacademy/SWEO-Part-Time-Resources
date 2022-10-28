const chai = require("chai");
const chaiHttp = require("chai-http");
const expect = chai.expect;

chai.use(chaiHttp);

const { server } = require("../server.js");

describe("Phase 3 - Server specs - server.js", function () {
  context('when sendFormPage() is called', () => {
    it("should display index.html for GET requests", async function () {
      const res = await chai.request(server)
        .get("/");
      expect(res.status).to.eq(200);
      expect(res.text).to.includes("Submit this form to make a request");
    });
  
    it("should redirect to '/' for POST requests", async function () {
      const res = await chai.request(server)
        .post("/")
        .redirects(0);
      expect(res).to.redirectTo('/');
    });
  });

  context('when req.body is assigned to the return value of parseBody(str) and sendFormPage() is called', () => {
    it("should display the request body from the previous POST request for any GET requests made after", async function () {
      await chai.request(server)
        .post("/")
        .redirects(0)
        .send("username=azure+green&password=password%21");
      const res = await chai.request(server)
        .get('/');
  
      expect(res.status).to.eq(200);
      expect(res.text).to.include('"username": "azure green"');
    });
  });
});
