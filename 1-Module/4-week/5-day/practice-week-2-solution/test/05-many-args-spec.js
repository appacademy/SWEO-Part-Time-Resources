const assert = require('assert');
const manyArgs = require('../problems/05-manyArgs');

describe('manyArgs()', function() {
    it('Should return an integer representing all the args passed to it multiplied together', function() {

        const res = manyArgs(1, 5, 6, 3, 1, 2);
        assert.strictEqual(res, 180);
        const res2 = manyArgs(4, 4, 4, 4, 4, 4, 4);
        assert.strictEqual(res2, 16384);
    });
});