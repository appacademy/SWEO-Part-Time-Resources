//Logorithms
//What is a logorithm
//     - It's  the opposite of exponents

//The logorithm of a number is how many times we have to divide a number by its base to get to 1
//Second best constant

//Trees
//What is a TREE (not a binary tree)
//Trees are very similar to linked lists but each node can have more than one
//child node
//Tree cannot have cycles

//Graphs 
//A graph is just a collection of connected nodes

//Binary Tree
//The only difference between these and regular trees is that a binary trees nodes
//can only have a maximum of two children

/*
tree - graph with no cycles
binary tree - tree where nodes have at most 2 child nodes

root - the ultimate parent, the single node of a
 tree that can access every other node through edges; 
 by definition the root will not have a parent

internal node - a node that has children
leaf - a node that does not have any children
path - a series of nodes that can be traveled through edges 
Node: A tree component that contains one value and pointers to other nodes
Edge: Another name for a pointer
Root node: The top node in a tree
Parent/child node: A parent node points to child nodes
Subtree: A tree whose root is the child of another node in the tree
Branch node: A node with at least one child node
Leaf node: A node with no children
Level: The number of edges between a given node and the root node
Width: The number of nodes in a given level
Height: The number of edges between the root node and the bottom-most node

*/

//Tree Traversal

//Traversal - visiting every single node in the tree

//Searching - Same as traversal, but we stop when we find our target

//Traversing a binary tree

//Many ways to traverse binary trees

//These three are specific to binary trees
//Pre-Order Traversal
// Steps:
// 1. Print current node
// 2. Traverse left
// 3. Traverse right

//In-Order Traversal
//Steps:
// 1. Traverse left (left-most)
// 2. Print
// 3. Traverse right

//Post-Order Traversal
//Steps:
// 1. Traverse left
// 2. Traverse right
// 3. print

//Depth-first search
//Pre, in, and post order traversals are all examples of depth first searches

//When we start at the root and go to the bottom left-most node before going up again

//Breadth-first - requires a queue like data structure

//When we search each level from left to right