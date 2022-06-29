/***************** 
Properties of a binary SEARCH tree (BST):
- is a binary tree( w/ at most 2 nodes left and right).
    - binary search trees are binary trees, but a normal binary tree may NOT be a BST

- Left less: every node contained in the **left branch** of any node will be less than the value of the node itself

- Right More: every node in the right branch will be greater than the node value

- allows for the same O(log n) search as a sorted array, but with O(log n) insertion and deletion 



//Is this a valid binary search tree?
     10
   /   \
  5     12
 / \   / \
4   6 11   13

yes it is a valid BST

[4,5,6, 10, 11, 12, 13]


//Is this a valid binary search tree?

//this is a binary tree
//but it is NOT a BINARY SEARCH TREE. left hand side of the root node 5, has a node value of 6 which invalidates this as a BST.
     5
   /   \
  3     8
 / \   / \
1   6 6   9

*************************Search step by step*********************
O(log n) search for BSTs recursive process:
- Initially set the current node to the entry point (what is the entry point to be able to access all the nodes?)
    // - we want a current node pointer to initial set to the entry point: ROOT NODE (link list head)
- ------------while currentNode----------
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