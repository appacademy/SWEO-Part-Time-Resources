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
  // Your code here
}

function findMaxBT (rootNode) {
  // Your code here
}

function getHeight (rootNode) {
  // Your code here
}

function balancedTree (rootNode) {
  // Your code here
}

function countNodes (rootNode) {
  // Your code here
}

function getParentNode (rootNode, target) {
	if (!rootNode || rootNode.val === target) {
		return null;
	}

	if ((rootNode.left && rootNode.left.val === target) || (rootNode.right && rootNode.right.val === target)) {
		return rootNode;
	}

	const leftParent = getParentNode(rootNode.left, target);
	const rightParent = getParentNode(rootNode.right, target);

	if (leftParent) {
		return leftParent;
	}
	if (rightParent) {
		return rightParent;
	}

	// return undefined;
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

  // return Undefined if the target cannot be found

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

	const parentNode = getParentNode(rootNode, target)

	if(parentNode === undefined) return undefined

	// target node
	let targetNode = parentNode

	let leftChild = false;
	// let leftChild = curr.left || curr.right || curr.middle ||

	if(parentNode.left && parentNode.left.val === target){
		targetNode = parentNode.left
		leftChild = true
	} else if(parentNode.right && parentNode.right.val === target){
		targetNode = parentNode.right
	}

	// case 0
	if(!parentNode && !targetNode.left && !targetNode.right) return null

	// case 1
	if(!targetNode.left && !targetNode.right) {
		if(leftChild) parentNode.left = null;
		else parentNode.right = null
	}

	// case 2
	// else if(targetNode.left && targetNode.right){ // tn = 20
	// 	let pred = targetNode.left				  // pn = 41
	// 	let predParent = targetNode;			  // pred = 11
	// 	while(pred.right){							// pp = 20
	// 		predParent = pred;
	// 		pred = pred.right						// tn.val = pred.val
	// 	}											// tn = 11
	// 	targetNode.val = pred.val;
	// 	if(predParent.left === pred){				// pp.left = pred.left
	// 		predParent.left = pred.left // null
	// 	} else {
	// 		predParent.right = pred.left
	// 	}
	// }

	// case 2
	else if (targetNode.left && targetNode.right) {
		let predecessor = inOrderPredecessor(rootNode, target);
		deleteNodeBST(rootNode, predecessor);
		targetNode.val = predecessor;
	}

	// case 3
	else {
		if(targetNode.left){  // if our targetNode has a child on the left
			if(leftChild) parentNode.left = targetNode.left
			else parentNode.right = targetNode.left
		} else { // else our targetNode has a child on the right
			if(leftChild) parentNode.left = targetNode.right
			else parentNode.right = targetNode.right
		}
	}


	// let parent = null;
	// let curr = rootNode;

	// // Find the target node and its parent
	// while (curr && curr.val !== target) {
	//   parent = curr;
	//   if (target < curr.val) {
	// 	curr = curr.left;
	//   } else {
	// 	curr = curr.right;
	//   }
	// }

	// // If target node is not found, return undefined
	// if (!curr) {
	//   return undefined;
	// }

	// // Case 0: Zero children and no parent
	// if (!parent && !curr.left && !curr.right) {
	//   return null;
	// }

	// // Case 1: Zero children
	// if (!curr.left && !curr.right) {
	//   if (parent.left === curr) {
	// 	parent.left = null;
	//   } else {
	// 	parent.right = null;
	//   }
	// }

	// // Case 2: Two children
	// else if (curr.left && curr.right) {
	//   let pred = curr.left;
	//   let predParent = curr;
	//   while (pred.right) {
	// 	predParent = pred;
	// 	pred = pred.right;
	//   }
	//   curr.val = pred.val;
	//   if (predParent.left === pred) {
	// 	predParent.left = pred.left;
	//   } else {
	// 	predParent.right = pred.left;
	//   }
	// }

	// // Case 3: One child
	// else {
	//   let child = curr.left || curr.right;
	//   if (!parent) {
	// 	rootNode = child;
	//   } else if (parent.left === curr) {
	// 	parent.left = child;
	//   } else {
	// 	parent.right = child;
	//   }
	// }

	// return rootNode;
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
