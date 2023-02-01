//* Logarithms - Inverse of an Exponent
  // 2^5 = 32
  // 2*2*2*2*2 = 32
  // log2(32)  = 5
  console.log( Math.log2(39) )
//* Binary Trees - Like Singly Linked-Lists except each node has 2 children
class TreeNode {
  constructor(val) {
    this.val = val;
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

function binaryTreeSearch(root, target) {
  if (!root) return false;
  if (root.val === target) return true;

  if ( binaryTreeSearch(root.left, target) ) return true;
  return binaryTreeSearch(root.right, target);
}
console.log( binaryTreeSearch(a, 'e') );
console.log( binaryTreeSearch(a, 'z') );
  // Traversals
    // Pre-order - action taken happens before the iteration
    // In-order  - action taken happens between the iteration
    // Post-order- action taken happens after the iteration
    function BinaryTreeSum(root) {
      if (!root) return '';

      const leftSum = BinaryTreeSum(root.left);
      const rightSum= BinaryTreeSum(root.right);
      console.log(root.val)

      return root.val + leftSum + rightSum;
    }  
    // BinaryTreeSum(a) 
    // Depth First
    function DFS(root) {
      const stack = [];
      stack.push(root);

      while (stack.length ) {
        let curr = stack.pop();

        if(curr) {
          console.log(curr.val)
          stack.push(curr.right);
          stack.push(curr.left);
        }
      }
    }
    DFS(a)
    // Breadth First
    function BFT(root) {
      const queue = [];
      queue.push(root);

      while( queue.length ) {
        let curr = queue.shift();
        if (curr) {
          console.log( curr.val );
          queue.push(curr.right);
          queue.push(curr.left);
        }
      }
    }
    // BFT(a);
  // Binary Search Trees