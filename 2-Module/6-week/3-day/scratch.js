function getNeighbors(row, col, graph) {

    // Check top

    // Check bottom

    // Check left

    // Check right

    // Return neighbors

    //!!START
    const neighbors = [];

    // Check top
    if (row > 0 && graph[row - 1][col] === 1) neighbors.push([row - 1, col]);

    // Check bottom
    if (row < graph.length - 1 && graph[row + 1][col] === 1) neighbors.push([row + 1, col]);

    // Check left
    if (col > 0 &&  graph[row][col - 1] === 1) neighbors.push([row, col - 1]);

    // Check right
    if (col < graph[row].length - 1 && graph[row][col + 1] === 1) neighbors.push([row, col + 1]);

    return neighbors;
    //!!END
  }


  function islandSize(row, col, graph) {

    // Create a visited set to store visited nodes

    // Create a stack, put the starting node in the stack

    // Put the stringified starting node in visited

    // Initialize size to 0

    // While the stack is not empty,

      // Pop the first node

      // DO THE THING (increment size by 1)

      // Then push all the UNVISITED neighbors on top of the stack
      // and mark them as visited
      // HINT: This is what your helper function `getNeighbors` is for
      // HINT: Remember, you're storing your visited nodes as strings!

    // return size

    //!!START
    // Create a visited set to store visited nodes
    const visited = new Set();

    // Create a stack, put the starting node in the stack
    const stack = [[row, col]];

    // Put the starting node in visited
    visited.add(`${row},${col}`)

    // Initialize size to 0
    let size = 0;

    // While the stack is not empty,
    while (stack.length > 0) {

      // Pop the first node
      let node = stack.pop();
      let currentRow = node[0];
      let currentCol = node[1];

      // DO THE THING (increment size by 1)
      size++;

      // Then push all the UNVISITED neighbors on top of the stack
      // and mark them as visited
      // HINT: This is what your helper function `getNeighbors` is for
      // HINT: Remember, you're storing your visited nodes as strings!
      let neighbors = getNeighbors(currentRow, currentCol, graph);
      for (let neighbor of neighbors) {
        let nodeString = `${neighbor[0]},${neighbor[1]}`
        if (!visited.has(nodeString)) {
          console.log('Pushing ${neighbor}')
          stack.push(neighbor);
          visited.add(nodeString)
        }
      }
    }

    return size;
    //!!END
  }



  class SocialNetwork {

    constructor() {
      this.users = {};
      this.follows = {};
      this.currentID = 0;
    }

    addUser(name) {
      //!!START
      this.currentID++;
      const nextID = this.currentID;

      this.users[nextID] = {id: nextID, name: name};
      this.follows[nextID] = new Set();

      return nextID;
      //!!END
    }

    getUser(userID) {
      //!!START
      if (this.users[userID]) return this.users[userID];
      else return null;
      //!!END
    }

    follow(userID1, userID2) {
      //!!START
      if (!this.users[userID1] || !this.users[userID2]) {
        return false;
      }

      this.follows[userID1].add(userID2);
      return true;
      //!!END
    }

    getFollows(userID) {
      //!!START
      return this.follows[userID];
      //!!END
    }

    getFollowers(userID) {
      //!!START
      const followers = new Set();

      for (let id in this.follows) {
        if (this.follows[id].has(userID)) followers.add(parseInt(id));
      }

      return followers;
      //!!END
    }

    getRecommendedFollows(userID, degrees) {
      //!!START
      let queue = [[userID]];

      let recommended = [];

      let visited = new Set();
      visited.add(userID);

      while (queue.length > 0) {

        let path = queue.shift();
        let id = path[path.length - 1];

        if (path.length > degrees + 2) break;

        if (path.length > 2) recommended.push(id);

        for (let follow of this.follows[id]) {
          if (!visited.has(follow)) {
            visited.add(follow);
            // Use concat to create a new array
            // DON'T modify the existing path!!!
            queue.push(path.concat([follow]))
          }
        }
      }

      return recommended;
      //!!END
    }
  }
