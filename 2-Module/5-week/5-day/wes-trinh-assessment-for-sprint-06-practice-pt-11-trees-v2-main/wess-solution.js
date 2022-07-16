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

// function findMaxEachLevel(root) {
//   debugger;
//   const stack = [];
//   //if our interviewer tells us that root could be null or a node. We shouldn't directly add it to our stack, but instead add an edge case to handle the root if root is null.
//   if(root) stack.push(root);

//   const maxes = [];

//   root.level = 0;

//   while (stack.length > 0) {
//       const curr = stack.pop();

//       //if the index value maxes[curr.level] (i.e. maxes[0]) exists, then we enter this statement, otherwise go else.
//       if (maxes[curr.level]) {
//           maxes[curr.level] = Math.max(curr.value, maxes[curr.level]);
//       } else {
//           maxes.push(curr.value);
//       }
//       //as long as left exist, go left to check the node, compare the level, and then see if the node's value is the greatest in its level
//       if (curr.left ) {
//           curr.left.level = curr.level + 1;
//           stack.push(curr.left);
//       }

//       //as long as right exist, go right to check the node, compare the level, and then see if the node's value is the greatest in its level
//       if (curr.right ) {
//           curr.right.level = curr.level + 1;
//           stack.push(curr.right);
//       }
//   }

//   return maxes;
// }


function findMaxEachLevel(root) {
    debugger;
    //first off we need a queue and add root to it
    //our queue has the root, which also current represents the level at 0.
    let queue = [];
    if (root) queue.push(root);


    //create an array result that will contain all the result of the max at each level
    const result = [];

    //while the queue is not empty
    while (queue.length > 0) {

        let currentBiggestVal = -Infinity;

        let nextLevelNodes = [];

        for (let i = 0; i < queue.length; i++) {
            //1)) compare to find the biggest value in our queue. By iterating through the queue, and comparing each one until we get the biggest one at that current level.
            let currentNode = queue[i];
            if (currentNode.value > currentBiggestVal) currentBiggestVal = currentNode.value;


            //2) maybe we can reassign the queue each time to represent the nodes of the next level.
            //create a new array that will take in every node's left and right at this current level (iterate over the q to get all the nodes and add its left and its right --> which represents the next level)

            //if left of current node exist, add it to the next level
            if (currentNode.left) nextLevelNodes.push(currentNode.left);
            //if right of current node exist, add it to the next level
            if (currentNode.right) nextLevelNodes.push(currentNode.right);

        }

        //once we find the biggest node val at the level, add it to result arr
        result.push(currentBiggestVal);

        //once we have the next level built, reassign our queue to  = the nextLevelNodes
        queue = nextLevelNodes;

        //repeat the while loop until we run out of levels to process (queue is empty)
    }

    return result;

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