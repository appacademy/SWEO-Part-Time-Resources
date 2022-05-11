const assert = require("assert");
const suffixCipher = require("../problems/16-suffix-cipher.js");

describe("suffixCipher", function() {
  it("", function() {
    let cipher1 = {
      ly: function(word) {
        return word.slice(0, -1) + "ee";
      },
      ize: function(word) {
        return word + "r";
      }
    };
    let actual1 = suffixCipher("quietly and gently visualize", cipher1);
    let expected1 = 'quietlee and gentlee visualizer';
    assert.equal(actual1, expected1);

    let cipher2 = {
      tal: function(word) {
        return word.toUpperCase();
      },
      s: function(word) {
        return word + "th";
      }
    };
    let actual2 = suffixCipher("incremental progress is very instrumental", cipher2);
    let expected2 = 'INCREMENTAL progressth isth very INSTRUMENTAL';
    assert.equal(actual2, expected2);
  });
});
