/*
A graph is a collection of nodes connected by edges. Unlike trees,
graphs do not necessarily start from a root node and can have any number of neighboring edges.
Here are some examples of real-world graphs
Street maps
Social network
The internet
Decisions in a board game
*/

// graph vs other types of trees

// same idea we have been learning passed few week, nodes and pointer,
// but with a graph there is no limit to number of pointers

/*
Nodes/vertices and edges
directed vs. undirected
cyclic vs. acyclic
weighted vs. unweighted
*/

/*
    nodes are the actual information,  vertices and edges are the pointers to other nodes.
    Undirected vs directed
    Undirected is two way between nodes, ie, facebook friends, if you accept me as your friend, you become my friend aswell
    Directed is a one way relationship.  like following someone doesn't make them follow you
    cyclical, some of the nodes point in circles.
    weighted vs unweighted, you can have your pointer carry weight,  like traffic, or stoplights if the pointer is the road then those things increase weight
*/
// quick example


let matrixExample =[
    [1, 0, 1]
    [1, 0, 2],
    [7, 8, 9]
]
// more traditional example
const graph1 = {
    T: ['V'],
    U: ['V'],
    V: [],
  };

  const graph2 = {
    X: ['Y'],
    Y: ['Z'],
    Z: ['X'],
  };

  const graph3 = {
    A: ['B', 'C'],
    B: [],
    C: ['B', 'D'],
    D: [],
    E: ['A'],
    F: ['E'],
  };

// long example

class GraphNode {
    constructor(val){
        this.val = val
        this.adjList= []
    }
}

// breadth first Traversal
// same as with binary tree
// dequeue
// do something
// push children

// DFT, same as BFT but with a  stack


//breadth first search.  searching as you traverse

// shortest path, bfs but you are keeping track of paths rather than nodes themselves
// first complete path you encounter with be the shortest


// length of separation is just the length of paths
