class TreeNode {
    constructor(val, left, right) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

// provided the following tree, we want to traverse dfs starting from the left and (going all the way down left first), but the code isn't working! Your task is to debug it!

//          7
//       /    \
//      2      5
//     / \    / \
//    1   8  2   3
//          /   / \
//         4   6   9


// Expected Output -> [ 7, 2, 1, 8, 5, 2, 4, 3, 6, 9]

function dfsFromLeft(root) {
    debugger;
    //HINT: Call debugger here!!!

    //add initial root node to stack 
    const stack = [];
    if (root !== null) stack.push(root);

    //results to return
    const results = [];

    //while the stack is not empty
    while (stack.length) {
        //pop the currentNode
        const currentNode = stack.pop();

        //log currentNode's value
        results.push(currentNode.val);
        

        //if currentNode.right exists, push to stack
        if (currentNode.right !== null) {
            stack.push(currentNode.right);
        }

        //if currentNode.left exists, push to stack
        if (currentNode.left !== null) {
            stack.push(currentNode.left)
        }


    }
    return results;
}


//analyze, then draw a tree for this!!
const tree = new TreeNode(10, null, null);
tree.right = new TreeNode(12, null, null);
tree.right.right = new TreeNode(13, null, null);
tree.left = new TreeNode(5, null, null);
tree.left.left = new TreeNode(4, null, null);
tree.left.right = new TreeNode(8, null, null);


/*
DRAW YOUR TREE HERE:
               10
             /    \
            5      12
           / \       \ 
          4   8       13
*/

console.log(dfsFromLeft(tree)); //expected result: [10,5,4,8,12,13]
