const assert = require('assert');
const spiderManWriters = require('../problems/02-spiderManWriters');
const shallowEqual = require('./shallowEqual');

describe('spiderManWriters()', function() {
    it('Should return an object representing the people who did not write articles about Spiderman', function() {

        const str1 = 'Angela T: wrote about Spiderman, Miah B: no Spiderman, Adrian R: wrote about Spiderman';
        const str2 = 'Tom B: no Spiderman, Justin N: no Spiderman, Emily B: wrote about Spiderman';
        let result1 = spiderManWriters(str1);
        assert.ok(shallowEqual(result1, {'Miah B': 'no Spiderman'}))
        let result2 = spiderManWriters(str2);
        assert.ok(shallowEqual(result2, {'Justin N': 'no Spiderman', 'Tom B': 'no Spiderman'}))
    });

    it('The value returned from the function should be an object', function() {

        const str2 = 'Tom B: no spiderman, Justin N: no Spiderman, Emily B: wrote about Spiderman';
        let result2 = spiderManWriters(str2);
        assert.ok(typeof result2 === 'object');

    });
});
