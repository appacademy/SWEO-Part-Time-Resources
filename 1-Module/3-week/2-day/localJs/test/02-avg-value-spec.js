/************************* DO NOT MODIFY THIS FILE *************************/

const assert = require("assert");

const avgValue = require("../problems/02-avg-value.js");

describe("avgValue()", function() {
  it("should return the average of an array of numbers", function() {
    assert.equal(avgValue([10, 20]), 15);
    assert.equal(avgValue([2, 3, 7]), 4);
    assert.equal(avgValue([100, 60, 64]), 74.66666666666667);
  });
});