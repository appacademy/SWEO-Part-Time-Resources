const chai = require("chai");
const expect = chai.expect;

const {
  firstStep,
  secondStep,
  thirdStep,
  fourthStep,
  fifthStep,
  parseBody,
} = require("../parse-body.js");

describe("Phase 3 - parseBody specs - parse-body.js", function () {
  it("firstStep() should return an array of separate key value pairs\n \texample: ['username=azure+green', 'password=password%21']\n", function () {
    expect(firstStep("username=azure+green&password=password%21")).to.eql([
      "username=azure+green",
      "password=password%21",
    ]);
  });

  it('secondStep() should return a 2D array with key value pairs\n \texample: [["username", "azure+green"], ["password", "password%21"]]\n', function () {
    expect(
      secondStep(["username=azure+green", "password=password%21"])
    ).to.eql([
      ["username", "azure+green"],
      ["password", "password%21"],
    ]);
  });

  it('thirdStep() should return an array with all "+" signs replaced\n \texample: [["username", "azure green"], ["password", "password%21"]]\n', function () {
    expect(
      thirdStep([
        ["username", "azure+green"],
        ["password", "password%21"],
      ])
    ).to.eql([
      ["username", "azure green"],
      ["password", "password%21"],
    ]);
  });

  it('fourthStep() should return an array with percent encoded values decoded\n \texample: [["username", "azure green"], ["password", "password!"]]\n', function () {
    expect(
      fourthStep([
        ["username", "azure green"],
        ["password", "password%21"],
      ])
    ).to.eql([
      ["username", "azure green"],
      ["password", "password!"],
    ]);
  });

  it('fifthStep() should return an object of key/value pairs\n \texample: { username: "azure green",password: "password!"}\n', function () {
    expect(
      fifthStep([
        ["username", "azure green"],
        ["password", "password!"],
      ])
    ).to.eql({
      username: "azure green",
      password: "password!",
    });
  });

  it('parseBody(str) should take in the request body as a string and return an object of key/value pairs\n \texample: { username: "azure green",password: "password!"}\n', function () {
    expect(
      parseBody("username=azure+green&password=password%21")
    ).to.eql({
      username: "azure green",
      password: "password!",
    });
  });
});