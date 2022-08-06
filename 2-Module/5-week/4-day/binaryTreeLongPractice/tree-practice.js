const { BinarySearchTree, TreeNode } = require('./binary-search-tree.js');
// Before starting, copy and paste your guided practice work into the copy
// of `binary-search-tree.js` in this folder

// Practice problems on binary trees

function findMinBST (current) {
  if (!current.left) return current.val;

  return findMinBST(current.left);
}

function findMaxBST (current) {
  if (!current.right) return current.val;

  return findMaxBST(current.right);
}

function findMinBT (current) { // breadth first search
  const queue = [current];
  let min = current.val;

  while (queue.length > 0){
    current = queue.shift();

    if (current.val < min) min = current.val;

    if (current.left) queue.push(current.left);
    if (current.right) queue.push(current.right);
  }
  return min;
}

function findMaxBT (current) { // depth first search
  const stack = [current];
  let max = current.val;

  while (stack.length > 0){
    current = stack.pop();

    if (current.val > max) max = current.val;

    if (current.left) stack.push(current.left);
    if (current.right) stack.push(current.right);
  }
  return max;
}

function findHeight (current, count = 0){
  if (!current) return count;

  const stack = [current];

  while (stack.length > 0){
    let current = stack.pop();

    if (current.left) stack.push(current.left);
    if (current.right) stack.push(current.right);

    if (current.left || current.right) count++;
  }
  return count + 1;
}

function getHeight (rootNode) {
  const left = findHeight(rootNode.left);
  const right = findHeight(rootNode.right);

  return Math.max(left, right);
}

function countNodes (current, count = 0) { // depth first traversal
    const stack = [current];

    while (stack.length > 0){
      current = stack.pop();

      if (current.left) stack.push(current.left);
      if (current.right) stack.push(current.right);
      count++;
    }
    return count;
}

function balancedTree (current) {
  const left = findHeight(current.left);
  const right = findHeight(current.right);

  return left === right;
}

function getParentNode (current, target) { // breadth first traversal
  if (current.val === target) return null;
  
  const queue = [current];

  while (queue.length > 0){
    current = queue.shift();

    if (current.left){
      if (current.left.val === target) return current;
      else queue.push(current.left);
    } 

    if (current.right){
      if (current.right.val === target) return current;
      else queue.push(current.right);
    }
  }
  return;
}

function inOrderPredecessor (rootNode, target) {
  //!!START
  let current = rootNode;
  let stack = [];
  let predecessor = null;

  while (true) {

    if (current) {
      stack.push(current);
      current = current.left;

    } else if (!current && stack.length > 0) {
      current = stack.pop();
      if (current.val === target) {
        if (!predecessor) return null;
        return predecessor.val;
      }
      predecessor = current;
      current = current.right;

    } else {
      break;
    }
  }
  //!!END
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

  //!!START SILENT
  // Do a traversal to find the node. Keep track of the parent
  let parentNode = getParentNode(rootNode, target);

  // Undefined if the target cannot be found
  if (parentNode === undefined) return undefined;

  // Set target based on parent
  let targetNode;
  let isLeftChild = false;
  if (!parentNode) {
    targetNode = rootNode;
  } else if (parentNode.left && parentNode.left.val === target) {
    targetNode = parentNode.left;
    isLeftChild = true;
  } else if (parentNode.right && parentNode.right.val === target) {
    targetNode = parentNode.right;
  } else {
    throw Error("Algorithm Error: This should never happen");
  }

  // Case 0: Zero children and no parent:
  //   return null
  if (!parentNode && !targetNode.left && !targetNode.right) return null;

  // Case 1: Zero children:
  //   set the parent that points to it to null
  else if (!targetNode.left && !targetNode.right) {
    if (isLeftChild) parentNode.left = null;
    else parentNode.right = null;
  }

  // Case 2: Two children:
  //   set the value to its in-order predecessor, then delete the predecessor
  else if (targetNode.left && targetNode.right) {
    let predecessor = inOrderPredecessor(rootNode, target);
    deleteNodeBST(rootNode, predecessor);
    targetNode.val = predecessor;
  }

  // Case 3: One child:
  //   Make the parent point to the child
  else {
    if (targetNode.left) {
      if (isLeftChild) parentNode.left = targetNode.left;
      else parentNode.right = targetNode.left;
    } else {
      if (isLeftChild) parentNode.left = targetNode.right;
      else parentNode.right = targetNode.right;
    }
  }
  //!!END
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
    deleteNodeBST
}