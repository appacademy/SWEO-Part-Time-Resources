/*************
Properties of a binary SEARCH tree (BST):
- is a binary tree( w/ at most 2 nodes left and right).
    - binary search trees are binary trees, but a normal binary tree may NOT be a BST

- Left less: every node contained in the **left branch** of any node will be less than the value of the node itself

- Right More: every node in the right branch will be greater than the node value

- allows for the same O(log n) search as a sorted array, but with O(log n) insertion and deletion



//Is this a valid binary tree? Yes
//Is this a valid binary SEARCH tree (BST)? Yes
     10
   /   \
  5     12
 / \   / \
4   6 11   13



//Is this a valid binary tree? Yes
//Is this a valid binary SEARCH tree (BST)? No
     5
   /   \
  6     9
 / \   / \
4   7 8   10

**********/

//node class  to generate treeNode instances
class TreeNode {
    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
    }
  }

  //instantiated tree node instances
  let a = new TreeNode('a');
  let b = new TreeNode('b');
  let c = new TreeNode('c');
  let d = new TreeNode('d');
  let e = new TreeNode('e');
  let f = new TreeNode('f');

  //connect these tree node instances
  a.left = b;
  a.right = c;
  b.left = d;
  b.right = e;
  c.right = f;

  //draw on the tree here (or on a piece of paper, paint, etc.):

  /*   a
      / \



  */




  //IS THE TREE A BST?
console.log(b <a)

class BinarySearchTree {

    constructor() {
      // Your code here
      this.root = null;
    }

    insert(val, currentNode=this.root) {

      const newNode = new TreeNode(val);

      if(currentNode === null){
        this.root = newNode;
        return;
      }

      if(currentNode.val > val){
        if(currentNode.left === null){
          currentNode.left = newNode
          return;
        } else {
          this.insert(val, currentNode.left)
        }
      }

      if(currentNode.val < val){
        if(currentNode.right === null){
          currentNode.right = newNode
          return;
        } else {
          this.insert(val, currentNode.right)
        }
      }

    }

    search(val) {
      // Your code here
      let currentNode = this.root;

      while(!currentNode === null){
        if(currentNode.val === val) return true;
        if(currentNode.val > val) currentNode = currentNode.left;
        else currentNode = currentNode.right
      }
      return false
    }
}
