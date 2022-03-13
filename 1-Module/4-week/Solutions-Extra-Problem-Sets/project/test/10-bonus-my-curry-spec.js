const assert = require("assert");
const myCurry = require("../problems/10-bonus-my-curry.js");

describe("myCurry()", function(){
    it("should return a function", function() {
        const sumFunc = (...nums) => nums.reduce((acc, el) => acc + el);
        const curriedFunc = myCurry(sumFunc, 4);
        assert.equal(curriedFunc instanceof Function, true);
    });

    it("the returned function should continue to return the same function when invoked and enough arguments have not been collected", function() {
        const sumFunc = (...nums) => nums.reduce((acc, el) => acc + el);
        const curriedFunc = myCurry(sumFunc, 4);
        assert.strictEqual(curriedFunc(1), curriedFunc);
        assert.strictEqual(curriedFunc(1), curriedFunc);
        assert.strictEqual(curriedFunc(1), curriedFunc);
        assert.strictEqual(typeof curriedFunc(1), "number");
    });

    it("should invoke the original function with the collected arguments when the correct number of arguments has been collected", function() {
        const sumFunc = (...nums) => nums.reduce((acc, el) => acc + el);
        const curriedSum = myCurry(sumFunc, 4);
        curriedSum(1);
        curriedSum(2);
        curriedSum(3);
        assert.strictEqual(curriedSum(4), 10);

        const maxFunc = (...nums) => nums.reduce((acc, el) => {
            if (el > acc) {
                return el;
            } else {
                return acc;
            }
        });
        const curriedMax = myCurry(maxFunc, 5);
        curriedMax(10);
        curriedMax(14);
        curriedMax(2);
        curriedMax(29);
        assert.strictEqual(curriedMax(6), 29);
    });
});
