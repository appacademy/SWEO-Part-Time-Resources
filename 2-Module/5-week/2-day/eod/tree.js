class TreeNode {
	constructor(value, left, right) {
	  this.value = value;
	  this.left = left;
	  this.right = right;
	}
  }


// Given a tree, find the left-most leaf
// and right-most leaf, return an array
// with the left leaf at the left and right leaf
// at the right.
// create a function that finds the height of the tree

//        	 55
//       	/ \
//       100   67
//     	 / \   \
//    	21   3   2
//    /    / \   \
//   32   6   5  111
//				 / \
//              68   94
//  		   /
//            30

// Expected Output -> [32, 94]
// height = 6
