// Implement the SocialNetwork class here
class SocialNetwork {

  constructor() {
    this.users = {};
    this.follows = {};
    this.currentID = 0;
  }

  addUser(name) {
    // Your code here
    this.currentID++
    const nextId = this.currentID
    this.users[nextId] = { id: nextId, name: name }
    this.follows[nextId] = new Set()
    return nextId
  }

  getUser(userID) {
    // Your code here
        // conditional     if true return this   else return this
    return this.users[userID] ? this.users[userID] : null
    // if(this.users[userID]){
    //   return this.users[userID]
    // } else return null
  }

  follow(userID1, userID2) {
    // Your code here
    if(!this.users[userID1] || !this.users[userID2]) return false
    this.follows[userID1].add(userID2)
    return true
  }

  getFollows(userID) {
    // Your code here
    return this.follows[userID]
  }

  getFollowers(userID) {
    // Your code here
    const followerSet = new Set()
    for(let id in this.follows){
      if(this.follows[id].has(userID)){
        followerSet.add(Number(id))
      }
    }
    return followerSet
  }

  getRecommendedFollows(userID, degrees) {
    // Your code here
    const queue = [[userID]]
    let res = []
    let visited = new Set()
    visited.add(userID)

    while(queue.length){
      let path = queue.shift()
      let currId = path[path.length - 1]

      if(path.length > degrees + 2) break

      if(path.length > 2) res.push(currId)

      for(let neighbor of this.follows[currId]){
        if(!visited.has(neighbor)){
          visited.add(neighbor)
          queue.push([...path, neighbor])
        }
      }

    }
    return res
  }
}

module.exports = SocialNetwork;