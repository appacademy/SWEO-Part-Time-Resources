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


  // big o space o(1) and time o(log n) iterative

  // big o space o(n) and time o(log n) recursion
  insert(val, currentNode=this.root) {
    const newNode = new TreeNode(val);

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

	// const newTreeNode = new TreeNode(val); // space o(1)

    // if (!this.root) {
    //   this.root = newTreeNode;
    //   return;
    // } else {
    //   while (newTreeNode !== currentNode) {
    //     if (val < currentNode.val) {
    //       if (!currentNode.left) {
    //         currentNode.left = newTreeNode;
    //         return;
    //       }
    //       currentNode = currentNode.left;
    //     } else if (val > currentNode.val) {
    //       if (!currentNode.right) {
    //         currentNode.right = newTreeNode;
    //         return;
    //       }
    //       currentNode = currentNode.right;
    //     }
    //   }
    // }

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

const BST = new BinarySearchTree()
BST.insert(4)
BST.insert(5)
BST.insert(6)
BST.insert(72)

module.exports = { BinarySearchTree, TreeNode };
