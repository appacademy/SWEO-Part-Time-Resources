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

  insert(val, currentNode=this.root) {
    // Your code here
    const newNode = new TreeNode(val)

    if(!currentNode) this.root = newNode
    else if(currentNode.val > val){
      if(!currentNode.left) {
        currentNode.left = newNode
      } else {
      this.insert(val, currentNode.left)
      }
    } else if(currentNode.val < val){
      if(!currentNode.right){
         currentNode.right = newNode
      }else {
        this.insert(val, currentNode.right)
      }
    }
  }

  // insert(val, currentNode = this.root) {
  //   // Your code here
  //   const newNode = new TreeNode(val);

  //   if (!currentNode) {
  //     this.root = newNode;
  //   }
  //   while (currentNode) {
  //     if (currentNode.val > val) {
  //       if (!currentNode.left) {
  //         currentNode.left = newNode;
  //         return
  //       } else {
  //         currentNode = currentNode.left;
  //       }
  //     } else if (currentNode.val < val) {
  //       if (!currentNode.right) {
  //         currentNode.right = newNode;
  //         return
  //       } else {
  //         currentNode = currentNode.right;
  //       }
  //     }
  //   }
  // }

  // search(val) {
  //   let curr = this.root

  //   while(curr){
  //     if(curr.val === val) return true
  //     if(curr.val > val) curr = curr.left
  //     else curr = curr.right
  //   }
  //   return false
  // }

  search(val, curr = this.root){
    if(!curr) return false
    if(val === curr.val) return true
    if(val < curr.val) return this.search(val, curr.left)
    if(val > curr.val) return this.search(val, curr.right)
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
