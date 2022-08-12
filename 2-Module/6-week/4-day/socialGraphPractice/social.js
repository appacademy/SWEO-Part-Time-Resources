// Implement the SocialNetwork class here
class SocialNetwork {

  constructor() {
    this.users = {};
    this.follows = {};
    this.currentID = 0;
  }

  addUser(name) {
    this.currentID++; // increment the currentId
    this.users[this.currentID] = {id: this.currentID, name: name} // create the new user
    this.follows[this.currentID] = new Set(); // create a new set to hold all of the users follows
    return this.currentID; // return the new userID
  }

  getUser(userID) {
    if (!this.users[userID]) return null;
    return this.users[userID];
  }

  follow(userID1, userID2) {
    if (!this.users[userID1] || !this.users[userID2]) return false;

    this.follows[userID1].add(userID2);
    return true;
  }

  getFollows(userID) {
    return this.follows[userID];
  }

  getFollowers(userID) {
    const followers = new Set(); // create a set to hold followers

    for (let id in this.follows) { // for each id in this.follows
      if (this.follows[id].has(userID)) followers.add(parseInt(id)); // check if that user is 
      // following our user, if they are add them to our set.
    }

    return followers;
  }

  getRecommendedFollows(userID, degrees) {
    let queue = [[userID]]; // add our current path to the queue
    let recommended = []; 
    let visited = new Set([userID]);

    while (queue.length > 0) {

      let path = queue.shift(); // grab the path
      let id = path[path.length - 1]; // get the last id from the path

      if (path.length > degrees + 2) break; // not counting the current user or someone
      // they already follow, if we've reached our desired degree, stop.

      if (path.length > 2) recommended.push(id); // path.length should be 2 when we have
      // our current user and their current friend. We don't want to recommend that we 
      // follow ourself or people we already follow, just friends of friends.

      for (let follow of this.follows[id]) { // get the friends of the last person added to the path
        if (!visited.has(follow)) { // if they haven't already been looked at
          visited.add(follow); // add them to our visited set to prevent dupes
          // either use .slice to make a copy of the array and push the friend
          // or use .concat to create a new array
          // DON'T modify the existing path!!!
          queue.push(path.concat([follow]))
        }
      }
    }

    return recommended;
  }
}

module.exports = SocialNetwork;