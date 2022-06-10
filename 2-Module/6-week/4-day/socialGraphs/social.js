// Implement the SocialNetwork class here
class SocialNetwork {
  constructor() {
    this.users = {};
    this.follows = {};
    this.currentID = 0;
  }

  addUser(name) {
    // Creating a new user means we have to increment our userID count
    this.currentID++;
    // Each userID will point to an object that holds all of a user's data
    /**
     * this.users = {
     * 	1: {id: 1, name: Zaviar, likes: [Elden Ring, Lofi], etc: etc}
     * 	2: {id: 2, name: Will, likes: [Elden Ring, EDM], etc: etc}
     * }
     */
    this.users[this.currentID] = { id: this.currentID, name: name };
    // Same idea for creating a user's follows
    this.follows[this.currentID] = new Set();

    return this.currentID;
  }

  getUser(userID) {
    // return this.users[userID] || null; //! Fancy one line

    // If we find the userId in this.users, return the user object
    if (this.users[userID]) return this.users[userID];
    // else return null to indicate the user does not exist
    else return null;
  }

  // user1 follows user2
  follow(userID1, userID2) {
    // BOTH users must exist for us to create the follow
    if (this.users[userID1] && this.users[userID2]) {
      // Add user2 to user1's follows. Do not automatically add both ways
      this.follows[userID1].add(userID2);
      return true;
    }
    return false;
  }

  getFollows(userID) {
    return this.follows[userID];
  }

  getFollowers(userID) {
    const list = new Set();

    for (let id in this.follows) {
      if (this.follows[id].has(userID)) list.add(parseInt(id));
    }

    // Another solution
    // Object.keys(this.follows).forEach((id) => {
    //   if (this.follows[id].has(userID)) list.add(Number(id));
    // });

    return list;
  }

  getRecommendedFollows(userID, degrees) {
    // Similar to getShortestPath, we're traversing and keeping track of our
    // path so we can return all the recommended follows

    // Create a queue with starting userID
    const queue = [[userID]];
    // Create a recommended array
    const rec = [];
    // Create a visited Set
    const visited = new Set();

    // While queue.length > 0
    while (queue.length) {
      const path = queue.shift();
      const currID = path[path.length - 1];

      if (!visited.has(currID)) {
        visited.add(currID);

        // If our path.length is greater than degrees + 2, then we've found all
        // recommended follows to the degree count
        if (path.length > degrees + 2) return rec;

        /* If our starting userID counts as 1, and any person they follow counts
					counts as 2, then only the follows after that are ones we want to keep
					track of. (#) === degrees
					I am user1 (1)
					I follow user2 (2)
					User2 follows user3 (3) * From here forward we keep track of follows
					User3 follows user4 (4)
				*/
        if (path.length > 2) rec.push(currID);

        for (let el of this.getFollows(currID)) {
          // just like with aShortestPath, create a copy of the path, push the
          // new id into the path, and add that path to our queue
          let pathCopy = [...path];
          pathCopy.push(el);
          queue.push(pathCopy);
        }
      }
    }
		
    return rec;
  }
}

module.exports = SocialNetwork;
