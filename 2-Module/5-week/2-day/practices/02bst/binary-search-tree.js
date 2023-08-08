// Do not change this
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {

  constructor(root = null) {
    // Your code here
    this.root = root;
  }

  insert(val, currentNode = this.root) {
    // Your code here
    if (!this.root) {
      return this.root = new TreeNode(val)
    }
    if (val < currentNode.val) {
      if (currentNode.left === null) {
        return currentNode.left = new TreeNode(val);
      }
      return this.insert(val, currentNode.left);
    } else {
      if (currentNode.right === null) {
        return currentNode.right = new TreeNode(val);
      } else {
        return this.insert(val, currentNode.right);
      }
    }

  }

  // search(val, currentNode=this.root) {
  //   // Your code here
  //   if (!currentNode) return false;
  //   if (currentNode.val === val){
  //     return true;
  //   }
  //   if(this.search(val, currentNode.left)){
  //     return true;
  //   };
  //   if (this.search(val, currentNode.right)){
  //     return true;
  //   }
  //   return false;
  // }
  // search (val){
  //   const stack = [this.root];
  //   while (stack.length){
  //     const current = stack.pop();
  //     if (current.val === val) return true;
  //     if (current.right) stack.push(current.right)
  //     if (current.left) stack.push(current.left)
  //   }
  //   return false;
  // }
  search(val) {
    const queue = [this.root];
    while (queue.length) {
      const current = queue.shift();
      if (current.val === val) return true;
      if (current.val < val && current.right) queue.push(current.right);
      if (current.val > val && current.left) queue.push(current.left);
    }
    return false;
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