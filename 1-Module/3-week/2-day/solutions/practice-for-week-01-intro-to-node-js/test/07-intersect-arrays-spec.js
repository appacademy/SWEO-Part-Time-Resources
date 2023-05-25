/************************* DO NOT MODIFY THIS FILE *************************/

const assert = require("assert");

const intersect = require("../problems/07-intersect-arrays.js");

describe("intersect()", function() {
  it("should return an array containing the common elements between arr1 and arr2", function() {
    var result1 = intersect(["a", "b", "c", "d"], ["b", "d", "e"]);
    var answer1 = ["b", "d"];
    assert.deepEqual(result1.sort(), answer1);

    var result2 = intersect(["a", "b", "c"], ["x", "y", "z"]);
    var answer2 = [];
    assert.deepEqual(result2, answer2);
  });
});