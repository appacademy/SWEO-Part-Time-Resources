/************************* DO NOT MODIFY THIS FILE *************************/

const assert = require("assert");

const fuzzBizz = require("../problems/08-fuzz-bizz.js");

describe("fuzzBizz()", function() {
  it("should return an array of numbers divisible by 2 or 7, but not divisible by both", function() {
    var result1 = fuzzBizz(17);
    var answer1 = [2, 4, 6, 7, 8, 10, 12, 16];
    assert.deepEqual(result1, answer1);

    var result2 = fuzzBizz(30);
    var answer2 = [2, 4, 6, 7, 8, 10, 12, 16, 18, 20, 21, 22, 24, 26];
    assert.deepEqual(result2, answer2);
  });
});