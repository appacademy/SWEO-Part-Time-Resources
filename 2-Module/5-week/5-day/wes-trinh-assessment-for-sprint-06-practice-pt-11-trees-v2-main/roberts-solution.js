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
  
  
  
  
// takes in the root of a binary tree
// returns an array where each element is the maximum
// value found at each level of the tree, starting with the root.
// uses the helper function splitIntoLevels()
function findMaxEachLevel(root) {
    // get an array of arrays of all nodes at each level
    const allLevels = splitIntoLevels(root);
    // map each subarray of nodes to a subarray of the
    // values of those nodes
    const allValues = allLevels.map((nodeArr) =>{
      return nodeArr.map((node) => node.value);
    });
    // map each subarray of values to the maximum value
    // in each subarray.
    const maxEachLevel = allValues.map((valArr) => Math.max(...valArr));
    return maxEachLevel;
  }

  
  // returns an array of arrays, with each sub-array containing all
  // nodes at each level of a binary tree, starting with the root
  function splitIntoLevels(root) {
    const allLevels = [];
    let currentLevel = [];
    let nextLevel = [];
    if (root !== null) currentLevel.push(root);
    // for each level, starting at the root, unload all
    // children of each node into the nextLevel array.
    while(currentLevel.length > 0) {
      for (let i = 0; i < currentLevel.length; i++) {
        let currentNode = currentLevel[i];
        let leftNode = currentNode.left;
        let rightNode = currentNode.right;
        if (leftNode !== null) nextLevel.push(leftNode);
        if (rightNode !== null) nextLevel.push(rightNode);
      }
      // when done, push currentLevel to allLevels
      allLevels.push(currentLevel);
      // and reassign nextLevel to currentLevel.
      currentLevel = nextLevel;
      // finally, empty out nextLevel for next loop.
      nextLevel = [];
    }
    return allLevels;
  }
  
  
  
  
  
  
  // Uncomment the code below for local testing.
  
  // // Build a tree for testing
  
  const simpleTree = new TreeNode(4, null, null);
  simpleTree.right = new TreeNode(1, null, null);
  simpleTree.left = new TreeNode(3, null, null);
  simpleTree.right.right = new TreeNode(2, null, null);
  
  /*
        4
       / \
      3   1
           \
            2
  */
  
  // Test the function with the debug tree
  console.log(findMaxEachLevel(simpleTree)); // -> [ 4, 3, 2 ]
  
  /*******************************************************************************
   * Do not change the code after this line.
   */
  
  try {
    exports.TreeNode = TreeNode;
    exports.findMaxEachLevel = findMaxEachLevel;
  } catch (e) {
    module.exports = null;
  }