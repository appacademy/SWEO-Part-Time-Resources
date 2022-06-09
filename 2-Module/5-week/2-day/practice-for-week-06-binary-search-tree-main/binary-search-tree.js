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

  insert(val, currentNode=this.root) {
    let newNode = new TreeNode(val)
    // base Case
    if(currentNode === null){
      this.root = newNode
      return 
    }
    if(val < currentNode.val){
      if(currentNode.left === null){
        currentNode.left = newNode
      }else{
        this.insert(val, currentNode.left)
      }
    }
    if(val > currentNode.val){
      if(currentNode.right === null){
        currentNode.right = newNode
      }else{
        this.insert(val, currentNode.right)
      }
    }
  }

  // search(val) {
  //   let currentNode = this.root

  //   while(currentNode){
  //     if(val < currentNode.val){
  //       currentNode = currentNode.left
  //     }
  //     else if(val > currentNode.val){
  //       currentNode = currentNode.right
  //     }
  //     else{
  //       return true
  //     }
  //   }
  //   return false
  // }
  search(val, current = this.root) {
    if(current === null) return false 
    if(current.val === val) return true
    if(val < current.val) {
      return this.search(val, current.left)
    }
    else if(val > current.val){
      return this.search(val, current.right)
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


  preOrderTraversal(currentNode = this.root) {
    // Your code here
  }


  inOrderTraversal(currentNode = this.root) {
    // Your code here
  }


  postOrderTraversal(currentNode = this.root) {
    // Your code here
  }

    // Breadth First Traversal - Iterative
  breadthFirstTraversal() {
    // Your code here
  }

  // Depth First Traversal - Iterative
  depthFirstTraversal() {
    // Your code here
  }
}

module.exports = { BinarySearchTree, TreeNode };