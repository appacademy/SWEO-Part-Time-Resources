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
    //edge case: handle initial start where root is null
    if (this.root === null) {
      // we want to add the val as our root node
      this.root = new TreeNode(val);
      return;
    }
    //if the val is less than the currentNode.val then...
    if (val < currentNode.val) {
      //if the currentNode.left is null, then we add in the node
      if (currentNode.left === null) {
        currentNode.left = new TreeNode(val);
      }
      //else if the currentNode.left is NOT null, then we continue to traverse by calling insert again passing to it (val, currentNode.left)
      else if (currentNode.left !== null) {
        this.insert(val, currentNode.left);
      }
    }
    //if the val is greater than the currenNode.val then...
    else {
      if (val > currentNode.val) {
        if (currentNode.right === null) {
          //reassign currentNode.right from null to the new node to add in
          currentNode.right = new TreeNode(val);
        }
        //else it's occupied w/ a node already, so call insert again on the next right node. In order to find the correct spot that is null.
        else if (currentNode.right !== null) {
          this.insert(val, currentNode.right);
        }
      }
    }
  }

  search(target) {
    //first create a pointer that will allow us to traverse the BST, and initially set it to the root node (kinda like link list head)
    let currentNode = this.root;

    //while the currentNode is not null, we continue to traverse to find the if the val exists!
    while (currentNode !== null) {
      //1) does the currentNode.val === target? if so, return true
      if (currentNode.val === target) return true;

      //2) if target is less than currentNode.val, then we reassign the currentNode to be the currentNode.left node.
      else if (target < currentNode.val) {
        currentNode = currentNode.left;
      }

      //3) if target is greater than currentNode.val, then we reassign the currentNode to be currentNode.right node.
      else if (target > currentNode.val) {
        currentNode = currentNode.right;
      }
    }

    //if our while loop didn't find that the target exist, then return false
    return false;
  }


  preOrderTraversal(currentNode = this.root) {
    //base case, if the currentNode is null, we want to return because we don't want it to continue the preOrder logic.
    //any currentNode that we pass in that is null, will return and not execute the logic below.
    if (currentNode === null) {
      return;
    }

    //access the data
    console.log(currentNode.val);
    //recurse down to the left by calling itself on currentNode.left
    this.preOrderTraversal(currentNode.left);
    //recurse down to the right by calling itself on currentNode.right
    this.preOrderTraversal(currentNode.right);
  }


  inOrderTraversal(currentNode = this.root) {
    if (currentNode === null) {
      return;
    }
    //recurse down to the left by calling itself on currentNode.left
    this.inOrderTraversal(currentNode.left);

    //log the data
    console.log(currentNode.val)

    //recurse down to the right by calling itself on currentNode.right
    this.inOrderTraversal(currentNode.right);

  }


  postOrderTraversal(currentNode = this.root) {
    //base case, if curretNode is null, we hit the end, do nothing and go back.
    if (currentNode === null) {
      return;
    }

    //recurse down to the left by calling itself on currentNode.left
    if (currentNode.left !== null) {
      this.postOrderTraversal(currentNode.left)
    }


    //recurse down to the right by calling itself on currentNode.right
    if (currentNode.right !== null) {
      this.postOrderTraversal(currentNode.right);
    }


    //log the data
    console.log(currentNode.val)




  }

  // Breadth First Traversal - Iterative
  breadthFirstTraversal() {
    //create a queue and add it our root node to the queue
    const queue = [];
    if (this.root !== null) {
      queue.push(this.root);
    }
    //while the queue is not empty
    while (queue.length > 0) {
      //shift the array (dequeue) in order to get front element 
      const currentNode = queue.shift();
      //access the currentNode (in this case, we want to log it)
      console.log(currentNode.val);

      //we need to add the items into the queue
      //if left node exists, enqueue to the queue
      if (currentNode.left !== null) {
        queue.push(currentNode.left);
      }

      //if right node exists, enqueue to the queue
      if (currentNode.right !== null) {
        queue.push(currentNode.right);
      }
    }

  }

  // Depth First Traversal - Iterative
  depthFirstTraversal() {
    const stack = [this.root];

    while (stack.length) {
      //pop from the stack, and log the data
      const currentNode = stack.pop()
      console.log(currentNode.val);

      //then check if the left of the stack exist, push it to the stack
      if (currentNode.left) {
        stack.push(currentNode.left);
      }

      //then check if the right of the stack exist, push it to the stack
      if (currentNode.right) {
        stack.push(currentNode.right);
      }
    }

  }
}

module.exports = { BinarySearchTree, TreeNode };