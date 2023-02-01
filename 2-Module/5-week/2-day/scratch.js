//* Logarithms - Inverse of Exponents
// 2^5 => 32
// 2*2*2*2*2 = 32
// log2(32) = 5
console.log(Math.log2(32))

//* Binary Trees - like singly linked-lists except each node has 2 children
// they are graphs that don't have any cycles
class TreeNode {
  constructor(val) {
    this.value = val;
    this.left = null;
    this.right = null;
  }
}

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
// Traversals
function binaryTreeSearch(root, target) {
  if (!root) return false;

  if (root.value === target) return true;
  if (binaryTreeSearch(root.left, target)) {
    return true;
  }
  console.log(root.value)
  return binaryTreeSearch(root.rigth, target);
}

console.log(binaryTreeSearch(a, 'z'))
function binaryTreeSum(root) {
  if (!root) return '';

  // console.log(root.value, 'PRE')
  const leftSum = binaryTreeSum(root.left);
  // console.log(root.value, 'IN')
  const rightSum = binaryTreeSum(root.right);
  // console.log(root.value, 'POST')

  return root.value + leftSum + rightSum;
}
console.log(binaryTreeSum(a))
// Depth First
// Pre-order Traversals - do the action before recursion
// In-order Traversal   - do the action between recursions
// Post-order Traversals- do the action after recursions
// Breadth First
function BFT(root) {
  const queue = [];
  queue.push(root);

  while (queue.length > 0) {
    // console.log(queue);
    let curr = queue.shift();
    if (curr) {
      console.log(curr.value);
      queue.push(curr.left)
      queue.push(curr.right);
    }
  }
}
// BFT(a);
function DFT(root) {
  const stack = [];
  stack.push(root);

  while (stack.length) {
    let curr = stack.pop();
    if (curr) {
      console.log(curr.value);
      stack.push(curr.right);
      stack.push(curr.left);
    }
  }
}
// DFT(a);
// Binary Search Trees - A binary tree, where lesser values are always to the left and greater values are always to the right of the root;
let bstRoot = new TreeNode(8);
let bst1 = new TreeNode(3);
let bst2 = new TreeNode(10);
let bst3 = new TreeNode(1);
let bst4 = new TreeNode(6);
let bst5 = new TreeNode(14);
let bst6 = new TreeNode(4);
let bst7 = new TreeNode(7);
let bst8 = new TreeNode(13);

bstRoot.left = bst1;
bstRoot.right = bst2;
bst1.left = bst3;
bst1.right = bst4;
bst2.right = bst5;
bst4.left = bst6;
bst4.right = bst7;
bst5.left = bst8;

// function searchBST(root, target) {
//   if (!root) return false;
//   if (root.value === target) return true;

//   if (root.value > target) return searchBST(root.left, target);
//   if (root.value < target) return searchBST(root.right, target);
// }
function searchBST(root, target) {
  let curr = root;

  while (curr) {
    if (target === curr.value) return true;

    if (curr.value > target) curr = curr.left;
    if (curr.value < target) curr = curr.right;
  }

  return false;
}
console.log(searchBST(bstRoot, 2));
console.log(searchBST(bstRoot, 13))