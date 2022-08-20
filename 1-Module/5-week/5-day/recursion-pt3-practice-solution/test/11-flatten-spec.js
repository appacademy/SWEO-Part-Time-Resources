const assert = require("assert");

const flatten = require('../problems/11-flatten');

describe("flatten()", function () {
  it("should return the all the nested array contents in a single array", function () {
    assert.deepEqual(flatten([]), []);
    assert.deepEqual(flatten([1, 2]), [1, 2]);
    assert.deepEqual(flatten([1, [2, [3]]]), [1, 2, 3]);
    assert.deepEqual(flatten([[[[]]]]), []);
    assert.deepEqual(
      flatten([
        [1, 2],
        [3, [4, 5]],
      ]),
      [1, 2, 3, 4, 5]
    );
    assert.deepEqual(flatten([[[1, 2]], [[3, 4]]]), [1, 2, 3, 4]);
  });
});
