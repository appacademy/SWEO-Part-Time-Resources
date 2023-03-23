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

//         10  --> root
//      8     12
//    7  9  11   15
//   5             20
//  3  6         17

// find val = 12
// result = node 12

// find val = 5
// result = node 5

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

// function searchNode(node, val){
// 	if(!node) return null // base case
// 	if(node.val === val) return node // base case

// 	if(val > node.val) return searchNode(node.right, val)
// 	if(val < node.val) return searchNode(node.left, val)
// } // time o(logN), space o(n)

// const arr = []
// function preOrderTraversal(node){
// 	arr.push(node.val)
// 	if(node.left) preOrderTraversal(node.left)
// 	if(node.right) preOrderTraversal(node.right)
// }

// preOrderTraversal(root)

// console.log(arr)

// 				height = 0, 1
//         10     node 10 --> height 4, depth 0
//      /     \  --> edges
//      8     12  --> node 12 height 3, depth 1
//     / \   /   \
//    7  9  11   15
//   5             20
//  3  6         17    node 17 --> height 0, depth 4

// console.log(searchNode(root, 15)) // node 15 with is corresponding children
// console.log(searchNode(root, 7)) // node 7

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
