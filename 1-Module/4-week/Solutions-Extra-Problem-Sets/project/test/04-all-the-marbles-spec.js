const assert = require("assert");
const allTheMarbles = require("../problems/04-all-the-marbles.js");

describe("allTheMarbles", function() {
    it("should be able to accept any number of arguments", function() {
        const marbles = [{ color: 'red', weight: 20 }, { color: 'red', weight: 20 }, { color: 'red', weight: 20}];
        assert.doesNotThrow(() => allTheMarbles(...marbles));
    });

    it("should return the correct total weight for all marbles", function() {
        const marbles = [{ color: 'red', weight: 20 }, { color: 'red', weight: 20 }, { color: 'red', weight: 20 }];
        const marbles2 = [{ color: 'blue', weight: 50 }, { color: 'yellow', weight: 70 }, { color: 'red', weight: 10 }];
        const marbles3 = [{ color: 'green', weight: 15 }, { color: 'purple', weight: 25 }, { color: 'blue', weight: 40 }];

        assert.strictEqual(allTheMarbles(...marbles), 60);
        assert.strictEqual(allTheMarbles(...marbles2), 130);
        assert.strictEqual(allTheMarbles(...marbles3), 80);
    });
    
    it("should return zero if passed no marbles", function() {
        assert.strictEqual(allTheMarbles(), 0);
    });
});