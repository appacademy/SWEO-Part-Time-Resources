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
    let newNode = new TreeNode(val);

	// edge case
	if(this.root === null) {
		this.root = newNode;
		return;
	}

	if (newNode.val < currentNode.val){
		if (currentNode.left !== null){
			this.insert(val, currentNode.left)
		} else { currentNode.left = newNode;
			return;
		}
	} else {
		if (currentNode.right !== null){
			this.insert(val, currentNode.right)
		} else { currentNode.right = newNode;
			return;
		}
	}
  }

  search(val) {
    //
  }

  //
  remove(){

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
