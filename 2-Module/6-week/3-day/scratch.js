const adjList = {
    1: [2, 5],
    2: [1, 3, 5],
    3: [2, 4],
    4: [3, 5, 6],
    5: [1, 2, 4],
    6: [4]
  }
  
  function printBreadthFirst(start) {
    // your code here
    const queue = [start]
    const visited = new Set()
    visited.add(start)
    const res = []

    while(queue.length){
        let curr = queue.shift()

        res.push(curr)
        adjList[curr].forEach(ele => {
            if(!visited.has(ele)){
                visited.add(ele)
                queue.push(ele)
            }
        })
    }
    console.log(res)
  }
  
  console.log("First Test:")
  printBreadthFirst(3); // Prints 1 through 6 in Breadth-first order, starting with 3
                        // One possible solution:  3, 2, 4, 1, 5, 6
  console.log("Second Test:")
  printBreadthFirst(6); // Prints 1 through 6 in Breadth-first order, starting with 6
                        // One possible solution:  6, 4, 3, 5, 2, 1
  console.log("Third Test:")
  printBreadthFirst(4); // Prints 1 through 6 in Breadth-first order, starting with 4
                        // One possible solution:  4, 3, 5, 6, 2, 1

function printDepthFirst(start) {
    // your code here

    const stack = [start]
    const visited = new Set()
    const res = []
    visited.add(start)
    while(stack.length){
        let curr = stack.pop()

        res.push(curr)
        adjList[curr].forEach(ele => {
            if(!visited.has(ele)){
                visited.add(ele)
                stack.push(ele)
            }
        })
    }
    console.log(res)
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