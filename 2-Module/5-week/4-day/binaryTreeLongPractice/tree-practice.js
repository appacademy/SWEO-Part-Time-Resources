const { BinarySearchTree, TreeNode } = require('./binary-search-tree.js');
// Before starting, copy and paste your guided practice work into the copy
// of `binary-search-tree.js` in this folder

// Practice problems on binary trees

function findMinBST (current) {
  if (!current.left) return current.val; // if this is the bottom most node on the left, return its value.

  return findMinBST(current.left); // travel all the way to the bottom left
}

function findMaxBST (current) {
  if (!current.right) return current.val; // if this is the bottom most node on the right, return its value

  return findMaxBST(current.right) // travel all the way to the bottom right
}

function findMinBT (current) { // breadth first search
  const queue = [current];
  let min = current.val; // set min

  while (queue.length > 0){ // check every val and compare with min
    let current = queue.shift(); // grab first item in queue
    if (current.val < min) min = current.val; // if its val is less than min, update min
    // add all children to the queue
    if (current.left) queue.push(current.left);
    if (current.right) queue.push(current.right);
  }
  return min;
}

function findMaxBT (current) { // depth first search
  let stack = [current]; 
  let max = current.val // set max

  while (stack.length > 0){ // check every val and compare with max
    let current = stack.pop(); // get the last item added
    if (current.val > max) max = current.val; // update max if this val is greater
    // add all of the children to the stack
    if (current.left) stack.push(current.left); 
    if (current.right) stack.push(current.right); 
  }
  return max;
}

findHeight = (current, count = 0) => { // depth first traversal
  if (!current) return count;

  let stack = [current];

  while (stack.length){
    let current = stack.pop()

    if (current.left) {
      stack.push(current.left);
    }
    if (current.right) {
      stack.push(current.right);
    }
    if (current.right || current.left) count++ // if there is an edge (a pointer to another node on either the left or right) increment our count
  }  
  return count + 1; // add 1 to account for the rootNode edge not being counted (rootNode.left or rootNode.right)
}

function getHeight (rootNode) {
  // find the height of each subTree of the rootNode
  let left = findHeight(rootNode.left);
  let right = findHeight(rootNode.right);
  
  // return whichever is greater, that is the height of the tree.
  return Math.max(left, right);
}


function countNodes (current) { // breadth first traversal
  let count = 0;
  let queue = [current];

  while (queue.length){
    current = queue.shift();

    if (current.left) queue.push(current.left);
    if (current.right) queue.push(current.right);
    count++;
  }
  return count;
}

function balancedTree (current) {
  let leftHeight = findHeight(current.left);
  let rightHeight = findHeight(current.right);
  
  return leftHeight === rightHeight;
}

function getParentNode (current, target) {
  if (current.val === target) return null;
  let stack = [current];

  while (stack.length){
    current = stack.pop();

    if (current.left) {
      if (current.left.val === target) return current;
      else stack.push(current.left)
    }
    if (current.right) {
      if (current.right.val === target) return current;
      else stack.push(current.right)
    }
  }
  return undefined;
}

function inOrderPredecessor (current, target) {
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

function findMinNode (current) {
  if (!current.left) return current; // if this is the bottom most node on the left, return it.

  return findMinNode(current.left); // travel all the way to the bottom left
}



const determineCase = (node) => {
  // Case 1: Zero children:
  // set the parent that points to it to null
  if (!node.left && !node.right) return null;

  // Case 2: Two children:
  // set the value to its in-order predecessor, then delete the predecessor
  else if (node.left && node.right){
    let newNode = findMinNode(node)
    // console.log(newNode)
    newNode.right = node.right;
    return newNode;
  }

  // Case 3: One child:
  // Make the parent point to the child
  else if (!node.left) return node.right;
  else return node.left;
}

function deleteNodeBST(current, target) { // breadth first traversal;
  // Case 0: Zero children and no parent:
  //   return null
  if (!current || (!current.left && !current.right)) return null;

  if (current.val === target){
    current = determineCase(current)
    return;
  }

  let queue = [current];

  while (queue.length){
    current = queue.shift();

    if (current.left){
      if (current.left.val === target){
        current.left = determineCase(current.left);
        return;
      } else queue.push(current.left);
    }
    if (current.right){
      if (current.right.val === target){
        current.right = determineCase(current.right);
        return;
      } else queue.push(current.right);
    }
  }
  // Undefined if the target cannot be found
  return;
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