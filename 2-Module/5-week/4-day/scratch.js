<<<<<<< HEAD
// *min max*
// binary search -- recurse all the way left or right
// binary -- visit every node and keep track current max or min
// *Height*
// recurse, count nodes, minus 1 when you see null
// compare left and right 
// *count nodes*
// visit every node and count
// *Balanced tree*
// compare the heights of left and right
// *Get Parent*
// find the node that point to your target, thats the parent 
// *node deletion*
// no children, -- make the node null
// on child, parents child becomes node to deletes child
// two children, replace the value of the node to delete with the in order predecessor,  
// and then delete the in order predecessor 
// */

=======
const adjList = {
    1: [2, 5],
    2: [1, 3, 5],
    3: [2, 4],
    4: [3, 5, 6],
    5: [1, 2, 4],
    6: [4]
  }
  
  function printDepthFirst(start) {
    let visited = new Set()
    let queue = [start]

    while(queue.length){
        let current = queue.pop()
        if(!visited.has(current)){
            console.log(current)
            visited.add(current)
        }
        adjList[current].forEach(el => {
            if(!visited.has(el)){
                queue.push(el)
            }
        });
    }
  }
  
  console.log("First Test:")
  printDepthFirst(3); // Prints 1 through 6 in Depth-first order, starting with 3
                      // One possible solution:  3, 4, 6, 5, 1, 2
  console.log("Second Test:")
  printDepthFirst(6); // Prints 1 through 6 in Depth-first order, starting with 6
                      // One possible solution:  6, 4, 5, 2, 1, 3
  console.log("Third Test:")
  printDepthFirst(4); // Prints 1 through 6 in Depth-first order, starting with 4
                      // One possible solution:  4, 6, 5, 2, 1, 3
>>>>>>> 2022-Jan-W
