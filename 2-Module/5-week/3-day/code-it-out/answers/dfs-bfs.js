/* *********BFS traversal***********
- breadth-first traversal will visit each node in a particular level before moving down to the next level.

- can only be done using iterative approach

- It utilizes a queue for its implementation

//given a tree, write out the data that will be logged if BFS traversal is applied. Try to use a queue to do this step by step.

                 10
               /    \
              5      12
             / \       \ 
            4   8       13
                 \       \   
                  9      14

it's easy to see the pattern w/ our eyes, but can we explain the process with the pattern using a queue? (that is more important)

Visualize by drawing out a queue on paper, chart, etc; output order (answer):   10,5, 12, 4, 8, 13, 9, 14             

*/



/* *********DFS traversal***********
- you've seen this before (preorder, inorder, postorder are all DFS)

- Depth first search will traverse to the deepest node possible in one direction first, then backtrack (coming back up) it will traverse the other branches

- It utilizes a stack for its implementation when


                 10
               /    \
              5      12
             / \       \ 
            4   8       13
                 \       \   
                  9      14

//given the logic here for the DFS traversal, log out the data for the above tree
  
//initially add currentNode to the stack.
//while stack is not empty:
//  pop currentNode from stack and log the value.
//  if currentNode left node exists, push the node to the stack  
//  if currentNode right node exists, push the node to the stack  


Visualize this by drawing out a stack!! output order (answer): 


*/









