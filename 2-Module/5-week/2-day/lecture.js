class TreeNode {
    constructor(val){
        this.val = val;
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
two.right = three;
six.left = five;
six.right = seven;

let root = four;

function preOrderTraversal(currentNode = root){
    if (!currentNode) return

    console.log(currentNode.val)
    if(currentNode.left) preOrderTraversal(currentNode.left) 
    if(currentNode.right) preOrderTraversal(currentNode.right)
}

function inOrderTraversal(currentNode = root){
    if(!currentNode) return

    if(currentNode.left) inOrderTraversal(currentNode.left)
    console.log(currentNode.val)
    if(currentNode.right) inOrderTraversal(currentNode.right)
}

function postOrderTraversal(currentNode = root){
    if(!currentNode) return

    if(currentNode.left) postOrderTraversal(currentNode.left)
    if(currentNode.right) postOrderTraversal(currentNode.right)
    console.log(currentNode.val)
} 

function depthFirst(target, root){
    const stack = [root];

    while(stack.length){
        const current = stack.pop()

        console.log('current node', current.val)

        if(current.val === target) return true;

        if(current.right) stack.push(current.right)
        if(current.left) stack.push(current.left)
    }
    return false
}

function breadthFirst(target, root){
    const queue = [root];

    while(queue.length){
        const current = queue.shift()
        console.log('current node', current)

        if(current.val === target) return true;
        if(current.left) queue.push(current.left)
        if(current.right) queue.push(current.right) 
    }
    return false
}

console.log(depthFirst(3, four))
console.log(breadthFirst(3, four))




