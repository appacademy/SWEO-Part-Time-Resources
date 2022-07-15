//from memory, try our best to write out the basic template plan for breadth first traversal of a graph


// *****Plan here******
// 1) that queue to have our node be added.Here we initially add our start node
// 2) we need a set to keep track of "visited nodes", initialize w/ start node
// 3) while the queue is not empty:
    //4) dequeue the node and put it in var like "currentNode"
    //5) do the thing (i.e. increasing the length by 1, size by 1, or just logging it)
    //6) we need to GET NEIGHBORS "ARRAY" from the "currentNode" (key into the adjList, or if using 2d matrix as graph we will use a helper function "getNeighbors") 
    //7) traverse through the neighbors and then
        //8) check to see if the neighborEl is already in the set, continue, if it's not in the set:
            //9) add it to the set
            //10) add it the queue

    //11 Repeat the while loop process until the queue is empty