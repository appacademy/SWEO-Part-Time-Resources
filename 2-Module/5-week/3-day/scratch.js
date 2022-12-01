preOrderTraversal(currentNode = this.root) {
  // Your code here
  //Root, left, right
  if(!currentNode) return;

  console.log(currentNode.val)
  if(currentNode.left) this.preOrderTraversal(currentNode.left)
  if(currentNode.right) this.preOrderTraversal(currentNode.right)



}


inOrderTraversal(currentNode = this.root) {
  // Your code here
      //Left, Center, right
      if(!currentNode) return;

      if(currentNode.left) this.inOrderTraversal(currentNode.left)
      console.log(currentNode.val)
      if(currentNode.right) this.inOrderTraversal(currentNode.right)

}


postOrderTraversal(currentNode = this.root) {
  // Your code here
       //Left, Right, Center
       if(!currentNode) return;

       if(currentNode.left) this.postOrderTraversal(currentNode.left)
       if(currentNode.right) this.postOrderTraversal(currentNode.right)
       console.log(currentNode.val)

}

  // Breadth First Traversal - Iterative
breadthFirstTraversal() {
  // your code here
  const queue = [this.root]

  while(queue.length > 0){
    //dequeue
    let currentNode = queue.shift()
    //print
    console.log(currentNode.val)
    //check to see if the node has a right or left and enqueue it.
    if(currentNode.left) queue.push(currentNode.left)
    if(currentNode.right) queue.push(currentNode.right)

  }


}

// Depth First Traversal - Iterative
depthFirstTraversal() {
  // your code here
  const stack = [this.root]

  while(stack.length > 0){
    //pop off stack
    let currentNode = stack.pop()
    //print
    console.log(currentNode.val)
    //check to see if the node has a right or left and push onto stack it.
    if(currentNode.left) stack.push(currentNode.left)
    if(currentNode.right) stack.push(currentNode.right)

  }

}
