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
    if (!this.root){ // check if the list is empty
      this.root = new TreeNode(val); // if it is set the root to be our new node
      return; // return so the function will end here for this case.
    } 

    if (val < currentNode.val){ // check if val is less than current val
      if (!currentNode.left) currentNode.left = new TreeNode(val); // base case
      // if there is no node on the left of the current node, set our new node to be the .left.
      else this.insert(val, currentNode.left) // recursive step
      // else call this function again and reassign currentNode to be the currentNode.left
    } else {
      if (!currentNode.right) currentNode.right = new TreeNode(val) // base case
      // if there is no node on the right, set our new node to be the .right
      else this.insert(val, currentNode.right); // recursive step
      // else call this function again and reassign currentNode to be the currentNode.right
    }
    // The act of reassigning our currentNode variable to be the .left if our val is lower than and the .right if our val is greater than
    // is what is moving us through the tree and checking each value in the correct place. If it's lower then we only look at the left subtree
    // of whatever our current value is to find where to place it.
  }

  search(val) {
    let currentNode = this.root; // start at the top

    while (currentNode){ // while our currentNode has a truthy val
      if (val < currentNode.val){ // compare to see if its less than the currentNode.val
        currentNode = currentNode.left; // if it is, reassign currentNode to be the .left (lower values)
      } else if (val > currentNode.val){
        currentNode = currentNode.right; // or reassign to be the .right if more than (greater values)
      } else {
        return true; // else if its not less than or more than, must be equal to - return true;
      }
    }
    return false; // return false if while loop terminates.
  }


  preOrderTraversal(currentNode = this.root) {
    if (!currentNode) return;

    console.log(currentNode.val);
    this.preOrderTraversal(currentNode.left);
    this.preOrderTraversal(currentNode.right);
  }


  inOrderTraversal(currentNode = this.root) {
    if (!currentNode) return;

    this.inOrderTraversal(currentNode.left);
    console.log(currentNode.val);
    this.inOrderTraversal(currentNode.right);
  }


  postOrderTraversal(currentNode = this.root) {
    if (!currentNode) return;

    this.postOrderTraversal(currentNode.left);
    this.postOrderTraversal(currentNode.right);
    console.log(currentNode.val);
  }

    // Breadth First Traversal - Iterative
  breadthFirstTraversal() { // O(n)
    let queue = [this.root];

    while (queue.length > 0){ // O(n)
      const current = queue.shift() // O(n)

      console.log(current.val); // O(n)
      if (current.left) queue.push(current.left); // average O(1) worst O(n)
      if (current.right) queue.push(current.right); // average O(1) worst O(n)
    }
  }

  // Depth First Traversal - Iterative
  depthFirstTraversal() { // O(n)
    let stack = [this.root];

    while (stack.length > 0){ // O(n)
      const current = stack.pop() // O(1)

      console.log(current.val); // O(n)
      if (current.left) stack.push(current.left); // average O(1) worst O(n)
      if (current.right) stack.push(current.right); // average O(1) worst O(n)
    }
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



module.exports = { BinarySearchTree, TreeNode };