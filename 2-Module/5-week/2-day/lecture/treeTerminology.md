# Tree Terminology

```js
       A       
      / \      
     B   C     
    / \   \    
   D   E   F 
```


- `tree`: graph with no cycles
- `binary tree`: tree where nodes have at most 2 children
- `root`: the ultimate parent, the single node of a tree that can access every other node through edges; by definition the root will not have a parent (`A`)
- `internal node`: a node that has children (`A, B, C`)
- `leaf`: a node that does not have any children (`D, E, F`)
- `path`: a series of nodes that can be traveled through edges - for example `A, B, E` is a path through the above tree
- `Node`: A tree component that contains one value and pointers to other nodes (`A, B, C, D, E, F`)
- Edge: Another name for a pointer (`A -> B, A -> C`)
- `Parent/child node`: A parent node points to child nodes
- `Subtree`: A tree whose root is the child of another node in the tree
- `Branch node`: A node with at least one child node
- `Level`: The number of edges between a given node and the root node
- `Width`: The number of nodes in a given level
- `Height`: The number of edges between the root node and the bottom-most node
