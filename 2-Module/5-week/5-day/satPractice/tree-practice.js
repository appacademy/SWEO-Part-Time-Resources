const { BinarySearchTree, TreeNode } = require('./binary-search-tree.js');

// Practice problems on binary trees

const findMinBST = (rootNode) => {
  if (rootNode.left) return findMinBST(rootNode.left);
  return rootNode.val;
};

const findMaxBST = (rootNode) => {
  if (rootNode.right) return findMaxBST(rootNode.right);
  return rootNode.val;
};

const findMinBT = (rootNode) => {
  let min = rootNode.val;

  if (rootNode.left) min = Math.min(min, findMinBT(rootNode.left));
  if (rootNode.right) min = Math.min(min, findMinBT(rootNode.right));

  return min;
};

const findMaxBT = (rootNode) => {
  let max = rootNode.val;

  if (rootNode.left) max = Math.max(max, findMaxBT(rootNode.left));
  if (rootNode.right) max = Math.max(max, findMaxBT(rootNode.right));

  return max;
};

const getHeight = (rootNode) => {
  let queue = [rootNode];
  let height = 0;
  let next = [];
  while (queue.length) {
    const current = queue.shift();

    if (current.left) {
      next.push(current.left);
    }
    if (current.right) {
      next.push(current.right);
    }

    if (!queue.length && next.length) {
      queue = next;
      next = [];
      height++;
    }
  }

  return height;
};

const countNodes = (rootNode) => {
  let count = 0;

  if (rootNode) count++;
  if (rootNode.left) count += countNodes(rootNode.left);
  if (rootNode.right) count += countNodes(rootNode.right);

  return count;
};

const balancedTree = (rootNode) => {
  if (!rootNode.left && !rootNode.right) return true;
  if (rootNode.left && rootNode.right) {
    const left = getHeight(rootNode.left);
    const right = getHeight(rootNode.right);
    if (Math.abs(left - right) <= 1) return true;
  }

  return false;
};

const getParentNode = (rootNode, target) => {
  if (rootNode.val === target) return null;
  if (rootNode.left && rootNode.left.val === target) return rootNode;

  if (rootNode.right && rootNode.right.val === target) return rootNode;

  if (rootNode.left) {
    let left = getParentNode(rootNode.left, target);
    if (left) return left;
  }
  if (rootNode.right) {
    let right = getParentNode(rootNode.right, target);
    if (right) return right;
  }
};

const inOrderPredecessor = (rootNode, target, stack = []) => {
  if (rootNode.left) {
    let left = inOrderPredecessor(rootNode.left, target, stack);
    if (left || left === null) return left;
  }

  stack.push(rootNode);
  if (rootNode.val === target) {
    if (stack[0].val === target) return null;
    else return stack[stack.length - 2].val;
  }

  if (rootNode.right) {
    let right = inOrderPredecessor(rootNode.right, target, stack);
    if (right || right === null) return right;
  }
};

const deleteNodeBST = (rootNode, target) => {
  // Do a traversal to find the node. Keep track of the parent
  // Undefined if the target cannot be found
  const parent = getParentNode(rootNode, target);
  if (parent === undefined) return undefined;

  // Set target based on parent
  let targetNode;
  let onYourLeft = false;
  if (!parent) {
    targetNode = rootNode;
  } else if (parent.left && parent.left.val === target) {
    targetNode = parent.left;
    onYourLeft = true;
  } else {
    targetNode = parent.right;
  }

  // Case 0: Zero children and no parent:
  if (!parent && !targetNode.left && !targetNode.right) return null;

  // Case 1: Zero children:
  if (!targetNode.left && !targetNode.right) {
    if (onYourLeft) parent.left = null;
    else parent.right = null;
    return;
  }
  // Case 2: Two children:
  if (targetNode.left && targetNode.right) {
    let pred = inOrderPredecessor(rootNode, target);
    deleteNodeBST(rootNode, pred);
    targetNode.val = pred;
    return;
  }
  if (targetNode.left) {
    if (onYourLeft) parent.left = targetNode.left;
    else parent.right = targetNode.left;
    return;
  } else {
    if (onYourLeft) parent.left = targetNode.right;
    else parent.right = targetNode.right;
  }
};

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
