const assert = require('assert').strict;

const pickyMyMap = require('../problems/04-picky-my-map.js');

describe('pickyMyMap()', function() {
	it('should return a new array of results through the callback function of only elements that are truthy', function() {
		const nums = [1, 2, 3, 4];
		assert.deepStrictEqual(pickyMyMap(nums, (num) => num - 2), [-1, 1, 2]);
		assert.deepStrictEqual(nums, [1, 2, 3, 4]);

		const booleans = [true, false, true, false, true];
		assert.deepStrictEqual(pickyMyMap(booleans, (boolean) => !boolean), [true, true]);
		assert.deepStrictEqual(booleans, [true, false, true, false, true]);
	});
});
