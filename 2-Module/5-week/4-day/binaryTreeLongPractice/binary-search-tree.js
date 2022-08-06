// Before starting, copy and paste your guided practice work from
// `binary-search-tree.js` into this file

// Do not change this
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {

  constructor() {
    this.root = null;
  }

  insert(val, currentNode=this.root) {
    if (!this.root){
      this.root = new TreeNode(val);
      return;
    } 

    if (val < currentNode.val){
      if (!currentNode.left) currentNode.left = new TreeNode(val); // base case
      else this.insert(val, currentNode.left) // recursive step

    } else {
      if (!currentNode.right) currentNode.right = new TreeNode(val) // base case
      else this.insert(val, currentNode.right); // recursive step

    }
  }

  search(val) {
    let currentNode = this.root; // start at the top

    while (currentNode){ // while our currentNode has a truthy val
      if (val < currentNode.val){ // compare to see if its less than the currentNode.val
        currentNode = currentNode.left; // if it is, reassign currentNode to be the .left (lower values)
      } else if (val > currentNode.val){
        currentNode = currentNode.right; // or reassign to be the .right if more than (greater values)
      } else {
        return true; // else if its not less than or more than, must be equal to - return true;
      }
    }
    return false; // return false if while loop terminates.
  }


  preOrderTraversal(currentNode = this.root) {
    if (!currentNode) return;

    console.log(currentNode.val);
    this.preOrderTraversal(currentNode.left);
    this.preOrderTraversal(currentNode.right);
  }


  inOrderTraversal(currentNode = this.root) {
    if (!currentNode) return;
    
    this.inOrderTraversal(currentNode.left);
    console.log(currentNode.val);
    this.inOrderTraversal(currentNode.right);
  }


  postOrderTraversal(currentNode = this.root) {
    if (!currentNode) return;
    
    this.postOrderTraversal(currentNode.left);
    this.postOrderTraversal(currentNode.right);
    console.log(currentNode.val);
  }

  // Breadth First Traversal - Iterative
  breadthFirstTraversal() { // average of Linear time with an array
    const queue = [this.root];

    while (!!queue.length){
      let first = queue.shift(); // O(n)

      console.log(first.val)
      if (first.left) queue.push(first.left); // average O(1) worst O(n)
      if (first.right) queue.push(first.right); // average O(1) worst O(n)
    }
  }

  // Depth First Traversal - Iterative
  depthFirstTraversal() {
    const stack = [this.root];

    while (!!stack.length){ // average of Constant time with an array
      let first = stack.pop(); // O(1)

      console.log(first.val)
      if (first.left) stack.push(first.left); // average O(1) worst O(n)
      if (first.right) stack.push(first.right); // average O(1) worst O(n)
    }
  }
}

module.exports = { BinarySearchTree, TreeNode };