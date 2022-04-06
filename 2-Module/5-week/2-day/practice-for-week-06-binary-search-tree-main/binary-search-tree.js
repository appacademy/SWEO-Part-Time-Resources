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
    this.root = null
  }

  insert(val, currentNode=this.root) {
    let newNode = new TreeNode(val)
    // base Case
    if(currentNode === null){
      this.root = newNode
      return 
    }
    if(val < currentNode.val){
      if(currentNode.left === null){
        currentNode.left = newNode
      }else{
        this.insert(val, currentNode.left)
      }
    }
    if(val > currentNode.val){
      if(currentNode.right === null){
        currentNode.right = newNode
      }else{
        this.insert(val, currentNode.right)
      }
    }
  }

  // search(val) {
  //   let currentNode = this.root

  //   while(currentNode){
  //     if(val < currentNode.val){
  //       currentNode = currentNode.left
  //     }
  //     else if(val > currentNode.val){
  //       currentNode = currentNode.right
  //     }
  //     else{
  //       return true
  //     }
  //   }
  //   return false
  // }
  search(val, current = this.root) {
    if(current === null) return false 
    if(current.val === val) return true
    if(val < current.val) {
      return this.search(val, current.left)
    }
    else if(val > current.val){
      return this.search(val, current.right)
    }
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
    // Your code here
  }

  // Depth First Traversal - Iterative
  depthFirstTraversal() {
    // Your code here
  }
}

module.exports = { BinarySearchTree, TreeNode };