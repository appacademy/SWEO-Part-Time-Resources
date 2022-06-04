class TreeNode {
  constructor(value, left, right) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

// Given a tree, find the node with the highest value at each
// level of the tree and return it in an array, with the root at the
// 0th index, and the highest value in the deepest level of the tree
// in the last index.

//        5
//       / \
//      4   7
//     / \   \
//    1   3   2
//       /    / \
//      8    4   9
//              / \
//             2   4

// Expected Output -> [ 5, 7, 3, 9, 4 ]

function findMaxEachLevel(root) {
  if (!root) return null;

  root.lvl = 0;
  let levels = {};
  let res = [];

  let queue = [root];

  while (queue.length) {
    let current = queue.shift();
    let lvl = current.lvl;
    console.log(lvl);

    if (!levels[lvl]) {
      levels[lvl] = [current.value];
      console.log(levels);
    } else {
      levels[lvl].push(current.value);
      console.log(levels);
    }

    if (current.left) {
      current.left.lvl = current.lvl + 1;
      queue.push(current.left);
    }
    if (current.right) {
      current.right.lvl = current.lvl + 1;
      queue.push(current.right);
    }
  }
  console.log(levels);

  for (let key in levels) {
    let value = levels[key];
    console.log(value);
    res.push(Math.max(...value));
  }
  return res;
}
// Uncomment the code below for local testing.

// // Build a tree for testing

//   const simpleTree = new TreeNode(4, null, null);
//   simpleTree.right = new TreeNode(1, null, null);
//   simpleTree.left = new TreeNode(3, null, null);
//   simpleTree.right.right = new TreeNode(2, null, null);

// // Test the function with the debug tree
// console.log(findMaxEachLevel(simpleTree)); // -> [ 4, 3, 2 ]

/*******************************************************************************
 * Do not change the code after this line.
 */

try {
  exports.TreeNode = TreeNode;
  exports.findMaxEachLevel = findMaxEachLevel;
} catch (e) {
  module.exports = null;
}
