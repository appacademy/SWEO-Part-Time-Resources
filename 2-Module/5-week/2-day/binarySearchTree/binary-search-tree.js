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
      if (!currentNode.left){
        currentNode.left = new TreeNode(val);
      } else {
        this.insert(val, currentNode.left);
      }
    } else {
      if (!currentNode.right){
        currentNode.right = new TreeNode(val);
      } else {
        this.insert(val, currentNode.right);
      }
    }
  }

  search(val) {
    let currentNode = this.root; // grab the root

    while (currentNode){ // create a loop based on the currentNode
      if (val < currentNode.val){ // check if val is less than
        currentNode = currentNode.left; // if so move down the tree to the left
      } else if (val > currentNode.val){ // check if val is more than
        currentNode = currentNode.right; // if so move down the tree to the right
      } else { // else it must be equal to
        return true; 
      }
    }
    return false; // if our loop breaks, we didn't find it, return false.
  }


  preOrderTraversal(currentNode = this.root) {
    // Your code here
  }


  inOrderTraversal(currentNode = this.root) {
    // Your code here
  }


  postOrderTraversal(currentNode = this.root) {
    // Your code here
  }

    // Breadth First Traversal - Iterative
  breadthFirstTraversal() {
    // your code here
  }

  // Depth First Traversal - Iterative
  depthFirstTraversal() {
    // your code here
}
}

// const bst = new BinarySearchTree();
// bst.insert(4);
// bst.insert(2);
// bst.insert(6);
// bst.insert(1);
// bst.insert(3);
// bst.insert(5);
// bst.insert(7);

// console.log(bst.search(1))//.to.be.true;
// console.log(bst.search(2))//.to.be.true;
// console.log(bst.search(3))//.to.be.true;
// console.log(bst.search(4))//.to.be.true;
// console.log(bst.search(5))//.to.be.true;
// console.log(bst.search(6))//.to.be.true;
// console.log(bst.search(7))//.to.be.true;

module.exports = { BinarySearchTree, TreeNode };