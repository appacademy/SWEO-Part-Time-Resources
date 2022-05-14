const assert = require("assert");
const discountPrices = require("../problems/09-discount-prices.js");

describe("discountPrices()", function() {
    it ("should return an array of strings that represent the correct discounted price rounded to two decimal places", function() {
        const prices = [10.00, 21.99, 54.49, 60.00];
        const prices2 = [4.99, 12.29, 59.00];
        const discounts = [0.2, 0.15, 0.3, 0.5];
        const discounts2 = [0.15, 0.3, 0.1];

        assert.deepEqual(discountPrices(prices, discounts), ['$8.00', '$18.69', '$38.14', '$30.00']);
        assert.deepEqual(discountPrices(prices2, discounts2), ['$4.24', '$8.60', '$53.10']);
    });
    
    it("should be an arrow function", function() {
        assert.strictEqual(typeof discountPrices.prototype, "undefined");
    });
});