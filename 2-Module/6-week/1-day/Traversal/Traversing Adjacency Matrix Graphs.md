Imagine we have four points: A, B, C, and D. We can create a matrix (a grid of numbers) to show which points are connected to each other.

### Creating an Adjacency Matrix
Here’s a simple graph with four points:
```
    A - B
    |   |
    C - D

```

We can represent this graph with an adjacency matrix. If two points are connected, we put a `1` in the matrix; otherwise, we put a `0`.

Here’s the matrix for our graph:
```
    A  B  C  D
A [ 0, 1, 1, 0 ]
B [ 1, 0, 0, 1 ]
C [ 1, 0, 0, 1 ]
D [ 0, 1, 1, 0 ]

```

### How to Traverse the Matrix
To traverse the matrix, we’ll use two common algorithms: **Breadth-First Search (BFS)** and **Depth-First Search (DFS)**. These algorithms help us visit every point in the graph.

### Breadth-First Search (BFS)
BFS starts at one point and explores all its neighbors first before moving to the next level of neighbors. It's like exploring all the rooms on the current floor before going upstairs.

#### BFS Steps
1. Start at the given point.
2. Visit all its neighbors.
3. Move to the next level of neighbors.
4. Repeat until all points are visited.

### Depth-First Search (DFS)
DFS starts at one point and explores as far as possible along each branch before backtracking. It’s like diving deep into one room and going through every connecting room before returning to explore other rooms.

#### DFS Steps

1. Start at the given point.
2. Visit a neighbor and then visit its neighbors recursively.
3. Backtrack when no more neighbors to visit.
4. Repeat until all points are visited.
   
   
### Summary
- **Matrix Graph**: A grid that shows connections between points.
- **BFS**: Visits all neighbors level by level.
- **DFS**: Visits neighbors deeply before backtracking.