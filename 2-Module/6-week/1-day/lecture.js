class TreeNode {
	constructor(val) {
	  this.val = val;
	  this.left = null;
	  this.right = null;
	}
}


//   	  30
//    20       40
//  10  23   37   45
// 8     26
// 5      29
// 1


const root = new TreeNode(30)
const twenty = new TreeNode(20)
const fourty = new TreeNode(40)

root.left = twenty
root.right = fourty

const ten = new TreeNode(10)
const twentythree = new TreeNode(23)

twenty.left = ten
twenty.right = twentythree

const thirtyseven = new TreeNode(37)
const fourtyfive = new TreeNode(45)

fourty.left = thirtyseven
fourty.right = fourtyfive

const eight = new TreeNode(8)
const twentysix = new TreeNode(26)

ten.left = eight
twentythree.right = twentysix

const five = new TreeNode(5)
const twentynine = new TreeNode(29)

eight.left = five
twentysix.right = twentynine

const one = new TreeNode(1)

five.left = one

// calculate the sum of all right nodes
// 163

function sumRight(root){
	if(!root) return 0
	if(!root.right) return 0
	return root.right.val + sumRight(root.left) + sumRight(root.right)
}

// console.log(sumRight(root))

function sumRightIter(root){
	const queue = [root]
	let sum = 0;
	while(queue.length){
		const current = queue.shift()
		if(current.left){
			queue.push(current.left)
		}
		if(current.right){
			sum += current.right.val
			queue.push(current.right)
		}
	}
	return sum
}

console.log(sumRightIter(root))
