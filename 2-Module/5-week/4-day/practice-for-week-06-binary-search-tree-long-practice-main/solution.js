const { BinarySearchTree, TreeNode } = require('./binary-search-tree.js');
// Before starting, copy and paste your guided practice work into the copy
// of `binary-search-tree.js` in this folder

// Practice problems on binary trees

bstRoot = new TreeNode(4);
bstRoot.left = new TreeNode(2);
bstRoot.left.left = new TreeNode(1);
bstRoot.left.right = new TreeNode(3);
bstRoot.right = new TreeNode(6);
bstRoot.right.left = new TreeNode(5);
bstRoot.right.right = new TreeNode(7);

function findMinBST(rootNode) {
  debugger;
  //min is the the most left node the the deepest level.

  //check to make sure rootNode is not null (not needed to pass test, but good to have)
  if (rootNode === null) {
    return null;
  }

  //create a pointer first to traverse and set at the starting point rootNode
  let currentNode = rootNode;

  //while currentNode.left does not equal to null, traverse down the left and reassign the currentNode to be currenNode.left as the most left will be the smallest
  while (currentNode.left !== null) {
    currentNode = currentNode.left;
  }

  //once while loop finishes, currentNode will point to the smallest node
  return currentNode.val;
}


function findMaxBST(rootNode) {
  // //******************we can do a similar process w/ while loop like findMinBST****************
  // let currentNode = rootNode;
  // while(currentNode.right !== null){
  //   currentNode = currentNode.right;
  // }
  // return currentNode.val;

  //******************or use recursion!!****************
  //if rootNode.right exists, continue to traverse recursively and return the answer of the most right node
  if (rootNode === null) {
    return null;
  }

  if (rootNode.right) {
    const maxFoundVal = findMaxBST(rootNode.right);
    return maxFoundVal;
  }

  //otherwise return the rootNode since rootNode.right does not exist.
  return rootNode.val;
}




function findMinBT(rootNode) {
  //there's many ways to solve this, select a traversal method and try it out.

  const queue = [];
  if (rootNode !== null) queue.push(rootNode);

  let min = Infinity;

  //while the queue length, add all the nodes and process it
  while (queue.length) {
    //pop the node and then compare it to see if it's smaller
    const currentNode = queue.shift();
    if (currentNode.val < min) min = currentNode.val;

    //add the currentNode's left and right to the queue and repeat
    if (currentNode.left) queue.push(currentNode.left);
    if (currentNode.right) queue.push(currentNode.right);
  }

  //finally return answer after traversing all node and comparing it to find min
  return min;

}

function findMaxBT(rootNode) {

  //once again, can repeat the queue traversal like above, but let's try something new. Let's do DFS Recursive traversal (solving smaller subtrees to help us solve the root tree!)

  //Draw out a small tree and walk through the example below if we're not sure what is happening.
  //tldr: we are going all the way down one end first, finding the max value of the small subtree/subNode and then comparing it with the one above it. (recursion to solve smaller sub problem)

  let currentMaxVal = rootNode.val; //initially set max val as the value from rootNode.

  if (rootNode.left) {
    //set the max between the currentMaxVal and the left hand's max
    const maxFromLeft = findMaxBT(rootNode.left);
    currentMaxVal = Math.max(currentMaxVal, maxFromLeft);
  }
  if (rootNode.right) {
    //set the max between the currentMaxVal and the right hand's max
    const maxFromRight = findMaxBT(rootNode.right);
    currentMaxVal = Math.max(currentMaxVal, maxFromRight);
  }

  //at the very end, after comparisions, return the max value.
  return currentMaxVal;
}

function getHeight(rootNode) {

  //what is the height of a tree with only one node or zero node (root === null)? it's 0. 
  if(rootNode === null) return 0;
  if(rootNode.left === null && rootNode.right === null) return 0;

  //recurse to get height of left subtree
  const leftHeight = getHeight(rootNode.left);

  //recurse to get height of right subtree
  const rightHeight = getHeight(rootNode.right);

  //whichever one is bigger (between left and right), we'll take that and add one to it to get the final height, return it.
  let max = Math.max(leftHeight, rightHeight);
  const finalHeight = max + 1;
  return finalHeight;

  
}

function countNodes (rootNode) {
    //!!START
    if (!rootNode) return 0;
  
    return 1 + countNodes(rootNode.left) + countNodes(rootNode.right);
    //!!END
  }
  
  function balancedTree (rootNode) {
    //!!START
    return Math.log2(countNodes(rootNode)) >= getHeight(rootNode);
    //!!END
  }
  
  function getParentNode (rootNode, target) {
    //!!START
    if (rootNode.val === target) return null;
  
    let stack = [rootNode];
  
    while (stack.length > 0) {
      let current = stack.pop();
  
      if ((current.left && current.left.val === target) ||
          (current.right && current.right.val === target)) {
        return current;
      }
  
      if (current.left) stack.push(current.left);
      if (current.right) stack.push(current.right);
    }
  
    return undefined;
    //!!END
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
  