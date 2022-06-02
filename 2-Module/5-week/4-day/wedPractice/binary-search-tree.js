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
    if (currentNode) console.log(currentNode.val);
    if (currentNode.left) this.preOrderTraversal(currentNode.left);
    if (currentNode.right) this.preOrderTraversal(currentNode.right);
  }

  inOrderTraversal(currentNode = this.root) {
    // Left, Center, Right
    if (currentNode.left) this.inOrderTraversal(currentNode.left);
    if (currentNode) console.log(currentNode.val);
    if (currentNode.right) this.inOrderTraversal(currentNode.right);
  }

  postOrderTraversal(currentNode = this.root) {
    // Left, Right, Center
    // if (currentNode.left) this.postOrderTraversal(currentNode.left);
    // if (currentNode.right) this.postOrderTraversal(currentNode.right);
    // if (currentNode) console.log(currentNode.val);

    if (!currentNode) return;

    this.postOrderTraversal(currentNode.left);
    this.postOrderTraversal(currentNode.right);
    console.log(currentNode.val);

    return;
  }

  // Breadth First Traversal - Iterative
  breadthFirstTraversal() {
    //! breadthFirstTraversal(queue = [this.root]) {
    if (!this.root) return null;
    let currentNode;
    let queue = [this.root];
    while (queue.length) {
      currentNode = queue.shift();
      console.log(currentNode.val);
      if (currentNode.left) queue.push(currentNode.left);
      if (currentNode.right) queue.push(currentNode.right);
    }

    //! recursive
    // if (!this.root) return null;
    // let currentNode = queue.shift();
    // console.log(currentNode.val);
    // if (currentNode.left) queue.push(currentNode.left);
    // if (currentNode.right) queue.push(currentNode.right);
    // if (queue.length) this.breadthFirstTraversal(queue);
  }

  // Depth First Traversal - Iterative
  depthFirstTraversal() {
    //! depthFirstTraversal(stack = [this.root]) {
    if (!this.root) return null;
    let currentNode = this.root;
    let stack = [currentNode];
    while (stack.length) {
      currentNode = stack.pop();
      console.log(currentNode.val);
      if (currentNode.left) stack.push(currentNode.left);
      if (currentNode.right) stack.push(currentNode.right);
    }

    //! recursive
    // if (!this.root) return null;
    // let currentNode = stack.pop();
    // console.log(currentNode.val);
    // if (currentNode.left) stack.push(currentNode.left);
    // if (currentNode.right) stack.push(currentNode.right);
    // if (stack.length) this.depthFirstTraversal(stack);
  }
}

module.exports = { BinarySearchTree, TreeNode };
