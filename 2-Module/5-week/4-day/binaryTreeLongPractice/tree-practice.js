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
function inOrderPredecessor (current, target) {}
function deleteNodeBST(current, target) {}

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