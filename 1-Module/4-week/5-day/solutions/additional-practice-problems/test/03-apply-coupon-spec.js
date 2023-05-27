const assert = require('assert');
const applyCoupon = require('../problems/03-applyCoupon');

describe('applyCoupon()', function() {
    it('Should return an integer representing the total cost, after applying the discount onto each item', function() {
        const wishList = [
            {name: "Xbox", price: 80},
            {name: "Bacon", price: 5},
            {name: "Gummy Candies", price: 3},
            {name: "SURGE soda 24 pack", price: 10}
            ];
        assert.strictEqual(applyCoupon(10, wishList), 88.2)
        assert.strictEqual(applyCoupon(20, wishList), 78.4)

    });

    it('The value returned from the function should be an integer', function() {

        const wishList = [
            {name: "Xbox", price: 80},
            {name: "Bacon", price: 5},
            {name: "Gummy Candies", price: 3},
            {name: "SURGE soda 24 pack", price: 10}
            ];
        let res = applyCoupon(10, wishList);
        assert.ok(typeof res === 'number');

    });
});