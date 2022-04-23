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
    return this.users[userID] !== undefined  ? this.users[userID] : null
  }

  follow(userID1, userID2) {
    if(this.users[userID1] && this.users[userID2]){
      if(!this.follows[userID1].has(userID2)){
        this.follows[userID1].add(userID2)
        return true
      } 
    }
    return false
  }

  getFollows(userID) {
    return this.follows[userID] !== undefined  ? this.follows[userID] : null
  }

  getFollowers(userID) {
    let followers = new Set()
    for(let key in this.follows){
      if(this.follows[key].has(userID)) followers.add(Number(key))
    }
    return followers
  }

  getRecommendedFollows(userID, degrees) {
    let recommended  = []
    let queue = [[userID]]
    let visited = new Set([userID])

    // classic path building for graphs
    while(queue.length){
      let currentPath = queue.shift()
      let currentValue = currentPath[currentPath.length -1]
      
      // We are breaking at the degree plus 2, because the directions tell us tht a first degree 
      // connection is my follows follow,  with will be the third value in the path.
      // because im starting at me and going to my follows next 
      if(currentPath.length > degrees + 2) break
      // I only want to start recommending users after I have traversed myself
      //, and who I follow.  Because I am starting at myself, and then moving to who I follow
      // we want to skip the first two values, and only recommend starting with three
      if(currentPath.length > 2) recommended.push(currentValue)


      let follows = this.getFollows(currentValue)
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