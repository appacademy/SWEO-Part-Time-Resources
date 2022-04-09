const assert = require("assert");
const leastCommonFlavor = require("../problems/05-least-common-flavor.js");

describe("leastCommonFlavor()", function() {
    it ("should return null if passed an empty object", function() {
        assert.strictEqual(leastCommonFlavor({}), null);
    });

    it ("should return a string", function() {
        assert.strictEqual(typeof leastCommonFlavor({cherry: 1}), "string");
    });

    it ("the string correctly names the least common flavor given a bag full of candy", function() {
        const bag1 = { cherry: 4, grape: 5, lemon: 3, orange: 2, berry: 4 };
        const bag2 = { cherry: 5, grape: 4, lemon: 2, orange: 3, chocolate: 6 };
        const bag3 = {cherry: 1};

        assert.strictEqual(leastCommonFlavor(bag1), "orange");
        assert.strictEqual(leastCommonFlavor(bag2), "lemon");
        assert.strictEqual(leastCommonFlavor(bag3), "cherry");
    })
});
