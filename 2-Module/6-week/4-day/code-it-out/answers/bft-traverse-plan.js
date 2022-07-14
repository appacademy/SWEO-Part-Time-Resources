//from memory, try our best to write out the basic template plan for breadth first traversal of a graph


// *****Plan here******
/*
1) create a queue to contain the nodes that we are going to visit
2) create a set to keep track of visited notes
3) to add initial starting node to queue as the set
4) while our queue is not empty do:
    5) dequeue the first element and mark it as visited
    6) do the thing (log node data, adding to a length, etc.)
    7) apply the functionality of the `getNeighbors` function which will grab the array of unvisited neighbors
    8) for each unvisited neighbor of the current node add it to the back of the queue


*/