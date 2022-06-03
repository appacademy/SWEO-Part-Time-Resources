const { BinarySearchTree, TreeNode } = require('./binary-search-tree.js');
// Before starting, copy and paste your guided practice work into the copy
// of `binary-search-tree.js` in this folder

// Practice problems on binary trees

function findMinBST(rootNode) {
  if (rootNode.left) return findMinBST(rootNode.left);
  return rootNode.val;
}

function findMaxBST(rootNode) {
  if (rootNode.right) return findMaxBST(rootNode.right);
  return rootNode.val;
}

function findMinBT(rootNode) {
  let min = rootNode.val;

  if (rootNode.left) min = Math.min(min, findMinBT(rootNode.left));
  if (rootNode.right) min = Math.min(min, findMinBT(rootNode.right));

  return min;

  //? if (!rootNode) return Infinity

  //? const leftMin = findMinBT(rootNode.left)
  //? const rightMin = findMinBT(rootNode.right)

  //? return Math.min(rootNode.val, leftMin, rightMin)

  //! if (!rootNode.left && !rootNode.right) {
  //!   return rootNode.val;
  //! } else if (!rootNode.left) {
  //!   return Math.min(rootNode.val, findMinBT(rootNode.right));
  //! } else if (!rootNode.right) {
  //!   return Math.min(rootNode.val, findMinBT(rootNode.left));
  //! } else
  //!   return Math.min(
  //!     rootNode.val,
  //!     findMinBT(rootNode.left),
  //!     findMinBT(rootNode.right)
  //!   );
}

// if (rootNode.left) {
//   let leftMin = findMinBT(rootNode.left);
//   min = Math.min(min, leftMin);
// }

function findMaxBT(rootNode) {
  let max = rootNode.val;

  if (rootNode.left) max = Math.max(max, findMaxBT(rootNode.left));
  if (rootNode.right) max = Math.max(max, findMaxBT(rootNode.right));

  return max;
}

function getHeight(rootNode) {
  let queue = [rootNode];
  let height = 0;

  while (queue.length) {
    const next = [];
    const currentNode = queue.shift();

    if (currentNode.left) {
      next.push(currentNode.left);
    }
    if (currentNode.right) {
      next.push(currentNode.right);
    }

    if (!queue.length && next.length) {
      queue = next;
      height++;
    }
  }

  return height;

  //! Aaron's
  // if (rootNode === null) return -1;

  // let leftBranch = getHeight(rootNode.left);
  // let rightBranch = getHeight(rootNode.right);
  // let total = 1 + Math.max(leftBranch, rightBranch);

  // return total;

  //? Alex's
  // if (!rootNode) return -1;

  // let lCount = getHeight(rootNode.left);

  // let rCount = getHeight(rootNode.right);

  // lCount++;
  // rCount++;

  // return Math.max(lCount, rCount);
}

function countNodes(rootNode) {
  // Your code here
}

function balancedTree(rootNode) {
  // Your code here
}

function getParentNode(rootNode, target) {
  // Your code here
}

function inOrderPredecessor(rootNode, target) {
  // Your code here
}

function deleteNodeBST(rootNode, target) {
  // Do a traversal to find the node. Keep track of the parent
  // Undefined if the target cannot be found
  // Set target based on parent
  // Case 0: Zero children and no parent:
  //   return null
  // Case 1: Zero children:
  //   set the parent that points to it to null
  // Case 2: Two children:
  //   set the value to its in-order predecessor, then delete the predecessor
  // Case 3: One child:
  //   Make the parent point to the child
}

module.exports = {
  findMinBST,
  findMaxBST,
  findMinBT,
  findMaxBT,
  getHeight,
  countNodes,
  balancedTree,
  getParentNode,
  inOrderPredecessor,
  deleteNodeBST,
};
