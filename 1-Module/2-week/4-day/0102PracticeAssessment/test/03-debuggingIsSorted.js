const assert = require("assert");
const isSorted = require("../problems/03-debuggingIsSorted")

describe("isSorted()", function () {
    it("should properly tell if an [1, 2, 3, 4, 5] is sorted", function () {
        assert.strictEqual(isSorted([1, 2, 3, 4, 5]), true)
    })
    it("should report whether [2, 2, 4, 4] is sorted", function () {
        assert.strictEqual(isSorted([2, 2, 4, 4]), true)
    })
    it("should let us know if [1, 2, 4, 3, 5, 6]  is sorted", function () {
        assert.strictEqual( isSorted([1, 2, 4, 3, 5, 6]), false)
    })
})
