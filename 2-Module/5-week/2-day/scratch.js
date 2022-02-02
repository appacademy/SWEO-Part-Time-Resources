// class Node {
//   constructor(val){
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

// const a = new Node('a');
// const b = new Node('b');
// const c = new Node('c');
// const d = new Node('d');
// const e = new Node('e');
// const f = new Node('f');

// a.left = b;
// a.right = c;

// b.left = d;
// b.right = e;

// c.left = f;

// console.log(a);

/*
        4
      /   \
     2     6
    / \   / \
   1   3 5   7

*/

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const node1 = new TreeNode(1);
const node2 = new TreeNode(2);
const node3 = new TreeNode(3);
const node4 = new TreeNode(4);
const node5 = new TreeNode(5);
const node6 = new TreeNode(6);
const node7 = new TreeNode(7);

node4.left = node2;
node4.right = node6;

node2.left = node1;
node2.right = node3;

node6.left = node5;
node6.right = node7;


/*
Print the current node
Recursively call left subtree
Recursively call right subtree
*/

const preOrderTraversal = (root) => {
  if(!root) return;

  console.log(root.val);
  preOrderTraversal(root.left);
  preOrderTraversal(root.right);
}

// preOrderTraversal(node4);


/*
Recursively call left subtree
Print the current node
Recursively call the right subtree
*/

const inOrderTraversal = (root) => {
  if(!root) return;

  inOrderTraversal(root.left);
  console.log(root.val);
  inOrderTraversal(root.right);
}

// inOrderTraversal(node4);

/*
Recursively call the left subtree
Recursively call the right subtree
Print the current node
*/

const postOrderTraversal = (root) => {
  if(!root) return;

  postOrderTraversal(root.left);
  postOrderTraversal(root.right);
  console.log(root.val);
}

// postOrderTraversal(node4);

const breadthFirstTraversal = (root) => {
  const queue = [root];

  while(queue.length){

    let currentNode = queue.shift();
    console.log(currentNode.val);

    if(currentNode.left) queue.push(currentNode.left);
    if(currentNode.right) queue.push(currentNode.right);

  }
}

// breadthFirstTraversal(node4);


const depthFirstSearch = (root, target) => {
  if(!root) return false;
  if(root.val === target) return true;

  if(root.val < target) return depthFirstSearch(root.right, target);
  if(root.val > target) return depthFirstSearch(root.left, target);
}

const breadthFirstSearch = (root, target) => {
  const queue = [root];

  while(queue.length){

    let currentNode = queue.shift();
    if(currentNode.val === target) return true;
    if(currentNode.left) queue.push(currentNode.left);
    if(currentNode.right) queue.push(currentNode.right);

  }

  return false;
}

// console.log(depthFirstSearch(node4, 90));
// console.log(breadthFirstSearch(node4, 90));
