/*
What is a graph? 
A graph is a collection of nodes and any edges between those nodes. 
You've likely seen depictions of graphs before, 
and they usually exist as circles (nodes) and arrows (edges) between those circles.

** a linked list is a graph, and a tree and a linked list
** a binary tree, ie nodes with only two child pointers, is a tree and a graph,  but not a linked list
** a tree with more than two children is a graph, and a tree
** a graph that has nodes that has more than one parent is only a graph, because nodes in a tree can only have one parent.

What is a tree ? 
You can think of them as being like a singly-linked list, 
except that instead of each node having a single next node, 
it may have more than one child node.

A tree is a graph that does not contain any cycles. 
A cycle is defined as a path through edges that begins and ends at the same node.

What is a binary tree?
Simply put, A binary tree is a tree where nodes have at most 2 children
*/


// Binary tree node example

class TreeNode {
    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
    }
}

// building a binary tree example
let a = new TreeNode('a');
let b = new TreeNode('b');
let c = new TreeNode('c');
let d = new TreeNode('d');
let e = new TreeNode('e');
let f = new TreeNode('f');

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

/*
This method of traveling as deep as possible down the tree branches until reaching a dead-end,
 then backtracking to the next branch is depth-first order.
*/

// Tree traversal * recursive depth-first

// Pre-order traversal
// Print the current node value
// Recursively call the left subtree
// Recursively call the right subtree

const preOrderTraversal = (root) => {

}

// In-order traversal * recursive depth-first
// Recursively call the left subtree
// Print the current node value
// Recursively call the right subtree

const inOrderTraversal = (root) => {

}

// Post-order traversal * recursive depth-first
// Recursively call the left subtree
// Recursively call the right subtree
// Print the current node value

const postOrderTraversal = (root) => {

}

/*
breadth-first traversal will visit each node in a particular level before moving down to the next level.
Cannot be implemented recursively with a binary search tree, but to the nature of recursion 
*/

// Breadth First with queue

<<<<<<< HEAD
[ ]


=======
>>>>>>> 2022-Jan-W
const breadthFirstTraversal = () => {

}

// depth first with a stack


const depthFirstTraversal = () => {

}

/*
Binary search tree,  same as the binary tree, ie but with avery powerful rule,
every node contained in the left branch of any node will be less than the value of the node itself, 
and every node in the right branch will be greater than the node value.
*/

/*
Searching a binary search tree
Binary search trees can be searched by calling the following recursive function on the root node:

If the root node is null, return false
If the root node's value equals the target, return true.
If the target is less than the root value, recursively search the left child
If the target is greater than the root value, recursively search the right child
*/
<<<<<<< HEAD
=======

// Recursive

const searchBSTRecursive = () => {

}

// Iterative

const searchBSTIterative = () => {

}
>>>>>>> 2022-Jan-W
