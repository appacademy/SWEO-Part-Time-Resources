//Logorithms
//The logorithm of a number is how many times it must be divided by the base to reach 1
//(Base 2, Base 10, Base 16)
//Example:    log2(32)

//Why are logorithms important?
//There is a time/space complexity called logorithmic complexity
//O(log n)
//Incredibly efficient and its second best to constant

//Binary Trees

//Trees

//trees are a super common data structure & they're similar to linked lists
//however instead of a having a single node, trees hae parent nodes than can have more than one child node

//Graphs
//A tree is a type of graph

//A graph is a collection of nodes, and edges between those nodes

//Binary trees
//A binary tree is a tree than can have no more than two children per node

//Tree Terminology

//Node - A tree component that contains a value and (possibly) pointers to other nodes
//Tree - a graph with no cycles, AND each node can only have ONE parent
//Binary Tree- A tree with no more than two children per node
//Root - First node in a tree, with no parent node (top node)
//Internal Node- A node that has children
//Leaf - A node with NO children
//Path - A series of ode that can be traversed
//Edge - Another word for a pointer
//Parent/Child node- Parents points to a child
//Subtree - A tree whose root node is the child of another tree
//Branch node - a node with at least one child
//Level - How many levels we are from the root
//Width - How many nodes are on a level
//Height - The number of levels from the root and the bottom-most node

//Tree Traversal
//Traversal - Visit or evaluate ever node
//Search - A traversal that you stop when you find the target

//Searching a binary tree

//We visit every node in the tree until we find the target and then we return true, otherwise we traverse
//the whole tree and return false

//Traversing a binary tree
//We do this when we want to visit EVERY node in the tree

//There are so many ways to do this

//Pre-Order Traversal
//Steps:
// 1. Print the current node
// 2. Traverse the left side
// 3. Traverse right side

//In-Order Traversal
//Steps:
// 1. Traverse Left
// 2. Print
// 3. Traverse Right

//Post-Order TRaversal
//Steps:
// 1. traverse left
// 2. traverse right
// 3. print

//Depth- First Search
//We start at the root, go to the bottom left most node, back up, down the right and back up again

//Depth first search is the method of traveling as deep as possible down the tree branches
//until we reach a dead end and go back up again

//Pre, In, and Post-Order Traversal are ALL examples of depth first

//Breadth First Traversal
//Visit each node on a particular level before moving down a level (left to right)
//Since breadth-first jumps between subtrees we cant use recursion instead we can a queue