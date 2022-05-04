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
const num1 = new TreeNode(50);
const num2 = new TreeNode(5);
const num3 = new TreeNode(78);
const num4 = new TreeNode(1);
const num5 = new TreeNode(20);
const num6 = new TreeNode(33);
const num7 = new TreeNode(100);
const num8 = new TreeNode(6);
const num9 = new TreeNode(2);

num1.left = num2
num1.right = num3
num2.left = num4
num2.right = num5
num5.left = num6
num5.right = num7
num6.left = num8
num6.right = num9

/*
			 50
			/  \
		   5    78
		 /  \
		1    20
			/  \
		   33   100
		  /  \
		 6    2
*/


/*
This method of traveling as deep as possible down the tree branches until reaching a dead-end,
 then backtracking to the next branch is depth-first order.
*/

// Tree traversal * recursive depth-first

// Pre-order traversal
// Print the current node value
// Recursively call the left subtree
// Recursively call the right subtree

// [50,5,1,20,33,6,2,100,78]
const preOrderTraversal = (root) => {
	// base case
	if(!root) return

	// recursive step
	console.log(root.val)
	preOrderTraversal(root.left)
	preOrderTraversal(root.right)
}

// preOrderTraversal(num1)

// In-order traversal * recursive depth-first
// Recursively call the left subtree
// Print the current node value
// Recursively call the right subtree

// [1, 5, 6, 33, 2, 20, 100, 50, 78]
const inOrderTraversal = (root) => {
	// base case
	if(!root) return

	// recursive step
	inOrderTraversal(root.left)
	console.log(root.val)
	inOrderTraversal(root.right)
}

// inOrderTraversal(num1)

// Post-order traversal * recursive depth-first
// Recursively call the left subtree
// Recursively call the right subtree
// Print the current node value

// [1, 6, 2, 33, 100, 20, 5, 78, 50]
const postOrderTraversal = (root) => {
	// base case
	if(!root) return

	// recursive step
	postOrderTraversal(root.left)
	postOrderTraversal(root.right)
	console.log(root.val)
}

// postOrderTraversal(num1)

/*
breadth-first traversal will visit each node in a particular level before moving down to the next level.
Cannot be implemented recursively with a binary search tree, but to the nature of recursion
*/

// Breadth First with queue
const breadthFirstTraversal = (root) => {
	if (!root) return;

    const queue = [root];
    let curr;

    while (queue.length) {
      curr = queue.shift();

      console.log(curr.val);

      if (curr.left) queue.push(curr.left);
      if (curr.right) queue.push(curr.right);
    }

    return;
}

// breadthFirstTraversal(num1)
// depth first with a stack


const depthFirstTraversal = (root) => {
	if (!root) return;

    const stack = [root];
    let curr;

    while (stack.length) {
      curr = stack.pop();

      console.log(curr.val);
	  if (curr.right) stack.push(curr.right);
      if (curr.left) stack.push(curr.left);
    }

    return;
}

depthFirstTraversal(num1)
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


// Recursive

// big o time o(log n) space o(n)
const searchBSTRecursive = (root, target) => {
	// base case
	if(!root) return false
	if (root.val === target) return true

	// recursive case
	if (root.val > target) return searchBSTRecursive(root.left, target)
	if (root.val < target) return searchBSTRecursive(root.right, target)
}

// Iterative

// big o time o(log n) space o(1)
const searchBSTIterative = (root, target) => {
	// base case
	if(!root) return false // space o(1)

	let curr = this.root; // space o(1)

    while (curr) {
      if (curr.val === val) return true; // space o(1)
      if (curr.val < val) curr = curr.right;
      else curr = curr.left;
    }
    return false; // space o(1)
}
