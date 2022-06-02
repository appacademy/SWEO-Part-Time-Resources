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

  insert(val, currentNode = this.root) {
    const newNode = new TreeNode(val);
    if (currentNode === null) this.root = newNode;
    else if (currentNode.val > val) {
      if (currentNode.left === null) currentNode.left = newNode;
      else this.insert(val, currentNode.left);
    } else if (currentNode.val < val) {
      if (currentNode.right === null) currentNode.right = newNode;
      else this.insert(val, currentNode.right);
    }

    //! Scot's while loop solution
    // if(!currentNode) {
    //   this.root = newNode;
    //   return;
    // }

    // while (currentNode) {
    //   if (currentNode.val > val) {
    //     if (!currentNode.left) {
    //       currentNode.left = newNode;
    //       return;
    //     }
    //     else {
    //       currentNode = currentNode.left;
    //     }
    //   }

    //   if (currentNode.val < val) {
    //     if (!currentNode.right) {
    //       currentNode.right = newNode;
    //       return;
    //     }
    //     else {
    //       currentNode = currentNode.right;
    //     }
    //   }
    // }
  }

  //! search(val, currentNode = this.root) {
  search(val) {
    let currentNode = this.root;

    while (currentNode) {
      if (currentNode.val === val) return true;
      if (currentNode.val > val) currentNode = currentNode.left;
      else currentNode = currentNode.right;
    }

    return false;

    //! Aaron's recursive solution
    // if (currentNode === null) return false;
    // if (currentNode.val === val) return true;

    // if (currentNode.val < val) {
    //   currentNode = currentNode.right;
    // } else {
    //   currentNode = currentNode.left;
    // }
    // return this.search(val, currentNode);
  }

  preOrderTraversal(currentNode = this.root) {
    // Center, Left, Right
  }

  inOrderTraversal(currentNode = this.root) {
    // Left, Center, Right
  }

  postOrderTraversal(currentNode = this.root) {
    // Left, Right, Center
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
