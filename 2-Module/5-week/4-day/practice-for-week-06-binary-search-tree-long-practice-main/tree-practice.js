const { BinarySearchTree, TreeNode } = require('./binary-search-tree.js');
// Before starting, copy and paste your guided practice work into the copy
// of `binary-search-tree.js` in this folder

// Practice problems on binary trees

function findMinBST (rootNode) {
  // Your code here
}

function findMaxBST (rootNode) {
  // Your code here
}

function findMinBT (rootNode) {
	let min = rootNode.val

	if(rootNode.left) min = Math.min(min, findMinBT(rootNode.left))
	if(rootNode.right) min = Math.min(min, findMinBT(rootNode.right))

	return min
}

function findMaxBT (rootNode) {
  // Your code here
}

function getHeight (rootNode) {
	if (rootNode === null) return -1;
	if(!rootNode.left && !rootNode.right) return 0
	return 1 + Math.max(getHeight(rootNode.left), getHeight(rootNode.right));
	// if (rootNode === null) return -1;
	// if(!rootNode.left && !rootNode.right) return 0
	// const nodeInfo = {
	// 	'currentLevel': [rootNode],
	// 	'height' : 0
	// }

	// const currentHeight = [nodeInfo.currentLevel]

	// while(currentHeight.length){
	// 	const queue = currentHeight.pop() // [1]
	// 	const newArr = []
	// 	while(queue.length){
	// 		const currentNode = queue.shift() //
	// 		if(currentNode.left) {
	// 			newArr.push(currentNode.left)
	// 		}
	// 		if(currentNode.right) {
	// 			newArr.push(currentNode.right)
	// 		}
	// 	}
	// 	nodeInfo.currentLevel = newArr

	// 	nodeInfo.height += 1

	// 	if(nodeInfo.currentLevel.length){
	// 		currentHeight = [nodeInfo.currentLevel]
	// 	}

	// 	// console.log(nodeInfo.height)
	// }
	// return nodeInfo.height
	// if (!rootNode) {
	// 	return 0;
	//   }

	//   let height = 0;
	//   let queue = [rootNode];

	//   while (queue.length > 0) {
	// 	let size = queue.length; // current heights number of nodes
	// 	while (size.length > 0) {
	// 	  let node = queue.shift();
	// 	  if (node.left) {
	// 		queue.push(node.left);
	// 	  }
	// 	  if (node.right) {
	// 		queue.push(node.right);
	// 	  }
	// 	  size--;
	// 	}
	// 	height++;
	//   }
	//   return height;
}

//     1 queue = 1 - 1 + 1 + 1 = 2, size = 1 - 1 = 0, height + 1
//   2  3 queue = 2 - 1 + 1 + 1 - 1 + 1 + 1, size = 2 - 1 - 1 = 0
// 3 4 5 6 queue = 4, size = 4

function balancedTree (rootNode) {
	let queue = [rootNode];
	while (queue.length) {
	  let curr = queue.shift();

	  if (Math.abs(getHeight(curr.left) - getHeight(curr.right)) <= 1) {
		if (curr.left) queue.push(curr.left)
		if (curr.right) queue.push(curr.right)
	  } else return false
	}
	return true
}

function countNodes (rootNode) {
  // Your code here
}

function getParentNode (rootNode, target) {
  // Your code here
}

function inOrderPredecessor (rootNode, target) {
  // Your code here
}

function deleteNodeBST(rootNode, target) {
  // Do a traversal to find the node. Keep track of the parent

  // Undefined if the target cannot be found

  // Set target based on parent

  // Case 0: Zero children and no parent:
  //   return null

  // Case 1: Zero children:
  //   Set the parent that points to it to null

  // Case 2: Two children:
  //  Set the value to its in-order predecessor, then delete the predecessor
  //  Replace target node with the left most child on its right side,
  //  or the right most child on its left side.
  //  Then delete the child that it was replaced with.

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
    deleteNodeBST
}
