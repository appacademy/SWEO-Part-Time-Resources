const assert = require('assert').strict;

const keyAdderUniqueVal = require('../problems/01-key-adder-unique-val.js');

describe('keyAdderUniqueVal()', function() {
	it('should add a key value pair to the object only if the value is unique and return that object', function() {
		let cat = {name: 'Willie', color: 'orange'};
		assert.deepStrictEqual(keyAdderUniqueVal(cat, "toy", "yarn"), {name: "Willie", color: "orange", toy: "yarn"});
		assert.deepStrictEqual(keyAdderUniqueVal(cat, "fruit", "orange"), {name: "Willie", color: "orange", toy: "yarn"});
		assert.deepStrictEqual(cat, {name: "Willie", color: "orange", toy: "yarn"});
		
		let dog = { name: 'Layla' };
		assert.deepStrictEqual(keyAdderUniqueVal(dog, "fancy", false), {name: "Layla", fancy: false});
		assert.deepStrictEqual(keyAdderUniqueVal(dog, "sitting", false), {name: "Layla", fancy: false});
		assert.deepStrictEqual(keyAdderUniqueVal(dog, "cute", true), { name: "Layla", fancy: false, cute: true});
		assert.deepStrictEqual(dog, { name: "Layla", fancy: false, "cute": true});
	});
});
