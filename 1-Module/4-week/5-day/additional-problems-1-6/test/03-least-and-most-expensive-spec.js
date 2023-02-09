const assert = require("assert");
const leastAndMostExpensive = require("../problems/03-least-and-most-expensive.js");

describe("leastAndMostExpensive()", function() {
    it ("should return an array", function() {
        const test = {'test': 1, 'test2': 2}; 
        assert.strictEqual(Array.isArray(leastAndMostExpensive(test)), true);
    });

    it ("where the first value is the name of the least expensive toy, and the second value is the most expensive", function() {
        const catalog = { 'ball': 5, 'jumprope': 3, 'yo-yo': 10, 'trading cards': 12 };
        const catalog2 = { 'skateboard': 50, 'bicycle': 100, 'doll': 10, 'puzzle': 20 };
        const catalog3 = { 'gaming console': 100, 'stuffed animal': 10 };

        assert.deepEqual(leastAndMostExpensive(catalog), ['jumprope', 'trading cards']);
        assert.deepEqual(leastAndMostExpensive(catalog2), ['doll', 'bicycle']);
        assert.deepEqual(leastAndMostExpensive(catalog3), ['stuffed animal', 'gaming console']);
    });
});