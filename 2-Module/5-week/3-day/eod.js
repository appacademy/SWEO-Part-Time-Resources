class TreeNode {
	constructor(val) {
	  this.val = val;
	  this.left = null;
	  this.right = null;
	}
}

// searchNode
// You are given the root of a binary search tree (BST)
// and an integer val.

// Find the node in the BST that the node's value equals val
// and return the subtree rooted with that node.
// If such a node does not exist, return null.

//         10
//      8     12
//    7  9  11   15
//   5             20
//  3  6         17

// find val = 12
// result = node 12

// find val = 5
// result = node of 5

const root = new TreeNode(10)
const eight = new TreeNode(8)
const twelve = new TreeNode(12)
root.left = eight
root.right = twelve
const seven = new TreeNode(7)
const nine = new TreeNode(9)
eight.left = seven
eight.right = nine
const eleven = new TreeNode(11)
const fifteen = new TreeNode(15)
twelve.left = eleven
twelve.right = fifteen
const five = new TreeNode(5)
seven.left = five
const three = new TreeNode(3)
const six = new TreeNode(6)
five.left = three
five.right = six
const twenty = new TreeNode(20)
const seventeen = new TreeNode(17)
fifteen.left = seventeen
fifteen.right = twenty

function searchNode(node, val){
	if(!node || !val) return null; // base cases
	// console.log(node.val, val, 'value')
	if(node.val === val) return node

	if(node.val > val) return searchNode(node.left, val)
	if(node.val < val) return searchNode(node.right, val)
}
//         10
//      8     12
//    7  9  11   15
//   5             20
//  3  6         17

console.log(searchNode(root, 15)) // node 15 with is corresponding children
console.log(searchNode(root, 7)) // node 7

// Increasing order
// Given the root of a binary search tree,
// rearrange the tree in in-order so that the leftmost
// node in the tree is now the root of the tree,
// and every node has no left
// child and only one right child.

//   6
// 5  7
//     8
//      9

//
