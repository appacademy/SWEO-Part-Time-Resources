// Do not change this
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {

  constructor() {
	this.root = null;
  }

  insert(val, currentNode=this.root) {
	if(!this.root) {
		this.root = new TreeNode(val);
		return;
	  }

	  if (val < currentNode.val) {
		if (!currentNode.left) {
		  currentNode.left = new TreeNode(val);
		} else {
		  this.insert(val, currentNode.left);
		}
	  } else {

		if (!currentNode.right) {
		  currentNode.right = new TreeNode(val);
		} else {
		  this.insert(val, currentNode.right);
		}
	  }
  }

  search(val) {
	let currentNode = this.root;

    while (currentNode) {
      if (val < currentNode.val) {
        currentNode = currentNode.left;
      } else if (val > currentNode.val){
        currentNode = currentNode.right;
      } else {
        return true;
      }
    }

    return false;
  } // time o(logN)


  preOrderTraversal(currentNode = this.root) {
	console.log(currentNode.val)
	if(currentNode.left) this.preOrderTraversal(currentNode.left)
	if(currentNode.right) this.preOrderTraversal(currentNode.right)
  } // time o(n) --> number of nodes, space 1


  inOrderTraversal(currentNode = this.root) {
	if(currentNode.left) this.inOrderTraversal(currentNode.left)
	console.log(currentNode.val)
	if(currentNode.right) this.inOrderTraversal(currentNode.right)

	// if(currentNode.right) this.inOrderTraversal(currentNode.right)
	// console.log(currentNode.val)
	// if(currentNode.left) this.inOrderTraversal(currentNode.left)
  } // time o(n) --> number of nodes, space 1


  postOrderTraversal(currentNode = this.root) {
	if(currentNode.left) this.postOrderTraversal(currentNode.left)
	if(currentNode.right) this.postOrderTraversal(currentNode.right)
	console.log(currentNode.val)

	// if(currentNode.right) this.postOrderTraversal(currentNode.right)
	// if(currentNode.left) this.postOrderTraversal(currentNode.left)
	// console.log(currentNode.val)
  } // time o(n) --> number of nodes, space 1

    // Breadth First Traversal - Iterative
  breadthFirstTraversal() {
	let root = this.root
	const queue = [root]

	while(queue.length > 0){
		let currentNode = queue.shift(); // o(n)
		console.log(currentNode.val)
		if(currentNode.left) queue.push(currentNode.left)
		if(currentNode.right) queue.push(currentNode.right)
	}
  } // queue --> FIFO
  // time o(n^2), space o(n)

  // Depth First Traversal - Iterative
  depthFirstTraversal() {
	const stack = []
	const currentNode = this.root
	stack.push(currentNode)

	while(stack.length){
		const node = stack.pop();
		console.log(node.val)
		if(node.left) stack.push(node.left)
		if(node.right) stack.push(node.right)
	}
  } // stack -->
  // time o(n), space o(n)
}

// recursion always linear space(n)
// space o(n)

							// height base = 0, depth base = 0
// 				  50         // node 50 height = 7, depth = 0
//              /    \  <-- levels
//           45   	 70  <-- nodes
//          /  \	 / \
//         32  47   65  80  // node 80 height = 0 , depth = 2
//        /
//       12                 // node 12 height = 4 , depth = 3
//      /  \
//      9  14
//     /
//    8
//   /
//  2
// /
//1

//       6
//     5   8
//    3 4 7 10
//   1 2 7 9  11


const bst = new BinarySearchTree()

const root = new TreeNode(50);

bst.root = root

bst.insert(45)
bst.insert(70)
bst.insert(32)
bst.insert(47)
bst.insert(12)
bst.insert(9)
bst.insert(14)
bst.insert(65)
bst.insert(80)
bst.insert(8)
bst.insert(2)
bst.insert(1)

// bst.preOrderTraversal()
// bst.breadthFirstTraversal()
// bst.inOrderTraversal()
// bst.postOrderTraversal()
bst.depthFirstTraversal()

module.exports = { BinarySearchTree, TreeNode };
