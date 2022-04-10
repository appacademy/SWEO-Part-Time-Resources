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
    this.root = null
  }

//  // Recursively 
//   insert(val, currentNode=this.root) {
//     // One liner for fun
//     // !currentNode ? this.root = new TreeNode(val) : (val > currentNode.val ? 
//     //   !currentNode.right ? currentNode.right = new TreeNode(val) : this.insert(val, currentNode.right) : 
//     //   !currentNode.left ? currentNode.left = new TreeNode(val) : this.insert(val, currentNode.left)
//     //   )

//     // // if there is no root,  I need to create a new instance of treeNode and set it as the root
//     // if(!currentNode) return this.root = new TreeNode(val)

//     // check to see if the val is < than the current node.val
//     if(val < currentNode.val){
//       // if it is
//       // check weather the current node has anything in its left side
//       if(currentNode.left === null){
//         // if it is set the left to the new node
//         currentNode.left = new TreeNode(val)
//         return
//       }
//       // if the node on the left is not null then we recurse
//       this.insert(val, currentNode.left)
//     }
//     // check to see if the val is grater than the currentNode.val
//     if(val > currentNode.val){
//       //if it is
//       // check weather something lives at the .right
//       if(currentNode.right === null){
//         // if nothing lives there, assign it to a new node
//         currentNode.right = new TreeNode(val)
//         return
//       }
//       // if the node on the right is not null recurse passing in the right node
//       this.insert(val, currentNode.right)
//     }

//   }

//  Iterative
insert(val, currentNode=this.root) {
    if(!currentNode) return this.root = new TreeNode(val)

    while(currentNode){
      if(val > currentNode.val){
        if(currentNode.right === null){
          currentNode.right = new TreeNode(val)
          break
        }else{
          currentNode = currentNode.right
        }
      }
      if(val < currentNode.val){
        if(currentNode.left === null){
          currentNode.left = new TreeNode(val)
          break
        }else{
          currentNode = currentNode.left
        }
      }


    }
}
  // Iterative
  // search(val) {
  //   // create a variable equal to the root node
  //   let currentNode = this.root
  //   // start our while loop with while currentNode
  //   while(currentNode){
  //     // if we find our  value we want to return true
  //     if(currentNode.val === val) return true
  //     // check to see if the target value is less than the current nodes value
  //     // if it is then we reassign current node to current Node.left
  //     if(val < currentNode.val) currentNode = currentNode.left
  //     else currentNode = currentNode.right
  //   }
  //   return false
  // }

  // recursive
  search(val, current = this.root){
    //base case is if we search and reach a null value, we did not find our target
    if(!current) return false
    // First we need to check to see if we found our val
    if(val === current.val) return true
    if(val < current.val) return this.search(val, current.left)
    else return this.search(val, current.right)
  }
      //      4
      //    /   \
      //   2     6
      //  / \   / \
      // 1   3 5   7


  preOrderTraversal(currentNode = this.root) {
    // base case
    if(!currentNode) return
//     log current val
    console.log(currentNode.val)
//     recurse left 
    this.preOrderTraversal(currentNode.left)
//     recurse right
    this.preOrderTraversal(currentNode.right)
  }
      //      4
      //    /   \
      //   2     6
      //  / \   / \
      // 1   3 5   7

  inOrderTraversal(currentNode = this.root) {
    // base case
    if(!currentNode) return
    //     recurse left 
    this.inOrderTraversal(currentNode.left)
    //     log current val
        console.log(currentNode.val)
    //   recurse right
    this.inOrderTraversal(currentNode.right)
  }

      //      4
      //    /   \
      //   2     6
      //  / \   / \
      // 1   3 5   7
  postOrderTraversal(currentNode = this.root) {
    // base case
    if(!currentNode) return
    //     recurse left 
    this.postOrderTraversal(currentNode.left)
    //   recurse right
    this.postOrderTraversal(currentNode.right)
    //     log current val
        console.log(currentNode.val)
  }
      //      4
      //    /   \
      //   2     6
      //  / \   / \
      // 1   3 5   7
    // Breadth First Traversal - Iterative
  breadthFirstTraversal() {
    // start  with the root node
    //create my queue, and have the root be the first value
    let queue = [this.root]
    // loop while my queue has a length
    while(queue.length){
      // dequeue the first element in the queue
      let currentNode = queue.shift()
      console.log(currentNode.val)
      //inside my loop 
      // I am going to push each child of the current node into the queue
      if(currentNode.left !== null){
        queue.push(currentNode.left)
      }
      if(currentNode.right!==null){
        queue.push(currentNode.right)
      }  
    }
  }
      //      4
      //    /   \
      //   2     6
      //  / \   / \
      // 1   3 5   7
  // Depth First Traversal - Iterative
  depthFirstTraversal() {
    // start  with the root node
    //create my stack, and have the root be the first value
    let stack = [this.root]
    // loop while my stack has a length
    while(stack.length){
      // unstack the most recent element added to the stack
      let currentNode = stack.pop()
      console.log(currentNode.val)
      //inside my loop 
      // I am going to push each child of the current node into the stack
      if(currentNode.left !== null){
        stack.push(currentNode.left)
      }
      if(currentNode.right!==null){
        stack.push(currentNode.right)
      }  
    }
  }
}



bst = new BinarySearchTree();
      bst.insert(4);
      bst.insert(2);
      bst.insert(6);
      bst.insert(1);
      bst.insert(3);
      bst.insert(5);
      bst.insert(7);

bst.depthFirstTraversal()

module.exports = { BinarySearchTree, TreeNode };