class TreeNode {
    constructor(val) {
        this.value = val;
        this.left = null;
        this.right = null;
    }
}

const one = new TreeNode(1);
const two = new TreeNode(2);
const three = new TreeNode(3);
const four = new TreeNode(4);
const five = new TreeNode(5);
const six = new TreeNode(6);
const seven = new TreeNode(7);

four.left = two;
four.right = six;
two.left = one;
two.right = three;
six.left = five;
six.right = seven;


// Depth First Search
function binaryTreeSearch(root, target) {

    // Base case: If the tree is null, return false
    if (root === null) return false;

    // If the current node's value equals the target, return true
    if (root.value === target) return true;

    // Otherwise, search the left subtree for the target
    if (binaryTreeSearch(root.left, target)) return true;

    // If the value isn't in the left subtree, try the right subtree
    return binaryTreeSearch(root.right, target);
}

// traversal (visit all nodes)
function binaryTreeSum(root) {

    // Check the base case
    if (root === null) return 0;

    // Recursively sum up the left and right trees
    const leftSum = binaryTreeSum(root.left);
    const rightSum = binaryTreeSum(root.right);

    // Return the value plus the left and right totals
    return root.value + leftSum + rightSum;
}


function binaryTreePreOrder(root) {
    if (!root) return;
    console.log(root.value);
    binaryTreePreOrder(root.left)
    binaryTreePreOrder(root.right)
}

console.log("---------- Pre Order ----------")
binaryTreePreOrder(four)
console.log("---------- ********* ----------")

function binaryTreeInOrder(root) {
    if (!root) return;
    binaryTreeInOrder(root.left)
    console.log(root.value);
    binaryTreeInOrder(root.right)
}

console.log("---------- In Order ----------")
binaryTreeInOrder(four)
console.log("---------- ******** ----------")

function binaryTreePostOrder(root) {
    if (!root) return;
    binaryTreePostOrder(root.left)
    binaryTreePostOrder(root.right)
    console.log(root.value);
}

console.log("---------- Post Order ----------")
binaryTreePostOrder(four)
console.log("---------- ********** ----------")

/* 
All of the above traversals are using a depth-first approach, where we visit
all of the nodes in root-left-right order. What that means, is that we're going
to go as far left as possible before branching off to the right. We'll use this
traversal pattern when doing depth-first searches. We want to go as deep to one
side as possible to find out whether or not we have what we're looking for.

Let's take a look at a breadth-first pattern. Rather than building a queue,
we'll use the built in array even if its not the most ideal
*/

function breadthFirstTraversal(root) {
    const queue = [root];
    while (queue.length) {
        const current = queue.shift();
        console.log(current.value);
        if (current.left) queue.push(current.left);
        if (current.right) queue.push(current.right);
    }
}

console.log("---------- Breadth First ----------")
breadthFirstTraversal(four)
console.log("---------- ************* ----------")

/*
Here we see root-left-right. We can visualize this approach as going left-to-
right on each level of our tree, printing out each node as we go. Let's change
it up to use a stack (rather than recursion) to go in depth-first order
*/

function depthFirstTraversal(root){
    const stack = [root];
    while (stack.length){
        const current = stack.pop();
        console.log(current.value);
        if (current.right) stack.push(current.right);
        if (current.left) stack.push(current.left);
    }
}

console.log("---------- Depth First ----------")
depthFirstTraversal(four)
console.log("---------- ************ ----------")

/*
Feels awfully familiar... Why are we getting the same result as our recursive\
traversal implementation?
*/