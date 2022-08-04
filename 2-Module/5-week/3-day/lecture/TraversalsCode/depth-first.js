const Stack = require('./utils/stack');
const bst = require('./utils/bst');

// Code a Depth First Traversal using a Stack
// please don't copy from aaOpen. Try to do this yourself and think through it.

// our bst looks like this 

//      4
//    /   \
//   2     6
//  / \   / \
// 1   3 5   7

// Depth Frist Traversal requires us to work our way down
// the length of the tree, so if we console.log first and then
// add the children from right to left we should expect our output
// to be 4, 2, 1, 3, 6, 5, 7 -- this is pre-order traversal!

const depthFirstTraversal = (root) => {
  const s = new Stack();
  s.push(root);
  
  while (s.length > 0){
    const current = s.pop();
    console.log(current.val);

    if (current.right) s.push(current.right)
    if (current.left) s.push(current.left)
  }
}

depthFirstTraversal(bst.root);