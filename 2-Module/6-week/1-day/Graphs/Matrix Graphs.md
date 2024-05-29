

### Solving Graph Problems:
In order to solve Matrix Graph problems, we must first be able to identify the type of graph we're working with:
##### 1. Identify and define the type of graph
Once you've identified a graph problem as being a _matrix_ graph problem, you should immediately consider the following questions:

- What is the problem asking you to do?
- What does the matrix represent?
- What does each node represent?
- What relationship do the edges represent?
- What is considered a valid neighbor, in the context of this problem?
- Is this a search or traversal problem?
- Does this require a depth-first or breadth-first approach?


---
### What is a Matrix Graph? 
A **Matrix Graph** is a way of representing a graph using a two-dimensional array (or matrix). This representation is useful for certain types of graph algorithms and can make some operations very straightforward. 

#### Adjacency Matrix
Matrix Representation:
- The graph is represented by an `N x N` matrix, where `N` is the number of nodes (vertices) in the graph. 
- Each element in the matrix indicates whether there is an edge between the nodes represented by the corresponding row and column. 

Nodes (vertices) and Edges 
- If there is an edge between node `i` and node `j` , then `matrix[i][j]` is set to `1` 
- If there is no edge between node `i` and node `j` , then `matrix[i][j]` is set to `0`

### Example of an Adjacency Matrix:
Consider the following Graph with nodes A, B, C, and D. The edges are: 
- A-B
- A-C
- B-D
- C-D
```
   // undirected graph:
   //   A
   //  / \
   // B   C
   //  \ /
   //   D


undirected graph adjacency list:
let graph = {
"A": ["B", "C"],
"B": ["D", "A"], 
"C": ["D", "A"],
"D": ["B", "C"]
}
```

**Step 1**: Identify the Nodes
- List the nodes A, B, C, D

**Step 2**: Create a Matrix
Initialize a 4x4 matrix with all elements set to `0` 

Example: 
```
undirected graph adjacency matrix initialization:

	A  B  C  D
A [ 0, 0, 0, 0 ]
B [ 0, 0, 0, 0 ]
C [ 0, 0, 0, 0 ]
D [ 0, 0, 0, 0 ]
```

**Step 3**: Add Edges
For each edge, update the matrix:
- A-B: Set matrix `[0][1]` and matrix`[1][0]` to 1.
- A-C: Set matrix`[0][2]` and matrix`[2][0]` to 1.
- B-D: Set matrix`[1][3]` and matrix`[3][1]` to 1.
- C-D: Set matrix`[2][3]` and matrix`[3][2]` to 1.

The final matrix looks like this:
```
    A  B  C  D
A [ 0, 1, 1, 0 ]
B [ 1, 0, 0, 1 ]
C [ 1, 0, 0, 1 ]
D [ 0, 1, 1, 0 ]
```

### Conventional Methods for Mapping Nodes to Indices
1. **Alphabetical or Numerical Order**: Nodes are sorted alphabetically or numerically, and indices are assigned based on this sorted order.
2. **Order of Appearance**: Nodes are assigned indices based on the order they are first encountered in the input data.
3. **Custom Order**: Indices are assigned based on a specific order dictated by the problem or application requirements.



   ### Example of Mapping Nodes to Indices
Let's use an example where nodes are labeled A, B, C, and D, and we use alphabetical order for mapping.
#### Nodes and Edges
- Nodes: A, B, C, D
- Edges: 
	- A-B
	- A-C
	- B-D
	- C-D
#### Alphabetical Order Mapping
- A -> 0
- B -> 1
- C -> 2
- D -> 3

Here's an example of how you can obtain a node's adjacency matrix `row` index:
```js 

let nodes = ["A", "B", "C", "D"]

const edges = [ 
			['A', 'B'], 
			['A', 'C'], 
			['B', 'D'], 
			['C', 'D'] ];
// Create a mapping of node names to indices
const nodeIndex = {}; 

// nodes: ["A", "B", "C", "D"]
// node indexes: {A: 0, B: 1, C: 2, D: 3}
// or
// node indexes: [0, 1, 2, 3]
nodes.forEach((node, index) => { nodeIndex[node] = index; });
// nodeIndex: {A: 0, B: 1, C: 2, D: 3}
```


Storing Adjacency Matrix Graph Coordinates:
[[Sets and Arrays in JavaScript]]
