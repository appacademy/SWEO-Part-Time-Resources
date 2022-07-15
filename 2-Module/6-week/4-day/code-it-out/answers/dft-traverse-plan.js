//from memory, try our best to write out the basic template plan for depth first traversal of a graph

// *****Plan here******
//1) create the stack then onboard the starter node
//2) set to keep track of our visited nodes / to be visited (already in stack), add starter node to set.
//3) while the stack is not empty, go through this process again
    //4) pop the top of the stack and get the "currentNode"
    //5) do the thing
    //6) GET NEIGHBORS of the current node into an array (helper function like getNeighbors, or keying into an adjList if we're using one)
    //7) traverse through the neighbors array and for each one we want to:
        //8) check if it isn't in the VISITED set already then:
            //9) add it to the set
            //10) also add it to the stack (only if it wasn't visited yet)

    //11) repeat the while until the stack is empty (giving us that traversal of graph behavior)