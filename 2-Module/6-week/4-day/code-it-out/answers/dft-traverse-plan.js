//from memory, try our best to write out the basic template plan for depth first traversal of a graph

// *****Plan here******
/*
1) create the stack that will represent the nodes that are going to be visited
2) set that tracks all the visited nodes / will be visited
3) add the starting node to the stack and the set
4) while the stack is not empty:
    5) pop the most recent node from the stack
    6) do the thing with our node (log, adding +1 to the length)
    7) with the node, call the get neighbors helper function on it to grab us all the neighbors array
    8) go over the neighbors and for each uninvisited one
        9) add it to the stack 
        10) add it to the set


*/