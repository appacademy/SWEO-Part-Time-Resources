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
    }
  
  
    
          //      4
          //    /   \
          //   2     6
          //  / \   / \
          // 1   3 5   7
    preOrderTraversal(currentNode = this.root) {
      // console.log("Am I SANE??")
      // base Case check tyo see if nodes val is not null, 
      if(!currentNode) return 
      // console log the current nodes value
      console.log(currentNode.val)
      // recursive step, we are recusing passing in the left node
      this.preOrderTraversal(currentNode.left)
      // then do the same thing on the right
      this.preOrderTraversal(currentNode.right)
      
    }
    
          //      4
          //    /   \
          //   2     6
          //  / \   / \
          // 1   3 5   7
  
    inOrderTraversal(currentNode = this.root) {
     // console.log("Am I SANE??")
      // base Case check tyo see if nodes val is not null, 
      if(!currentNode) return 
      // recursive step, we are recusing passing in the left node
      this.inOrderTraversal(currentNode.left)
      // console log the current nodes value
      console.log(currentNode.val)
      // then do the same thing on the right
      this.inOrderTraversal(currentNode.right)
    }
          //      4
          //    /   \
          //   2     6
          //  / \   / \
          // 1   3 5   7
    postOrderTraversal(currentNode = this.root) {
       // console.log("Am I SANE??")
      // base Case check tyo see if nodes val is not null, 
      if(!currentNode) return 
      // recursive step, we are recusing passing in the left node
      this.postOrderTraversal(currentNode.left)
      // then do the same thing on the right
      this.postOrderTraversal(currentNode.right)
      // console log the current nodes value
      console.log(currentNode.val)
    }
  
      // Breadth First Search - Iterative -- queue
         //      4
          //    /   \
          //   2     6
          //  / \   / \
          // 1   3 5   7
    breadthFirstTraversal() {
      // initialize a queue with the this.root
      let queue = [this.root]
      // while the queue is not empty
      while(queue.length){
        //print and remove first node in queue
        let currentNode = queue.shift()
        console.log(currentNode.val)
        // if the node has a left node
        if(currentNode.left){
          // push the left node onto the back of the queue
          queue.push(currentNode.left)
        }
        // if the currentNde has a right
        if(currentNode.right){
          // push that to the queue
          queue.push(currentNode.right)
        }
      }
  
    }
  
          //      4
          //    /   \
          //   2     6
          //  / \   / \
          // 1   3 5   7
  
    // Depth First Traversal - Iterative -- stack 
    depthFirstTraversal() {
      // initialize a queue with the this.root
      let stack = [this.root]
      // while the stack is not empty
      while(stack.length){
        //print and remove first node in stack
        let currentNode = stack.pop()
        console.log(currentNode.val)
        // if the node has a left node
        if(currentNode.left){
          // push the left node onto the back of the queue
          stack.push(currentNode.left)
        }
        // if the currentNde has a right
        if(currentNode.right){
          // push that to the stack
          stack.push(currentNode.right)
        }
      }
  
    }
  }
  
  
  module.exports = { BinarySearchTree, TreeNode };