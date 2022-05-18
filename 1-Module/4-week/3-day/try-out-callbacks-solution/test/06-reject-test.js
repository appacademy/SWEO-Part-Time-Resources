const assert = require("assert");
const reject = require("../problems/06-reject.js");

describe("reject", function() {
  it("", function() {
    let isEven = function(n) {
      return n % 2 === 0;
  };
  assert.deepEqual(reject([7, 8, 5, 6, 12, 11], isEven), [ 7, 5, 11 ]);

  let hasA = function(s) {
      return s.toLowerCase().includes('a');
  };
  assert.deepEqual(reject(['breadth', 'GRAPH', 'depth', 'height'], hasA), [ 'depth', 'height' ]);
  });
});
