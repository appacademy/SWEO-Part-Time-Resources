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
    // when we first add an item, if this.root is null, we will make the first insertion our root node
    if(this.root === null){
      this.root = new TreeNode(val);
      return; //once we insert the desired val, then just exit the insert function.
    }
    //1) determine if our val is less than currentNode.val
    else if(val < currentNode.val){
      //1.1) we need to check if currentNode.left is empty (currentNode.left === null)
      if(currentNode.left === null){
        //we need to create the node based on the value, then add it in (currentNode.left = new TreeNode(val))
        currentNode.left = new TreeNode(val);
      }
      //1.2) if a node exists on currentNode.left (currentNode.left !== null)
      else if(currentNode.left !== null){
        const nextNodeToTravel = currentNode.left;
        this.insert(val, nextNodeToTravel )

        //^same as above: this.insert(val, currentNode.left)
      }
    }

    //2) determine if our val is greater than currentNode.val (since our val is greater than the currentNode.val, we add it to the right)
    else if(val > currentNode.val){
      //1.1) we need to check if currentNode.right is empty (currentNode.right === null)
      if(currentNode.right === null){
        //we need to create the node based on the value, then add it in (currentNode.right = new TreeNode(val))
        currentNode.right = new TreeNode(val);
      }
      //1.2) if a node exists on currentNode.right (currentNode.right !== null)
      else if(currentNode.right !== null){
        const nextNodeToTravel = currentNode.right;
        this.insert(val, nextNodeToTravel )
        //^same as above: this.insert(val, currentNode.right)
      }
    }

  }

  search(val) {
    // Your code here
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