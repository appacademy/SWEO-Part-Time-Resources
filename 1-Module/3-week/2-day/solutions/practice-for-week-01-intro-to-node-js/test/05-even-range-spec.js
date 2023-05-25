/************************* DO NOT MODIFY THIS FILE *************************/

const assert = require("assert");

const evenRange = require("../problems/05-even-range.js");

describe("evenRange()", function() {
  it('should return an array of even numbers between "start" and "end"', function() {
    assert.deepEqual(evenRange(13, 20), [14, 16, 18, 20]);
    assert.deepEqual(evenRange(4, 11), [4, 6, 8, 10]);
  });

  it('should return empty array if "start" > "end"', function() {
    assert.equal(evenRange(8, 5).length, 0);
  });
});