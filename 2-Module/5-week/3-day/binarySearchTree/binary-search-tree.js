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
  breadthFirstTraversal() { 
    let queue = [this.root];

    while (queue.length > 0){ // O(n)
      let current = queue.shift(); // O(n)

      console.log(current.val); // O(n)
      if (current.left) queue.push(current.left) // best O(1) worst O(n);
      if (current.right) queue.push(current.right) // best O(1) worst O(n);
    }
  }

  // Depth First Traversal - Iterative
  depthFirstTraversal() {
    let stack = [this.root];

    while (stack.length > 0){ // O(n)
      let current = stack.pop(); // O(1)

      console.log(current.val); // O(n)
      if (current.left) stack.push(current.left) // best O(1) worst O(n);
      if (current.right) stack.push(current.right) // best O(1) worst O(n);
    }
  }
}

const bst = new BinarySearchTree();
bst.insert(4);
bst.insert(2);
bst.insert(6);
bst.insert(1);
bst.insert(3);
bst.insert(5);
bst.insert(7);

console.log(bst.search(1))//.to.be.true;
console.log(bst.search(2))//.to.be.true;
console.log(bst.search(3))//.to.be.true;
console.log(bst.search(4))//.to.be.true;
console.log(bst.search(5))//.to.be.true;
console.log(bst.search(6))//.to.be.true;
console.log(bst.search(7))//.to.be.true;

module.exports = { BinarySearchTree, TreeNode };