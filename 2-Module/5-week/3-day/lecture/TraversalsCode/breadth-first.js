const Queue = require('./utils/queue');
const bst = require('./utils/bst');

// Code a Breadth First Traversal using a Queue

// our bst looks like this 

//      4
//    /   \
//   2     6
//  / \   / \
// 1   3 5   7

// Breadth Frist Traversal requires us to work our way down
// by level, so we should expect our logs to be 4, 2, 6, 1, 3, 5, 7

const breadthFirstTraversal = (root) => {
  const q = new Queue();
  q.enqueue(root);

  while (q.length > 0){
    const current = q.dequeue();
    console.log(current.val);

    if (current.left) q.enqueue(current.left);
    if (current.right) q.enqueue(current.right);
  }
}

breadthFirstTraversal(bst.root);

