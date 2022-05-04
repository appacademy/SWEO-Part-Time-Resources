const { expect } = require('chai');

const { TreeNode, findLeftMostAndRightMost, findHeight } = require('../tree')


describe('Right Side', () => {

	const Right = new TreeNode(20, null, null);
	Right.right = new TreeNode(100, null, null);
	Right.right.right = new TreeNode(350, null, null);
	Right.right.right.right = new TreeNode(600, null, null);
	Right.right.right.right.right = new TreeNode(600, null, null);
	Right.right.right.right.right.right = new TreeNode(600, null, null);

	context('Most right leaf', () => {

	  it(`Produces a an array containing the right most leaf`, () => {

		const rightMostLeaf = findLeftMostAndRightMost(Right)

		expect(rightMostLeaf).to.deep.equal([600])

	  });

	});

	context('Height of right only tree', () => {

		it(`Produces the height value of the tree`, () => {

		  const height = findHeight(Right)

		  expect(height).to.deep.equal(6)

		});

	});

})


describe('Both sides', () => {

	const tree = new TreeNode(1000, null, null);
	tree.left = new TreeNode(5, null, null);
	tree.left.left = new TreeNode(20, null, null);
	tree.right = new TreeNode(10, null, null);
	tree.right.right = new TreeNode(60, null, null);

	context('Most left and most right', () => {

	  it(`Produces a an array containing the left and right most leaf`, () => {

		const both = findLeftMostAndRightMost(tree)

		expect(both).to.deep.equal([20,60])

	  });

	});

})


describe('Big tree', () => {

	const bigTree = new TreeNode(9999, null, null);
	bigTree.left = new TreeNode(100, null, null);
	bigTree.left.left = new TreeNode(200, null, null);
	bigTree.left.right = new TreeNode(300, null, null);
	bigTree.left.left.right = new TreeNode(400, null, null);
	bigTree.left.left.left = new TreeNode(500, null, null);
	bigTree.left.right.left = new TreeNode(600, null, null);
	bigTree.left.right.right = new TreeNode(700, null, null);

	bigTree.right = new TreeNode(55, null, null);
	bigTree.right.right = new TreeNode(123, null, null);
	bigTree.right.left = new TreeNode(321, null, null);
	bigTree.right.left.left = new TreeNode(432, null, null);
	bigTree.right.left.left.left = new TreeNode(314, null, null);

	context('Most left and most right', () => {

	  it(`Produces a an array containing the left and right most leaf`, () => {

		const both = findLeftMostAndRightMost(bigTree)

		expect(both).to.deep.equal([500,123])

	  });

	});

})
