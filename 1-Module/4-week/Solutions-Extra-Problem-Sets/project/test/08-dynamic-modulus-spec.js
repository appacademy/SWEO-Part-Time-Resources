const assert = require("assert");
const dynamicModulus = require("../problems/08-dynamic-modulus.js");

describe("dynamicModulus()", function() {
    it("should return a function that accepts a number", function () {
        const modByTwo = dynamicModulus(2);

        assert.doesNotThrow(() => modByTwo(5));
    });

    it("should return a new modulus function for each initial argument", function () {
        const modByTwo = dynamicModulus(2);

        const modByThree = dynamicModulus(3);

        const modByFive = dynamicModulus(5);

        assert.strictEqual(modByTwo(21), 1);
        assert.strictEqual(modByThree(32), 2);
        assert.strictEqual(modByFive(73), 3);
    });
});