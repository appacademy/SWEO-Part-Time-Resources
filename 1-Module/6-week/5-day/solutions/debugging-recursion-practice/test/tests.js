const assert = require("assert");

const doForAll = require("../recursive-debug.js");

describe("doForAll()", function() {
  it("should satisfy the examples from the problem", function() {
    assert.deepEqual(doForAll([], (x) => x * 2), []);
    assert.deepEqual(doForAll([1, 2, 3], (x) => x + 1), [2, 3, 4]);
    assert.deepEqual(doForAll(["a", "b", "c"], (x) => x.toUpperCase()), ["A", "B", "C"]);
  });

  it("should apply the callback to all members of the array", function() {
    assert.deepEqual(doForAll([2, 4, 6], (x) => x/2), [1, 2, 3]);
    assert.deepEqual(doForAll([[], [1], [2, 3]], (x) => x.length), [0, 1, 2]);
    assert.deepEqual(doForAll(["LOUD", "NOISES"], (x) => x.toLowerCase()), ["loud", "noises"]);
  });
});