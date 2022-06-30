/*************
Properties of a binary SEARCH tree (BST):
- is a binary tree( w/ at most 2 nodes left and right).
    - binary search trees are binary trees, but a normal binary tree may NOT be a BST

- Left less: every node contained in the **left branch** of any node will be less than the value of the node itself

- Right More: every node in the right branch will be greater than the node value

- allows for the same O(log n) search as a sorted array, but with O(log n) insertion and deletion 



//Is this a valid binary tree? //yes
//Is this a valid binary SEARCH tree (BST)? //yes
     10
   /   \
  5     12
 / \   / \
4   6 11   13



//Is this a valid binary tree? //yes
//Is this a valid binary SEARCH tree (BST)? //no
     5
   /   \
  3     8
 / \   / \
1   6 6   9

//6 on the left hand side is not less than the node of 5, so therefore it invalidates this as a BST.

**********/

//node class blue to generate treeNode instances
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
   b   c
  / \   \
 d   e   f


*/




//IS THE TREE A BST?
//no it is not BST because b,d,e are not less than a.



//graphs <-- tree (is a graph) <-- binary tree <-- binary search tree (bst is a tree, but a binary tree is not always a BST.)