const Stack = require('./utils/stack');
const bst = require('./utils/bst');

// Code a Depth First Traversal using a Stack

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
  const stack = new Stack();
  stack.push(root);

  while (stack.length > 0){
    const current = stack.pop();
    console.log(current.val);

    if (current.right) stack.push(current.right);
    if (current.left) stack.push(current.left);
  }
}

depthFirstTraversal(bst.root);