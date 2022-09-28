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
    // Your code here
    this.root = null;
  }

  // insert(val, currentNode = this.root) {
  //   // Your code here
  //   const newNode = new TreeNode(val);

  //   if (!currentNode) {
  //     this.root = newNode;
  //   } else if (val < currentNode.val) {
  //     if (!currentNode.left) {
  //       currentNode.left = newNode;
  //     } else {
  //       this.insert(val, currentNode.left);
  //     }
  //   } else if (val > currentNode.val) {
  //     if (!currentNode.right) {
  //       currentNode.right = newNode;
  //     } else {
  //       this.insert(val, currentNode.right);
  //     }
  //   }
  // }

  insert(val, currentNode = this.root){
    const newNode = new TreeNode(val)
    if(!currentNode){
      this.root = newNode
      return
    } else {
      while(currentNode){
        if(val < currentNode.val){
          if(!currentNode.left){
            currentNode.left = newNode
            return
          } else{
            currentNode = currentNode.left
          }
        } else if(val > currentNode.val){
          if(!currentNode.right){
            currentNode.right = newNode
            return
          } else{
            currentNode = currentNode.right
          }
        }
      }
    }
  }

  // search(val, currentNode = this.root) {
  //   // Your code here
  //   if(!currentNode) return false
  //   if(currentNode.val === val) return true
  //   if(val < currentNode.val) return this.search(val, currentNode.left)
  //   if(val > currentNode.val) return this.search(val, currentNode.right)
  // }
  search(val){
    let currentNode = this.root
    while(currentNode){
      if(val < currentNode.val){
        currentNode = currentNode.left
      } else if (val > currentNode.val){
        currentNode = currentNode.right
      } else return true
    }
    return false
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

module.exports = { BinarySearchTree, TreeNode };
