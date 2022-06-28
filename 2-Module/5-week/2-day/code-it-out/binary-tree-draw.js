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
