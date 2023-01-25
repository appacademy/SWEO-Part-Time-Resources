/************************* DO NOT MODIFY THIS FILE *************************/

const assert = require("assert");

const diffArrayLen = require("../problems/01-diff-array-lens.js");

describe("diffArrayLen()", function() {
  it("should return a boolean indicating the lengths of the arrays are the same", function() {
    const a1 = ["a", "b", "c"];
    const a2 = ["w", "x", "y"];
    const a3 = [1, 3, 7, 4];

    assert.equal(diffArrayLen(a1, a2), false);
    assert.equal(diffArrayLen(a1, a3), true);
  });
});