const assert = require("assert");
const commonValues = require("../problems/01-common-values.js");

describe("commonValues()", function() {
    it("should return an array", function() {
        assert.equal(Array.isArray(commonValues({}, {})), true);
    });
    
    it("the array should contain the common values present in both objects", function() {
        const cat = { color: 'white', legs: 4, favoriteFood: 'sushi' };
        const bunny = { color: 'white', favoriteFood: 'carrots' };
        const human = { hobbies: ['running', 'painting'], legs: 4, favoriteFood: 'sushi' };
        const vehicle = { wheels: 4, color: 'red' };

        const test1 = commonValues(cat, bunny);
        const test2 = commonValues(cat, human);
        const test3 = commonValues(cat, vehicle);

        assert.strictEqual(test1.includes('white'), true);
        assert.strictEqual(test1.length, 1);
        assert.strictEqual(test2.includes(4) && test2.includes('sushi'), true);
        assert.strictEqual(test2.length, 2);
        assert.strictEqual(test3.includes(4), true);
        assert.strictEqual(test3.length, 1);
    });
});

