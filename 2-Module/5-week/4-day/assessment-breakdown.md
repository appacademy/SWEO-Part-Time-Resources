## Week 11 Assessment Breakdown
- 4 MC; 6 Specs; 
  - Passing score: 8/10
  
- Binary search concepts (not just tree, reference day 1)
- Trees: binary trees, BST
- Different tree traversals: BFS, DFS (inorder, preorder, postorder), etc.
  - i.e. given a tree, can you provide the output for if asked for pre-order, etc?
- Big O and Time complexity of binary tree operations

- Coding Portion: Analyze and Debug
  - given almost working code, get it to work (debug).
  - understand the different traversal DFS, BFS, etc.
  - be able to debug the code to work properly w/ the methods used correctly for the given datastructure.

- Debugging Tips to ISOLATE the BUG
  - `mocha -b`: 
    - check error message to see what the output was vs. correct answer.
    - check test specs file for more examples
  - Understand problem: (Remember, avoid running big examples!! Start small first)
    - Run node on the SMALL example
    - draw out the SMALL tree through the example (code, diagram, paint, drawing, etc.)
  - Run Debugger: uncomment SMALL EXAMPLE for step by step analysis 
    - remember to add variables you want to watch. i.e. `currentNode`, `currentNode.left`, etc.