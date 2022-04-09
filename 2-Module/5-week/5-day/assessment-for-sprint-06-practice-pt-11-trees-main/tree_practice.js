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


//        5.level 0 
//       / \
//      4   7
//     / \   \
//    1   3   2
//       /    / \
//      8    4   9
//              / \
//             2   4


function findMaxEachLevel(rootNode) {
  // edge cases
    if(!rootNode) return null
    if(!rootNode instanceof TreeNode) return null
    // setting the level of the starting node to be 0
    rootNode.level = 0
    // this will keep track of the values at each level where the format is level : [array of values]
    let levels = {}
    // result array we will push maxs into at the end
    let result = []
    // class breadth first traversal with queue
    let queue = [rootNode]
    // more classic breadth first while queue has length
    while(queue.length) {
      // grabbing my current value
      let current = queue.shift()
      // creating a variable with the current level
      let level = current.level
      // checking to see if the level lives in my object yet
      if(levels[level] === undefined){
        // if it does not I am going to create the entry with the key of the level and the value of an array with the current val inside
        levels[level] = [current.value]
    }else{
      // if it does i am just pushing the current value onto that array
      levels[level].push(current.value)
  }
    // classic breadth first queue adding,  check to see if the node has a left child
    if(current.left){
      // if it does I will assign the level attribute of the child to the parent nodes level plus one 
      current.left.level = current.level +1
      // classic breadth first adding to the queue
      queue.push(current.left)
    // classic breadth first queue adding,  check to see if the node has a right child
    }if(current.right){
      // if it does I will assign the level attribute of the child to the parent nodes level plus one 
      current.right.level = current.level +1
      // classic breadth first adding to the queue
      queue.push(current.right)
    }
  }
  console.log(levels)
  // loop through the object with a for in loop
  for(let key in levels){
    // create a variable that is equal to the value at every key.  ie our array that we created
    let value = levels[key]
    // push the Math.max of the current value array into my result. spreading an array into math. max looks like => Math.max(1,2,3,4,5,6,7)
    result.push(Math.max(...value))
  }
  // return the result array
  return result
}

// Uncomment the code below for local testing.

// // Build a tree for testing

const simpleTree = new TreeNode(4, null, null);
simpleTree.right = new TreeNode(1, null, null);
simpleTree.left = new TreeNode(3, null, null);
simpleTree.right.right = new TreeNode(2, null, null);

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