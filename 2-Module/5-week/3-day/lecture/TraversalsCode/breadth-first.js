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
  const queue = new Queue();
  queue.enqueue(root)

  while (queue.length > 0){
    const current = queue.dequeue();
    console.log(current.val);

    if (current.left) queue.enqueue(current.left);
    if (current.right) queue.enqueue(current.right);
  }
}

breadthFirstTraversal(bst.root);

