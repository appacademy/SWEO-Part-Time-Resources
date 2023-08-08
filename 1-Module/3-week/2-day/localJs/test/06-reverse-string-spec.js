/************************* DO NOT MODIFY THIS FILE *************************/

const assert = require("assert");

const reverseString = require("../problems/06-reverse-string.js");

describe("reverseString()", function() {
  it("should return the hyphenated string reversed", function() {
    assert.equal(reverseString("Go-to-the-store"), "store-the-to-Go");
    assert.equal(reverseString("Jump,-jump-for-joy"), "joy-for-jump-Jump,");
  });
});