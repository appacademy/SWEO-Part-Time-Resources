const assert = require("assert");
const dynamicSlice = require("../problems/04-dynamic-slice.js");

describe("dynamicSlice()", function() {
    it("should return a function", function() {
        const slicer = dynamicSlice(2, 4);
        assert.equal(slicer instanceof Function, true);
    });

    it("the function returned should correctly return a copy of a portion of the original array", function() {
        const slicer = dynamicSlice(2, 4);
        assert.deepEqual(slicer([0, 1, 2, 3]), [2, 3]);
        assert.deepEqual(slicer([2, 4, 'hello', 'false']), ['hello', 'false']);
        
        const slicer2 = dynamicSlice(-2, 10);
        assert.deepEqual(slicer2([0, 1, 2, 3]), [0, 1, 2, 3]);
    });

});