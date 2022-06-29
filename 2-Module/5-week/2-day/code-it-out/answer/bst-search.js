/***************** 
*************************Search step by step*********************
O(log n) search for BSTs recursive process:
- Initially set the current node to the entry point (what is the entry point to be able to access all the nodes?)
- ------------while----------
- If the current node's value is equal to the target, return true
- If the target is less than the current node's value, re assign the current node to be the current node's left pointer.
- If the target is greater than the current node's value, re assign the current node to be the current node's right pointer.

     10
   /    \
  5      12
 / \     / \
4   8  11   13
   / \
  7   9


walk step by step and analyze the plan provided and process what searching for a target like the #7 will look like.

******************/