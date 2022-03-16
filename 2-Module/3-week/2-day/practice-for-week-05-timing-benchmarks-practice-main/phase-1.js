// Adds up positive integers from 1-n
function addNums(n) { // Time O(n) Space O(1)
  let total = 0; // Space Complexity O(1)
  let index = 1; // Space Complexity O(1)
  while(index <= n){ // Time Complexity O(n)
    total += index // Space O(1)
    index ++ // Space O(1)
  }
  return total // Space O(1)
}


// Adds up values of addNums(1) through addNums(n)
function addManyNums(n) {
  let total = 0; // Space Complexity O(1)
  let index = 1; // Space Complexity O(1)
  while(index <= n){ // Time Complexity O(n)
    total += addNums(index) // Time Complexity O(n ^ 2)
    index ++ // Space O(1)
  }
  return total // Space O(1)
}



module.exports = [addNums, addManyNums];