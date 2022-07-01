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
      this.root = null;
    }
  
    // insert(val, currentNode=this.root) {
    //   //edge case: handle initial start where root is null
    //   if(this.root === null){
    //     // we want to add the val as our root node
    //     this.root = new TreeNode(val);
    //     return;
    //   }
    //   //if the val is less than the currentNode.val then...
    //   if(val < currentNode.val){
    //     //if the currentNode.left is null, then we add in the node
    //     if(currentNode.left === null){
    //       currentNode.left = new TreeNode(val);
    //     }
    //     //else if the currentNode.left is NOT null, then we continue to traverse by calling insert again passing to it (val, currentNode.left)
    //     else if(currentNode.left !== null){
    //       this.insert(val, currentNode.left);
    //     }
    //   }
    //   //if the val is greater than the currenNode.val then...
    //   else{
    //     if(val > currentNode.val){
    //       if(currentNode.right === null){
    //         //reassign currentNode.right from null to the new node to add in
    //         currentNode.right = new TreeNode(val);
    //       }
    //       //else it's occupied w/ a node already, so call insert again on the next right node. In order to find the correct spot that is null.
    //       else if(currentNode.right !== null){
    //         this.insert(val, currentNode.right);
    //       }
    //     }
    //   }
    // }
  
    //christopher's and david's
    insert(val, currentNode = this.root) {
      let newNode = new TreeNode(val);
  
      if (this.root === null) {
        this.root = newNode;
        return;
      }
      if (newNode.val < currentNode.val) {
        if (currentNode.left !== null) {
          this.insert(val, currentNode.left)
        }
        else {
          currentNode.left = newNode;
          return;
        }
      }
      else {
        if (currentNode.right !== null) {
          this.insert(val, currentNode.right)
        }
        else {
          currentNode.right = newNode;
          return;
        }
      }
    }
  
  
    search(target) {
      //first create a pointer that will allow us to traverse the BST, and initially set it to the root node (kinda like link list head)
      let currentNode = this.root;
  
      //while the currentNode is not null, we continue to traverse to find the if the val exists!
      while(currentNode !== null){
        //1) does the currentNode.val === target? if so, return true
        if(currentNode.val === target) return true;
  
        //2) if target is less than currentNode.val, then we reassign the currentNode to be the currentNode.left node.
        else if(target < currentNode.val){
          currentNode = currentNode.left;
        }
  
        //3) if target is greater than currentNode.val, then we reassign the currentNode to be currentNode.right node.
        else if(target > currentNode.val){
          currentNode = currentNode.right;
        }
      }
  
      //if our while loop didn't find that the target exist, then return false
      return false;
    }
  
  
    preOrderTraversal(currentNode = this.root) {
      //base case, if currentNode is null, then stop and just return. This will prevent any code below to excute and stop the recursion
      if(currentNode === null){
        return;
      }
      //access/ log the data first at the currentNode
      console.log(currentNode.val);
  
      //recursively traverse on the left node (currentNode.left)
      this.preOrderTraversal(currentNode.left);
  
      //recursively traverse on the right node (currentNode.right)
      this.preOrderTraversal(currentNode.right);
    }
  
  
    inOrderTraversal(currentNode = this.root) {
      //if currentNode doesn't exist, this handles the edge case at the start and prevent continuation if currentNode is null
      if (!currentNode) return;
  
      //if currentNode.left exists, recursive call w/ currentNode = currentNode.left
      this.inOrderTraversal(currentNode.left);
  
      //log the data
      console.log(currentNode.val)
  
      //if currentNode.right exists, recursive call w/ currentNode = currentNode.right
      this.inOrderTraversal(currentNode.right);
    }
    
    
    postOrderTraversal(currentNode = this.root) {
      //if currentNode doesn't exist, this handles the edge case at the start and prevent continuation if currentNode is null
      if (!currentNode) return;
  
      //if currentNode.left exists, recursive call w/ currentNode = currentNode.left
      this.postOrderTraversal(currentNode.left);
  
      //if currentNode.right exists, recursive call w/ currentNode = currentNode.right
      this.postOrderTraversal(currentNode.right);
  
      //log the data
      console.log(currentNode.val)
    }
  
      // Breadth First Traversal - Iterative
    breadthFirstTraversal() {
      //create queue (for now we will use an array)
      const queue = [];
      queue.push(this.root) //add the root to the queue initially
  
      //while queue is not empty (q.length, we want to continue processing the nodes)
      while(queue.length > 0){
        //dequeue to get the current node and then process it
        let node = queue.shift();
        console.log(node.val);
  
        //we check to see if left sub tree exists, so we can queue it to be processed later 
        if(node.left !== null){
          queue.push(node.left);
        }
        //we check to see if right sub tree exists, so we can queue it to be processed later 
        if(node.right !== null){
          queue.push(node.right);
        }
      }
    }
  
    // Depth First Traversal - Iterative
    depthFirstTraversal() {
      const stack = [this.root];
  
      while(stack.length){
        //pop from the stack, and log the data
        const currentNode = stack.pop()
        console.log(currentNode.val);
  
        //then check if the left of the stack exist, push it to the stack
        if(currentNode.left){
          stack.push(currentNode.left);
        }
  
        //then check if the right of the stack exist, push it to the stack
        if(currentNode.right){
          stack.push(currentNode.right);
        }
      }
  
  }
  }
  
  module.exports = { BinarySearchTree, TreeNode };