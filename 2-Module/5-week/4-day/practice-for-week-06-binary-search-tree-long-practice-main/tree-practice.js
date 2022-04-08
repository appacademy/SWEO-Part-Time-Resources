const { BinarySearchTree, TreeNode } = require('./binary-search-tree.js');
// Before starting, copy and paste your guided practice work into the copy
// of `binary-search-tree.js` in this folder

// Practice problems on binary trees

        //      4
        //    /   \
        //   2     6
        //  / \   / \
        // 1   3 5   7
function findMinBST (rootNode) {
  // base case being when there is no .left, we know we reached the bottom
  if(!rootNode.left) return rootNode.val
  // fully recurse left,  because the tree is a BST the leftmost val will be the min
  return findMinBST(rootNode.left)
}

function findMaxBST (rootNode) {
  // base case being when there is no .right, we know we reached the bottom
  if(!rootNode.right) return rootNode.val
  // fully recurse right,  because the tree is a BST the rightmost val will be the max
  return findMaxBST(rootNode.right)
}

function findMinBT (rootNode, currentMin = Infinity) {
   // base case, if the root node is null
   if(!rootNode) return currentMin
   if(rootNode.val < currentMin) currentMin = rootNode.val
   let left = findMinBT(rootNode.left, currentMin)
   let right = findMinBT(rootNode.right, currentMin)
  //  return Math.min(left, right)
  //       condition   ? if true : else
   return left < right ? left : right
}

function findMaxBT (rootNode, currentMax = -Infinity) {
  if(!rootNode) return currentMax
  if(rootNode.val > currentMax) currentMax = rootNode.val
  let left = findMaxBT(rootNode.left, currentMax)
  let right = findMaxBT(rootNode.right, currentMax)
  return left > right ? left : right
}

function getHeight (rootNode) {
  // base case,  if I encounter a null value return -1
  if(!rootNode) return -1
  // recurse left and add one every time
  let left = getHeight(rootNode.left) + 1
  // recurse right and add on every time
  let right = getHeight(rootNode.right) + 1
  // return the height that is taller
  return left > right ? left : right
}

        //      4
        //    /   \
        //   2     6
        //  / \   / \
        // 1   3 5   7
function countNodes (rootNode) {
  // // base case,  if I encounter a null value return -1
  // if(!rootNode) return 0
  // // recurse left and add one every time
  // let left = countNodes(rootNode.left) 
  // // recurse right and add on every time
  // let right = countNodes(rootNode.right) 
  
  // return left + right + 1
  
  // iterative 
  let queue = [rootNode];
  let count = 0;

  while(queue.length){
    let item = queue.shift();

    if(item){
      count++

      queue.push(item.left,item.right);
    }
  }
  return count;
}

function balancedTree (rootNode) {
  // base case,  if I encounter a null value return -1
  if(!rootNode) return -1
  // recurse left and add one every time
  let left = getHeight(rootNode.left) + 1
  // recurse right and add on every time
  let right = getHeight(rootNode.right) + 1
  // return the height that is taller
  return Math.abs(left - right) <= 1
}

function getParentNode (rootNode, target) {
  if(!rootNode) return undefined
  if(rootNode.left && rootNode.left.val === target) return rootNode
  if(rootNode.right && rootNode.right.val === target) return rootNode
  if(rootNode.val === target) return null
  let left = getParentNode(rootNode.left, target)
  let right = getParentNode(rootNode.right, target)

  return left ? left : right
}

function inOrderPredecessor (rootNode, target, arr= []) {

  // if(!rootNode) return 
  // inOrderPredecessor(rootNode.left, target, arr)
  // arr.push(rootNode.val)
  // inOrderPredecessor(rootNode.right, target, arr)
  // console.log(arr.at(-1) === target)
  // if(arr.at(-1) === target) return arr.at(-2)

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

function getNode(rootNode, target){
  if(!rootNode) return
  let left = getNode(rootNode.left, target)
  if(rootNode.val === target) return rootNode
  let right = getNode(rootNode.right, target)

  return left ? left : right
}
        //      4
        //    /   \
        //   2     6
        //  / \   / \
        // 1   3 5   7
function deleteNodeBST(rootNode, target) {
  // getting the parent in the case of deleting a node with one child
  let parent = getParentNode(rootNode, target)
  let direction = parent ? parent.left.val === target ? 'left' : 'right' : ''
  let targetNode = getNode(rootNode, target)
  // console.log(targetNode, target)
  if(!targetNode) return undefined

  // deleting a node with no children
  if(!targetNode.left && !targetNode.right){
    parent[direction] = null
    return
  }

  // deleting a node with one child
  console.log("Parent", parent)
  console.log("TargetNode", targetNode)
  if(targetNode.left ===null && targetNode.right ){
    console.log(parent)
    parent[direction] = targetNode.right
    return
  }
  if(targetNode.left && !targetNode.right){
    console.log(parent)
    parent[direction] = targetNode.left
    return
  }

  if(targetNode.left && targetNode.right){
    //find and store the in order pred
    let newVal = inOrderPredecessor(rootNode, targetNode.val)
    // delete that pred
    deleteNodeBST(rootNode, newVal)
    // reassign the targets nodes val to the pred
    targetNode.val = newVal
    return 
  }

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