const assert = require("assert");
const characterCount = require("../problems/02-character-count.js");

describe("characterCount()", function() {
    it("should return an object with characters of the string as keys and counts of their occurrences as values", function() {
        assert.deepEqual(characterCount("cat"), { c: 1, a: 1, t: 1 });
        assert.deepEqual(characterCount("mississippi"), { m: 1, i: 4, s: 4, p: 2 });
        assert.deepEqual(characterCount("What time is it?"),
        { W: 1, h: 1, a: 1, t: 3, ' ': 3, i: 3, m: 1, e: 1, s: 1, '?': 1});
    });

    it ("should return an empty object for an empty string", function() {
        assert.deepEqual(characterCount(""), {});
    });
});