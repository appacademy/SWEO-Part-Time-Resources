/************************* DO NOT MODIFY THIS FILE *************************/

const assert = require("assert");

const tripler = require("../problems/03-tripler.js");

describe("tripler()", function() {
  it("should return a new array containing 3 times every element of the original array", function() {
    assert.deepEqual(tripler([1, 2, 3]), [3, 6, 9]);
    assert.deepEqual(tripler([4, 1, 7]), [12, 3, 21]);
    assert.deepEqual(tripler([-1, 1, 10]), [-3, 3, 30]);
  });
});