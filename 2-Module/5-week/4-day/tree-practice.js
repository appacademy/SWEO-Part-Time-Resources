const { BinarySearchTree, TreeNode } = require('./binary-search-tree.js');
// Before starting, copy and paste your guided practice work into the copy
// of `binary-search-tree.js` in this folder

function findMinBST(node) {
  if (!node) return null

  let curr = node
  while (curr.left) {
    curr = curr.left
  }
  return curr.val
}

function findMaxBST(node) {
  if (!node) return null

  let curr = node
  while (curr.right) {
    curr = curr.right
  }
  return curr.val
}

function findMinBT(node) {
  if (!node) return;

  let min = node.val;
  if (node.left) {
    const leftMin = findMinBT(node.left)
    if (leftMin && leftMin < min) {
      min = leftMin
    }
  }
  if (node.right) {
    const rightMin = findMinBT(node.right)
    if (rightMin && rightMin < min) {
      min = rightMin
    }
  }

  return min
}

function findMaxBT(node) {
  if (!node) return;

  let max = node.val;
  let stack = [node];
  while (stack.length) {
    let curr = stack.pop()
    if (curr.val > max) max = curr.val
    if (curr.left) stack.push(curr.left)
    if (curr.right) stack.push(curr.right)
  }
  return max
}

function getHeight(node) {
  if (!node) return -1
  if (!node.left && !node.right) return 0

  let height = 0
  let length;
  let queue = [node];
  while (queue.length) {
    length = queue.length
    for (let i = 0; i < length; i++) {
      let curr = queue.shift()
      if (curr.left) queue.push(curr.left)
      if (curr.right) queue.push(curr.right)
    }
    height++
  }
  return height - 1
}

function countNodes(node) {
  if (!node) return null;
  let stack = [node];
  let count = 0
  while (stack.length) {
    let curr = stack.pop()
    count++
    if (curr.left) stack.push(curr.left)
    if (curr.right) stack.push(curr.right)
  }
  return count
}

function balancedTree(node) {
  if (!node) return null;

  let queue = [node];
  while (queue.length) {
    let curr = queue.shift();
    lh = getHeight(curr.left)
    rh = getHeight(curr.right)
    if (Math.abs(lh - rh) <= 1) {
      if (curr.left) queue.push(curr.left)
      if (curr.right) queue.push(curr.right)
    } else {
      return false;
    }
  }
  return true
}

function getParentNode(node, target) {
  if (!node) return null;
  if (node.val === target) return null

  let stack = [node];
  while (stack.length) {
    let curr = stack.pop();
    if (curr.left) {
      if (curr.left.val === target) return curr
      stack.push(curr.left)
    }
    if (curr.right) {
      if (curr.right.val === target) return curr
      stack.push(curr.right)
    }
  }
  return undefined
}

function inOrderPredecessor(node, target) {
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
}

function deleteNodeBST(node, target) {
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
}



// bstRootBig = new TreeNode(8);
// bstRootBig.left = new TreeNode(3);
// bstRootBig.left.left = new TreeNode(2);
// bstRootBig.left.left.left = new TreeNode(1);
// bstRootBig.left.right = new TreeNode(5);
// bstRootBig.left.right.left = new TreeNode(4);
// bstRootBig.left.right.right = new TreeNode(7);
// bstRootBig.left.right.right.left = new TreeNode(6);
// bstRootBig.right = new TreeNode(10);
// bstRootBig.right.right = new TreeNode(11);
// bstRootBig.right.right.right = new TreeNode(12);
// bstRootBig.right.right.right.right = new TreeNode(15);
// bstRootBig.right.right.right.right.left = new TreeNode(14)

// findMinBst(bstRootBig)

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
