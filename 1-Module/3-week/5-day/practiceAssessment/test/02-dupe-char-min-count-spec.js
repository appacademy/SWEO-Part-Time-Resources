const assert = require('assert').strict;

const duplicateCharMinCount = require('../problems/02-dupe-char-min-count.js');

describe('dupeCharMinCount()', function() {
	it('returns an array of characters that show up at least the specified minimum number of times', function() {
		assert.deepStrictEqual(duplicateCharMinCount("apple", 2), ["p"]);
		assert.deepStrictEqual(duplicateCharMinCount("banana", 2), ["a", "n"]);
		assert.deepStrictEqual(
			duplicateCharMinCount("What about a longer string?", 3),
			["a", "t", " "]
		);
	});
});
