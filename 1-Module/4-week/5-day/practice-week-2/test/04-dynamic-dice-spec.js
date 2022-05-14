const assert = require('assert');
const dynamicDice = require('../problems/04-dynamicDice');

describe('dynamicDice()', function() {
    it('Should return an integer representing the highest roll total a player can achieve', function() {

        const func = dynamicDice(20);
        const res = func(2);
        assert.strictEqual(res, 40);

        const func2 = dynamicDice(12);
        const res2 = func2(1);
        assert.strictEqual(res2, 12);


    });

    it('The value returned from the dynamicDice should be a function', function() {


        let res = dynamicDice(20);
        assert.ok(typeof res === 'function');

    });
});