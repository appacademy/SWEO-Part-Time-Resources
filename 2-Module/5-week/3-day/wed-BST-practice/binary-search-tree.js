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

  insert(val, currentNode = this.root) {
    const newNode = new TreeNode(val);
    if (!currentNode) {
      this.root = newNode;
      return;
    } else {
      while (currentNode) {
        if (val < currentNode.val) {
          if (!currentNode.left) {
            currentNode.left = newNode;
            return;
          } else {
            currentNode = currentNode.left;
          }
        } else if (val > currentNode.val) {
          if (!currentNode.right) {
            currentNode.right = newNode;
            return;
          } else {
            currentNode = currentNode.right;
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
  search(val) {
    let currentNode = this.root;
    while (currentNode) {
      if (val < currentNode.val) {
        currentNode = currentNode.left;
      } else if (val > currentNode.val) {
        currentNode = currentNode.right;
      } else return true;
    }
    return false;
  }

  preOrderTraversal(currentNode = this.root) {
    // Your code here
    if (currentNode) {
      console.log(currentNode.val);
    }
    if (currentNode.left) this.preOrderTraversal(currentNode.left);
    if (currentNode.right) this.preOrderTraversal(currentNode.right);
  }

  inOrderTraversal(currentNode = this.root) {
    // Your code here
    if (currentNode.left) this.inOrderTraversal(currentNode.left);
    if (currentNode) {
      console.log(currentNode.val);
    }
    if (currentNode.right) this.inOrderTraversal(currentNode.right);
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
      let curr = stack.pop()
      console.log(curr.val)

      if(curr.left) stack.push(curr.left)
      if(curr.right) stack.push(curr.right)
    }
  }
}

let bst = new BinarySearchTree();
bst.insert(4);
bst.insert(2);
bst.insert(6);
bst.insert(1);
bst.insert(3);
bst.insert(5);
bst.insert(7);
bst.postOrderTraversal();

module.exports = { BinarySearchTree, TreeNode };
