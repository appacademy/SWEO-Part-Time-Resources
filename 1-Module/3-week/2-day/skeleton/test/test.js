/*******************STUDENTS SHOULD NOT MODIFY THIS FILE***************/

const assert = require("assert");

const diffArrayLen = require("../problems/01-diff-array-lens.js");
const avgValue = require("../problems/02-avg-value.js");
const tripler = require("../problems/03-tripler.js");
const oddRange = require("../problems/04-odd-range.js");
const evenRange = require("../problems/05-even-range.js");
const reverseString = require("../problems/06-reverse-string.js");
const intersect = require("../problems/07-intersect-arrays.js");
const fuzzBizz = require("../problems/08-fuzz-bizz.js");
const mirrorArray = require("../problems/09-mirror-array.js");

describe("diffArrayLen()", function() {
  it("should return a boolean indicating the lengths of the arrays are the same", function() {
    const a1 = ["a", "b", "c"];
    const a2 = ["w", "x", "y"];
    const a3 = [1, 3, 7, 4];

    assert.equal(diffArrayLen(a1, a2), false);
    assert.equal(diffArrayLen(a1, a3), true);
  });
});

describe("avgValue()", function() {
  it("should return the average of an array of numbers", function() {
    assert.equal(avgValue([10, 20]), 15);
    assert.equal(avgValue([2, 3, 7]), 4);
    assert.equal(avgValue([100, 60, 64]), 74.66666666666667);
  });
});

describe("tripler()", function() {
  it("should return a new array containing 3 times every element of the original array", function() {
    assert.deepEqual(tripler([1, 2, 3]), [3, 6, 9]);
    assert.deepEqual(tripler([4, 1, 7]), [12, 3, 21]);
    assert.deepEqual(tripler([-1, 1, 10]), [-3, 3, 30]);
  });
});

describe("oddRange()", function() {
  it("should return an array containing all positive odd numbers up to `end`", function() {
    assert.deepEqual(oddRange(13), [1, 3, 5, 7, 9, 11, 13]);
    assert.deepEqual(oddRange(6), [1, 3, 5]);
    assert.deepEqual(oddRange(10), [1, 3, 5, 7, 9]);
  });
});

describe("evenRange()", function() {
  it('should return an array of even numbers between "start" and "end"', function() {
    assert.deepEqual(evenRange(13, 20), [14, 16, 18, 20]);
    assert.deepEqual(evenRange(4, 11), [4, 6, 8, 10]);
  });

  it('should return empty array if "start" > "end"', function() {
    assert.equal(evenRange(8, 5).length, 0);
  });
});

describe("reverseString()", function() {
  it("should return the hyphenated string reversed", function() {
    assert.equal(reverseString("Go-to-the-store"), "store-the-to-Go");
    assert.equal(reverseString("Jump,-jump-for-joy"), "joy-for-jump-Jump,");
  });
});

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

describe("mirrorArray()", function() {
  it("should return a single array where the first half is the original array and the second half is a mirror of the first half", function() {
    assert.deepEqual(mirrorArray([1, 2, 3]), [1, 2, 3, 3, 2, 1]);
    assert.deepEqual(mirrorArray(["a", "b", "c", "d"]), [
      "a",
      "b",
      "c",
      "d",
      "d",
      "c",
      "b",
      "a"
    ]);
  });
});
