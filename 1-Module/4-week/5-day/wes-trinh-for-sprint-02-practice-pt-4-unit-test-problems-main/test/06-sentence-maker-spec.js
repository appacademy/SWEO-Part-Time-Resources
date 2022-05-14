const assert = require('assert').strict;

const sentenceMaker = require('../problems/06-sentence-maker.js');

describe('sentenceMaker()', function() {
	it('should create a sentence from all the arguments passed in and add an exclamation mark at the end', function() {
		assert.equal(sentenceMaker('Hello World'), 'Hello World!');
		assert.equal(sentenceMaker('I', 'love', 'coding'), 'I love coding!');
		assert.equal(
			sentenceMaker('The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog'), 
			'The quick brown fox jumps over the lazy dog!'
		);
	});

	it('should be an arrow function', function() {
		const isArrowFn = (fn) => (typeof fn === 'function') && /^[^{]+?=>/.test(fn.toString());
		assert.equal(isArrowFn(sentenceMaker), true)
	})
});
