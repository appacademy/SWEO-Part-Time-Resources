// class Node {
//   constructor(val){
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// };

// const node1 = new Node(1);
// const node2 = new Node(2);
// const node3 = new Node(3);
// const node4 = new Node(4);
// const node5 = new Node(5);
// const node6 = new Node(6);


// node1.left = node2;
// node1.right = node3;

// node2.left = node4;
// node2.right = node5;

// node3.left = node6;

// console.log(node1);


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

const preOrder = (root) => {
  if(!root) return;

  console.log(root.val);
  preOrder(root.left);
  preOrder(root.right);
}

// preOrder(node4);

/*
Recursively call left subtree
Print the current node
Recursively call the right subtree
*/

const inOrder = (root) => {
  if(!root) return;

  inOrder(root.left);
  console.log(root.val);
  inOrder(root.right);
}

// inOrder(node4);

/*
Recursively call the left subtree
Recursively call the right subtree
Print the current node
*/

const postOrder = (root) => {
  if(!root) return;

  postOrder(root.left);
  postOrder(root.right);
  console.log(root.val);
}

// postOrder(node4);


const BFS = (root, val) => {
  const queue = [root]

  while(queue.length){
    let currentNode = queue.shift();
    if(currentNode.val === val) return true;
    // console.log(currentNode.val)

    if(currentNode.left) queue.push(currentNode.left);
    if(currentNode.right) queue.push(currentNode.right);
  }

  return false;
}
// console.log(BFS(node4, 20));

const DFS = (root, val) => {
  if(!root) return false;
  if(root.val === val) return true;

  if(val < root.val) return DFS(root.left, val);
  if(val > root.val) return DFS(root.right, val);
}

console.log(DFS(node4, 20))
