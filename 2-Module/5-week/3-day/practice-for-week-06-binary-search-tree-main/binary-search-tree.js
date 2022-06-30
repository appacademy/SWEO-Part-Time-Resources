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
    //edge case: handle initial start where root is null
    if(this.root === null){
      // we want to add the val as our root node
      this.root = new TreeNode(val);
      return;
    }
    //if the val is less than the currentNode.val then...
    if(val < currentNode.val){
      //if the currentNode.left is null, then we add in the node
      if(currentNode.left === null){
        currentNode.left = new TreeNode(val);
      }
      //else if the currentNode.left is NOT null, then we continue to traverse by calling insert again passing to it (val, currentNode.left)
      else if(currentNode.left !== null){
        this.insert(val, currentNode.left);
      }
    }
    //if the val is greater than the currenNode.val then...
    else{
      if(val > currentNode.val){
        if(currentNode.right === null){
          //reassign currentNode.right from null to the new node to add in
          currentNode.right = new TreeNode(val);
        }
        //else it's occupied w/ a node already, so call insert again on the next right node. In order to find the correct spot that is null.
        else if(currentNode.right !== null){
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

  }


  inOrderTraversal(currentNode = this.root) {

  }


  postOrderTraversal(currentNode = this.root) {

  }

  // Breadth First Traversal - Iterative
  breadthFirstTraversal() {

  }

  // Depth First Traversal - Iterative
  depthFirstTraversal() {


  }
}

module.exports = { BinarySearchTree, TreeNode };