// build a bst and an insert method

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
    if (!this.root) {
      this.root = new TreeNode(val);
      return;
    } 

    if (val < currentNode.val){
      if (!currentNode.left) currentNode.left = new TreeNode(val);
      else this.insert(val, currentNode.left);
    } else {
      if (!currentNode.right) currentNode.right = new TreeNode(val);
      else this.insert(val, currentNode.right);
    }
  }
}

const bst = new BinarySearchTree();
bst.insert(4);
bst.insert(2);
bst.insert(6);
bst.insert(1);
bst.insert(3);
bst.insert(5);
bst.insert(7);
// console.log(bst)

module.exports = bst;