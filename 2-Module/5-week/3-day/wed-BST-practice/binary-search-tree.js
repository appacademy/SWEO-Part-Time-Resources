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
    if(currentNode) console.log(currentNode.val)
    if(currentNode.left) this.preOrderTraversal(currentNode.left)
    if(currentNode.right) this.preOrderTraversal(currentNode.right)
  }

  inOrderTraversal(currentNode = this.root) {
    // Your code here
    if(currentNode.left) this.inOrderTraversal(currentNode.left)
    if(currentNode) console.log(currentNode.val)
    if(currentNode.right) this.inOrderTraversal(currentNode.right)
  }

  postOrderTraversal(currentNode = this.root) {
    // Your code here
    if(currentNode.left) this.postOrderTraversal(currentNode.left)
    if(currentNode.right) this.postOrderTraversal(currentNode.right)
    if(currentNode) console.log(currentNode.val)
  }

  // Breadth First Traversal - Iterative
  breadthFirstTraversal() {
    // your code here
    if(!this.root) return
    const queue = [this.root]
    while(queue.length){
      let curr = queue.shift()
      console.log(curr.val)
      if(curr.left) queue.push(curr.left)
      if(curr.right) queue.push(curr.right)
    }
  }

  // Depth First Traversal - Iterative
  depthFirstTraversal() {
    // your code here
    if(!this.root) return
    const stack = [this.root]
    while(stack.length){
      const curr = stack.pop()
      console.log(curr.val)
      if(curr.left) stack.push(curr.left)
      if(curr.right) stack.push(curr.right)
    }
  }
}

module.exports = { BinarySearchTree, TreeNode };
