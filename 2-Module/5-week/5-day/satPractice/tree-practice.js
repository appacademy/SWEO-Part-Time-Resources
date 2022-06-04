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
}

function findMaxBT(rootNode) {
  let max = rootNode.val;

  if (rootNode.left) max = Math.max(max, findMaxBT(rootNode.left));
  if (rootNode.right) max = Math.max(max, findMaxBT(rootNode.right));

  return max;
}

function getHeight(rootNode) {
  let queue = [rootNode];
  let height = 0;
  let next = [];

  while (queue.length) {
    const currentNode = queue.shift();

    if (currentNode.left) {
      next.push(currentNode.left);
    }
    if (currentNode.right) {
      next.push(currentNode.right);
    }

    if (!queue.length && next.length) {
      queue = [...next];
      next = [];
      height++;
    }
  }

  return height;
}

function countNodes(rootNode) {
  let counter = 0;

  if (rootNode) counter++;
  if (rootNode.left) counter += countNodes(rootNode.left);
  if (rootNode.right) counter += countNodes(rootNode.right);

  return counter;
}

function balancedTree(rootNode) {
  //! New Z
  if (!rootNode.left && !rootNode.right) return true;

  if (rootNode.left && rootNode.right) {
    const left = getHeight(rootNode.left);
    const right = getHeight(rootNode.right);
    if (Math.abs(left - right) <= 1) return true;
  }

  return false;

  //! Additional edge case logic
  // if (!rootNode.left && rootNode.right) {
  //   if (getHeight(rootNode.right) <= 1) return true;
  //   else return false;
  // }
  // if (!rootNode.right && rootNode.left) {
  //   if (getHeight(rootNode.left) <= 1) return true;
  //   else return false;
  // }
  //! Old Z
  // let left = getHeight(rootNode.left);
  // let right = getHeight(rootNode.right);
  // if (left === right || left + 1 === right || left - 1 === right) return true;
  // else return false;

  //! Gross a/A
  // return Math.log2(countNodes(rootNode)) >= getHeight(rootNode);
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
