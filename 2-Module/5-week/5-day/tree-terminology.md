
## Tree Terminologies
- **tree:** - graph (nodes w/ connected edges) with no cycles
- **binary tree:** - tree where nodes have at most 2 nodes
- **binary search tree:** - binary tree but is ordered left nodes smaller than parent, right nodes bigger than parent.
- **Node:** A tree component that contains one value and **`pointers to other nodes (edges)`**
- **Root node:** the ultimate parent, the single node of a tree that can access every other node - through edges; by definition the root will not have a parent
- **Parent/child node:** A parent node points to child nodes
- **Branch node:** A node with at least one child node
- **Leaf node** - a node that does not have any children
- **Edge:** Another name for a pointer
- **Path:** a series of nodes that can be traveled through edges - for example **`A, B, E is a path`** - through the above tree
- **Subtree**: A tree whose sub-root is the child of another node in the tree
- **Level**: The number of edges (pointers) between a given node and the root node
- **Width**: The number of nodes in a given level
- **Height**: The number of edges between the root node and the bottom-most node
