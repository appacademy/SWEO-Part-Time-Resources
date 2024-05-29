## 

### Introduction to Graphs

A **graph** is a collection of **nodes** (also called **vertices**) connected by **edges**. Think of it like a map where places (nodes) are connected by roads (edges).

### What is Depth-First Traversal (DFS)?

**Depth-First Traversal (DFS)** is a way to visit all the nodes in a graph. The idea is to start from a node and explore as far as possible along each branch before backtracking. Imagine you're exploring a maze and you keep going down each path until you can't go any further, then you backtrack to try another path.

### How DFS Works

1. **Start** at the initial node.
2. **Visit** the node and mark it as visited.
3. **Explore** each unvisited neighbor by moving to it and repeating the process. // identify unvisited neighbors 
4. **Backtrack** when you reach a node with no unvisited neighbors and continue with the next unvisited neighbor of the previous nodes. // backtrack and identify unvisited neighbors 

### DFS Using a Stack (Iterative Approach)

A **stack** is a data structure that follows the Last-In-First-Out (LIFO) principle. Think of it like a stack of plates: you can only take the top plate off the stack.

### Example Graph

Let's represent a graph in JavaScript using an adjacency list (an object where each key is a node and its value is an array of connected nodes):




### DFS Implementation in JavaScript
### Explanation of the Code

1. **Initialize** a stack with the starting node and an empty set to keep track of visited nodes. // stack starts here 
3. **Loop** while the stack is not empty:
    - **Pop** a node from the stack. // remove node from stack  -> pop
    - If the node hasn't been visited: // identify if visited: 
        - **Visit** the node (print it out). // print 
        - Mark the node as **visited**. // mark as visited 

			// how to identify unvisited neighbors 
        - **Push** all unvisited neighbors of the node onto the stack. // push unvisited 

### Example Run

queue = ['B', 'C'] -> unshift "B"
BFS = queue 

stack = ['B', 'C'] -> pop "C"
DFS = stack 

Starting from node 'A':
`const graph = {   'A': ['B', 'C'],   'B': ['A', 'D', 'E'],   'C': ['B', 'F'],   'D': ['B'],   'E': ['B', 'D'],   'F': ['B', 'E'] };`
1. Stack: ['A']
2. Visit 'A', mark as visited.
3. Stack: ['B', 'C'] (push neighbors of 'A')
4. Pop 'C', visit 'C', mark as visited.
5. Stack: ['B', 'F'] (push neighbors of 'C')
6. Pop 'F', visit 'F', mark as visited.
7. Stack: ['B', 'E'] (push neighbors of 'F')
8. Pop 'E', visit 'E', mark as visited.
9. Stack: ['B', 'D'] (push neighbors of 'E')
10. Pop 'D', visit 'D', mark as visited.
11. Stack: ['B'] (push neighbors of 'D')
12. Pop 'B', visit 'B', mark as visited.
13. Stack: [] (all neighbors of 'B' are already visited)

### Conclusion

DFS is a powerful way to explore all the nodes in a graph by diving deep into each path before backtracking. By using a stack, we can implement DFS iteratively, avoiding the complexity of recursion.