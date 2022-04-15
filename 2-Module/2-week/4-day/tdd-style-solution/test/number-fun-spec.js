const assert = require("assert");
const { returnsThree, reciprocal } = require("../problems/number-fun");

describe("returnsThree()", () => {
  it("should return a three", () => {
    assert.equal(returnsThree(), 3);
  });
});

describe("reciprocal()", () => {
  context("valid arguments", () => {
    it("should return the reciprocal", () => {
      assert.equal(reciprocal(4), 0.25);
      assert.equal(reciprocal(1), 1);
      assert.equal(reciprocal(999999), 0.000001000001000001);
    });
  });
  context("invalid arguments", () => {
    it("should throw an exception when passed a number less than one", () => {
      assert.throws(() => reciprocal(0), TypeError);
      assert.throws(() => reciprocal(-1), TypeError);
    });
    it("should throw an exception when passed a number greater than 1 million", () => {
      assert.throws(() => reciprocal(1000001), TypeError);
    });
  });
});
