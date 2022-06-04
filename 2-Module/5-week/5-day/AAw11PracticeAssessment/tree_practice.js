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
  let queue = [root];

  root.level = 0;

  let levelValues = [];
  // level_values[current.level] = (level_values[current.level] == undefined) ? [current.value] : level_values[current.level].concat([current.value]);

  while (queue.length) {
    let current = queue.shift();

    if (!levelValues[current.level]) {
      levelValues[current.level] = [current.value];
    } else {
      levelValues[current.level].push(current.value);
    }

    if (current.left) {
      queue.push(current.left);
      current.left.level = current.level + 1;
    }
    if (current.right) {
      queue.push(current.right);
      current.right.level = current.level + 1;
    }

    // console.log(levelValues); //! Uncomment to see how this works!
  }

  // console.log('*'.repeat(100)); //! Uncomment to see how this works!
  return levelValues.map((level) => Math.max(...level));
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
