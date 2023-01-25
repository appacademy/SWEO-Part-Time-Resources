/************************* DO NOT MODIFY THIS FILE *************************/

const assert = require("assert");

const oddRange = require("../problems/04-odd-range.js");

describe("oddRange()", function() {
  it("should return an array containing all positive odd numbers up to `end`", function() {
    assert.deepEqual(oddRange(13), [1, 3, 5, 7, 9, 11, 13]);
    assert.deepEqual(oddRange(6), [1, 3, 5]);
    assert.deepEqual(oddRange(10), [1, 3, 5, 7, 9]);
  });
});