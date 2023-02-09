const assert = require('assert').strict;

const shoppingList = require('../problems/03-shopping-list.js');

describe('shoppingList()', function() {
	it('should return a new function', function() {
		assert.equal(typeof shoppingList([]), 'function');
	});

	it('should add the item passed in to the list and return the list with the added item', function() {
		const groceryList = ['eggs'];
		const addToGroceryList = shoppingList(groceryList); // returns a function
		assert.deepStrictEqual(addToGroceryList('maple syrup'), ['eggs', 'maple syrup']);
		assert.deepStrictEqual(groceryList, ['eggs', 'maple syrup']);

		const clothesList = []
		const addToClothesList = shoppingList(clothesList);
		assert.deepStrictEqual(addToClothesList('tshirt'), ['tshirt']);
		assert.deepStrictEqual(addToClothesList('pants'), ['tshirt', 'pants']);
		assert.deepStrictEqual(clothesList, ['tshirt', 'pants']);
	});
});
