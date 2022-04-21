// Implement the SocialNetwork class here
class SocialNetwork {

  constructor() {
    this.users = {};
    this.follows = {};
    this.currentID = 0;
  }

  addUser(name) {
    this.currentID++
    let user = {
      id : this.currentID,
      name : name
    }
    this.follows[this.currentID] = new Set()
    this.users[this.currentID] = user
    return this.currentID
  }

  getUser(userID) {
    //     condition                        ?   if true return thus : return if false
    return this.users[userID] !== undefined ?    this.users[userID] :  null
  }

  follow(userID1, userID2) {
    if(!this.follows[userID1].has(userID2) && this.users[userID2]){
      this.follows[userID1].add(userID2)
      return true
    }else{
      return false
    }
  }

  getFollows(userID) {
    return this.follows[userID] ? this.follows[userID] : null
  }

  getFollowers(userID) {
    let followersSet = new Set()

    for(let key in this.follows){
      if(this.follows[key].has(userID)){
        followersSet.add(Number(key))
      }
    }
    return followersSet
  }

  getRecommendedFollows(userID, degrees) {
    // classic visited set, so that we dont repeat ourselves
    let visited = new Set([userID])
    // class queue with the starting path
    let queue = [[userID]]
    // possible recommendations
    let recommended = []
    while(queue.length){
      // shifting off the current path 
      let currentPath = queue.shift()
      // because of the way we are building the path,  
      //the current node/val to look at will be the last in the array
      let currentVal = currentPath[currentPath.length -1]
      // check to see if my degree has been reached. 
      // because the degree of 1 is people who I follow also follow.  
      // we need to ignore the first two nodes in the path
      // because node one is myself,  and node 2 is who I follow
      // and we only want to start recommending after i navigate through myself and who I follow
      if(currentPath.length > degrees +2 ) break
      // get everyone that the current val follows
      let follows = this.getFollows(currentVal)
      // I only want to recommend a user to follows starting at three,
      // because one is me and two is who I already follow
      if(currentPath.length > 2) recommended.push(currentVal)
      // Looping through the follows and creating paths
      for(let follow of follows){
        let pathCopy = [...currentPath]
        if(!visited.has(follow)){
          pathCopy.push(follow)
          visited.add(follow)
          queue.push(pathCopy)
        }
      }
    }
    return recommended
  }
}

module.exports = SocialNetwork;