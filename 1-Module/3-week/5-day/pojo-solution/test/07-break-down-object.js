const assert = require("assert");

const breakDownObj = require("../problems/07-break-down-object.js");

describe("breakDownObj()", function() {
    it("should return an array of object keys and values", function() {
        const object1 = { name: "Rupert", age: 5, speak: "Meow" };

        const test1 = breakDownObj(object1);

        const object2 = { location: "NY", borough: "Brooklyn" };
        const test2 = breakDownObj(object2);

        const result1 = ["name", "age", "speak", "Rupert", 5, "Meow"];
        const result2 = ["location", "borough", "NY", "Brooklyn"];

        assert.deepEqual(test1, result1);
        assert.deepEqual(test2, result2);
    });
});