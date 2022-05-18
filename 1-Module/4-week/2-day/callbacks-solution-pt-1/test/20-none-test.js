const assert = require("assert");
const none = require("../problems/20-none.js");

describe("none", function() {
  it("", function() {
    let result1 = none(['ruby', 'topaz', 'opal'], function(w) {
        return w.includes('e');
    });
    assert.equal(result1, true);

    let result2 = none(['ruby', 'topaz', 'sapphire', 'opal'], function(w) {
        return w.includes('e');
    });
    assert.equal(result2, false);

    let result3 = none([4, 5, 7, 1], function(n) {
        return n < 0;
    });
    assert.equal(result3, true);

    let result4 = none([4, -5, 7, -1], function(n) {
        return n < 0;
    });
    assert.equal(result4, false);
  });
});
