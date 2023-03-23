//Tries! or maybe Trees! 

class TreeNode {
    constructor(val){
        this.value = val;
        this.left = null;
        this.right = null;
    }
}

const one = new TreeNode(1);
const two = new TreeNode(2);
const three = new TreeNode(3);
const four = new TreeNode(4);
const five = new TreeNode(5);
const six = new TreeNode(6);
const seven = new TreeNode(7);

four.left = two;
four.right = six;
two.left = one;
six.right = seven;
two.right = three;
six.left = five;


// Traversals!
// preOrderTraversal
function preOrderTraversal(root){
    if (!root) return
    console.log(root.value)
    preOrderTraversal(root.left)
    preOrderTraversal(root.right)
}

// preOrderTraversal(four);

function inOrderTraversal(root){
    debugger
    if (!root) return
    inOrderTraversal(root.left)
    debugger
    console.log(root.value)
    inOrderTraversal(root.right)
    debugger
}

// inOrderTraversal(four)

function postOrderTraversal(root){
    debugger
    if (!root) return
    postOrderTraversal(root.left)
    debugger
    postOrderTraversal(root.right)
    console.log(root.value)
    debugger
}

postOrderTraversal(four)

function depthFirstSearch(target, root){
    const stack = [root];
    while (stack.length){
        const current = stack.pop();
        console.log("current node: ", current.value)
        if (current.value === target) return true;
        if (current.right) stack.push(current.right)
        if (current.left) stack.push(current.left)
    }
    return false;
}

// console.log(depthFirstSearch(5, four))

// function depthFirstSearch(target, root){
//     if (!root) return false;
//     if (target === root.val) return true;
//     if (depthFirstSearch(target, root.left)){
//         return true;
//     }
//     else if (depthFirstSearch(target, root.right)){
//         return true
//     }
//     return false;
// }

function breadthFirstSearch(target, root){
    const queue = [root];
    while (queue.length){
        const current = queue.shift();
        console.log("current node: ", current.value)
        if (current.value === target) return true;
        if (current.left) queue.push(current.left)
        if (current.right) queue.push(current.right)
    }
    return false;
}

// console.log(breadthFirstSearch(7, four))