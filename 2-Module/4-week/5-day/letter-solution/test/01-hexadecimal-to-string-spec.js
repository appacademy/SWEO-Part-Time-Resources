const assert = require('assert');

const hexadecimalToString = require('../problems/01-hexadecimal-to-string');

describe('hexadecimalToString converter', function() {
    it("translates 'A'", function() {

        let result = hexadecimalToString(['0x0041']);
        assert.strictEqual(result, 'A');
    });

    it("translates '123'", function() {

        let result = hexadecimalToString([ '0x0031', '0x0032', '0x0033' ]);
        assert.strictEqual(result, '123');
    });

    it("translates 'App Academy'", function() {

        let result = hexadecimalToString([
            '0x0041', '0x0070',
            '0x0070', '0x0020',
            '0x0041', '0x0063',
            '0x0061', '0x0064',
            '0x0065', '0x006d',
            '0x0079'
        ]);
        assert.strictEqual(result, 'App Academy');
    });

    it("translates 'Hello, world!'", function() {

        let result = hexadecimalToString([
            '0x0048', '0x0065',
            '0x006c', '0x006c',
            '0x006f', '0x002c',
            '0x0020', '0x0077',
            '0x006f', '0x0072',
            '0x006c', '0x0064',
            '0x0021'
        ]);
        assert.strictEqual(result, 'Hello, world!');
    });

    it("translates 'Computer Science'", function() {

        let result = hexadecimalToString([
            '0x0043', '0x006f',
            '0x006d', '0x0070',
            '0x0075', '0x0074',
            '0x0065', '0x0072',
            '0x0020', '0x0053',
            '0x0063', '0x0069',
            '0x0065', '0x006e',
            '0x0063', '0x0065'
        ]);
        assert.strictEqual(result, 'Computer Science');
    });

    it("translates 'She sells seashells by the seashore.'", function() {

        let result = hexadecimalToString([
            '0x0053', '0x0068', '0x0065', '0x0020',
            '0x0073', '0x0065', '0x006c', '0x006c',
            '0x0073', '0x0020', '0x0073', '0x0065',
            '0x0061', '0x0073', '0x0068', '0x0065',
            '0x006c', '0x006c', '0x0073', '0x0020',
            '0x0062', '0x0079', '0x0020', '0x0074',
            '0x0068', '0x0065', '0x0020', '0x0073',
            '0x0065', '0x0061', '0x0073', '0x0068',
            '0x006f', '0x0072', '0x0065', '0x002e'
        ]);
        assert.strictEqual(result, 'She sells seashells by the seashore.');
    });

});




