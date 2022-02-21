const assert = require("assert");

const restSum = require("../problems/10-rest-sum.js");

describe("restSum()", function() {
    it("should add any number of incoming arguments", function() {
        const test1 = restSum(3, 5, 6);
        const result1 = 14;

        const test2 = restSum(1, 2, 3, 4, 5, 6, 7, 8, 9);
        const result2 = 45;

        const test3 = restSum(0, 0);
        const result3 = 0;

        assert.deepEqual(test1, result1);
        assert.deepEqual(test2, result2);
        assert.deepEqual(test3, result3);
    });
});