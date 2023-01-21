const assert = require("assert");
const { costOfGroceries, mostExpensiveGroceries } = require("../problems/01-mostExpensiveGroceries")

describe("constOfGroceries()", function () {
    const groceriesA = ['cheese', 'butter', 'eggs'];
    const groceriesB = ['eggs', 'milk', 'bread', 'bread'];
    const groceriesC = ['cheese', 'bread'];
    const groceriesD = ['eggs', 'butter'];
    it("should total the cost of cheese, butter, and eggs", function () {
        assert.strictEqual(costOfGroceries(groceriesA), 8)
    })
    it("should total the cost of eggs, milk, bread, and more bread", function () {
        assert.strictEqual(costOfGroceries(groceriesB), 13)
    })
    it("should total the cost of cheese and bread", function () {
        assert.strictEqual(costOfGroceries(groceriesC), 9)
    })
    it("should total the cost of eggs and butter", function () {
        assert.strictEqual(costOfGroceries(groceriesD), 3)
    })

})
describe("mostExpensiveGroceries()", function () {
    const groceriesA = ['cheese', 'butter', 'eggs'];
    const groceriesB = ['eggs', 'milk', 'bread', 'bread'];
    const groceriesC = ['cheese', 'bread'];
    const groceriesD = ['eggs', 'butter'];
    it("should report the index of the most expensive grocery list", function () {
        assert.strictEqual(mostExpensiveGroceries([groceriesA, groceriesB, groceriesC, groceriesD]), 1)
    })
    it("should do it again but with different input", function () {
        assert.strictEqual(mostExpensiveGroceries([groceriesA, groceriesD]), 0)
    })
    it("should do it once more with different input yet again", function () {
        assert.strictEqual(mostExpensiveGroceries([groceriesA, groceriesD, groceriesC]), 2)
    })
})