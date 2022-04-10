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
  if(rootNode.left === null) return rootNode.val
  return findMinBST(rootNode.left)
}

function findMaxBST (rootNode) {
  if(rootNode.right === null) return rootNode.val
  return findMaxBST(rootNode.right)
}

function findMinBT (rootNode, currentMin = Infinity) {
  if(rootNode === null) return currentMin
  if(rootNode.val < currentMin) currentMin = rootNode.val

  let left = findMinBT(rootNode.left, currentMin)
  let right = findMinBT(rootNode.right, currentMin)

  //condition ? return this if true : return this if false
  return left < right ? left : right
}

function findMaxBT (rootNode, currentMax = -Infinity) {
    if(rootNode === null) return currentMax
    if(rootNode.val > currentMax) currentMax = rootNode.val

    let left = findMaxBT(rootNode.left, currentMax)
    let right = findMaxBT(rootNode.right, currentMax)

    return left > right ? left : right
}
      //      4
      //    /   \
      //   2     6
      //  / \   / \
      // 1   3 5   7

function getHeight (rootNode) {
  if(rootNode === null) return -1

  let left = getHeight(rootNode.left) + 1 
  let right = getHeight(rootNode.right) + 1
  return left > right ? left : right
}

function countNodes (rootNode) {
  let queue = [rootNode]
  let count = 0

  while(queue.length){
    let current = queue.pop()
    count++
    if(current.left){
      queue.push(current.left)
    }
    if(current.right){
      queue.push(current.right)
    }
  }
  return count
}
// definition of a balanced tree being thet the left sub tree and the right subtree only differ in
// height by one
      //      4
      //    /   \
      //   2     6
      //  / \   / \
      // 1   3 5   7 
function balancedTree (rootNode) {

  let left = getHeight(rootNode.left)
  let right = getHeight(rootNode.right)

  return Math.abs(left - right) <=1 
}

function getParentNode (rootNode, target) {
  if(!rootNode) return 
  if(rootNode.left){
    if(rootNode.left.val === target) return rootNode
  }
  if(rootNode.right){
    if(rootNode.right && rootNode.right.val === target) return rootNode
  }
  if(rootNode.val === target) return null

  let left = getParentNode(rootNode.left, target)
  let right = getParentNode(rootNode.right, target)

  return left ? left : right
}

function inOrderPredecessor (rootNode, target, arr = []) {
    if(arr[0] === target)return null
    if(!rootNode) return null
    if(arr[arr.length -1] === target) return arr[arr.length -2]
    let left = inOrderPredecessor(rootNode.left, target, arr)
    arr.push(rootNode.val)
    let right = inOrderPredecessor(rootNode.right, target, arr)
  return left ? left : right
}

function getNode(root, target){
  if(!root) return 
  if(root.val === target) return root

  let left = getNode(root.left, target)
  let right = getNode(root.right, target)

  return left ? left : right
}

function deleteNodeBST(rootNode, target) {
  // Do a traversal to find the node. Keep track of the parent
  let parent =  getParentNode(rootNode, target)
  // Set target based on parent
  let nodeToDelete = getNode(rootNode, target)
  // Undefined if the target cannot be found
  if(!nodeToDelete) return undefined
  // Case 0: Zero children and no parent:
  //   return null
  if(!parent && nodeToDelete.left == null && nodeToDelete.right === null){
    return null
  }

  // Case 1: Zero children:
  if(!nodeToDelete.left && !nodeToDelete.right){
    //   set the parent that points to it to null
    if(parent.left === nodeToDelete) parent.left = null
    if(parent.right === nodeToDelete) parent.right = null
    return 
  }

  // Case 2: Two children:
  if(nodeToDelete.left && nodeToDelete.right){
    //   set the value to its in-order predecessor, then delete the predecessor
    let newVal = inOrderPredecessor(rootNode, nodeToDelete.val)
    deleteNodeBST(rootNode, newVal)
    nodeToDelete.val = newVal
    return 
  }

  // Case 3: One child:
  //   Make the parent point to the child of the node to delete
  if(nodeToDelete.left!==null && nodeToDelete.right === null){
    if(parent.left === nodeToDelete){
      parent.left = nodeToDelete.left
    }else{
      parent.right = nodeToDelete.left
    }
    return
  }
  if(nodeToDelete.right!== null && nodeToDelete.left===null){
    if(parent.right === nodeToDelete){
      parent.right = nodeToDelete.right
    }else{
      parent.left = nodeToDelete.right
    }
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