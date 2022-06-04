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
  }
  //! Geoffrey's while loop solution
  // insert(val) {
  //   const newNode = new TreeNode(val);
  //   let currentNode = this.root;

  //   if (!this.root) {
  //     this.root = newNode;
  //   } else {
  //     while (newNode !== currentNode) {
  //       if (val < currentNode.val) {
  //         if (!currentNode.left) {
  //           currentNode.left = newNode;
  //           return;
  //         }
  //         currentNode = currentNode.left;
  //       } else if (val > currentNode.val) {
  //         if (!currentNode.right) {
  //           currentNode.right = newNode;
  //           return;
  //         }
  //         currentNode = currentNode.right;
  //       }
  //     }
  //   }
  // }

  // search(val, currentNode = this.root) {
  search(val) {
    let currentNode = this.root;

    while (currentNode) {
      if (currentNode.val === val) return true;
      if (currentNode.val > val) currentNode = currentNode.left;
      else currentNode = currentNode.right;
    }

    return false;
  }

  preOrderTraversal(currentNode = this.root) {
    // Current, Left, Right
    if (currentNode) console.log(currentNode.val);
    if (currentNode.left) this.preOrderTraversal(currentNode.left);
    if (currentNode.right) this.preOrderTraversal(currentNode.right);
  }

  inOrderTraversal(currentNode = this.root) {
    // Left, Current, Right
    if (currentNode.left) this.inOrderTraversal(currentNode.left);
    if (currentNode) console.log(currentNode.val);
    if (currentNode.right) this.inOrderTraversal(currentNode.right);
  }

  postOrderTraversal(currentNode = this.root) {
    // Left, Right, Current
    if (currentNode.left) this.postOrderTraversal(currentNode.left);
    if (currentNode.right) this.postOrderTraversal(currentNode.right);
    if (currentNode) console.log(currentNode.val);
  }

  // Breadth First Traversal - Iterative
  breadthFirstTraversal() {
    if (!this.root) return null;

    let currentNode;
    const queue = [this.root];

    while (queue.length) {
      currentNode = queue.shift();
      console.log(currentNode.val);

      if (currentNode.left) queue.push(currentNode.left);
      if (currentNode.right) queue.push(currentNode.right);
    }
  }

  // Depth First Traversal - Iterative
  depthFirstTraversal() {
    if (!this.root) return null;

    let currentNode;
    const stack = [this.root];

    while (stack.length) {
      currentNode = stack.pop();
      console.log(currentNode.val);

      if (currentNode.left) stack.push(currentNode.left);
      if (currentNode.right) stack.push(currentNode.right);
    }
  }
}

module.exports = { BinarySearchTree, TreeNode };
