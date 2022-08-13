const assert = require("assert");
const itemsWithinBudget = require("../problems/06-items-within-budget.js");

describe("itemsWithinBudget()", function() {
    it("should return an array of item names whose price is within the given budget", function() {
        const items1 = [
            { name: 'iPhone', price: 700 },
            { name: 'laptop', price: 2000 },
            { name: 'guitar', price: 300 },
            { name: 'camera', price: 1200 }
        ];
        const items2 = [
            { name: 'online classes', price: 1000 },
            { name: 'omakase bento box', price: 100 },
            { name: 'medicine', price: 50 }
        ];
        const items3 = [
            { name: 'wristband', price: 10 },
            { name: 'bracelet', price: 12 },
            { name: 'headphones', price: 250 }
        ]

        const test1 = itemsWithinBudget(1000, items1);
        const test2 = itemsWithinBudget(200, items2);
        const test3 = itemsWithinBudget(10, items3);

        assert.strictEqual(test1.includes('iPhone') && test1.includes('guitar'), true);
        assert.strictEqual(test1.length, 2);
        assert.strictEqual(test2.includes('omakase bento box') && test2.includes('medicine'), true);
        assert.strictEqual(test2.length, 2);
        assert.strictEqual(test3.includes('wristband'), true);
        assert.strictEqual(test3.length, 1);
    });

    it("should return an empty array if passed an empty array of items or if no items are within budget", function() {
        const items1 = [
            { name: 'iPhone', price: 700 },
            { name: 'laptop', price: 2000 },
            { name: 'guitar', price: 300 },
            { name: 'camera', price: 1200 }
        ];
        assert.deepEqual(itemsWithinBudget(0, []), []);

        assert.deepEqual(itemsWithinBudget(100, items1), []);
    });

    it("should be an arrow function", function () {
        assert.strictEqual(typeof itemsWithinBudget.prototype, "undefined");
    });

});