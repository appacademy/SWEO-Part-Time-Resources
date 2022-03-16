// Adds up positive integers from 1-n
function addNums(n) {
  let sum = 0 // Space Complexity O(1) Constant
  for(let i = 0; i <= n; i++){ // Time Complexity O(n) Linear
    sum+=i
  }
  return sum
}


// Adds up values of addNums(1) through addNums(n)
function addManyNums(n) {
  let sum = 0; // Space Complexity O(1) Constant
  for(let i = 0; i <= n; i++){ // O(n^2) Quadratic Time Complexity
    sum += addNums(i) 
  }
  return sum
}



module.exports = [addNums, addManyNums];