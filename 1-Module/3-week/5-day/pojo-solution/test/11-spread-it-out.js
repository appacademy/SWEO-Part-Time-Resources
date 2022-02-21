const assert = require("assert");

const spreadItOut = require("../problems/11-spread-it-out.js");

describe("spreadItOut()", function() {
    it("should return a single array fron the two arrays in the order they were received", function() {
        const test1 = spreadItOut([3, 5, 6], [1, 2, 3]);
        const result1 = [3, 5, 6, 1, 2, 3];

        const test2 = spreadItOut(["apple", "banana"], [1, 2, 3]);
        const result2 = ["apple", "banana", 1, 2, 3];

        assert.deepEqual(test1, result1);
        assert.deepEqual(test2, result2);
    });
});