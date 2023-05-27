const assert = require('assert');
const miahsCats = require('../problems/01-miahsCats');


describe('miahsCats()', function() {
    it('Should return an integer representing number of keys and values that are either "cute" or "adorable"', function() {

        let obj1 = { "cute": "fruit", "adorable": "fruit", "cute-face": "vegetable", "adorable-face": "fruit" }
        let result1 = miahsCats(obj1) // 4
        assert.strictEqual(result1, 4)

    });

    it('Should count keys and values that contain either upper case OR lower case characters.', function() {

        let obj2 = {"CUTeE": "adORabLeE", "Cute-and": "adorable"}
        let result2 = miahsCats(obj2) // 4
        assert.strictEqual(result2, 4)

    });
});