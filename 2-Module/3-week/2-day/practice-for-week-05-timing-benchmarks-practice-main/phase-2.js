const [addNums, addManyNums] = require("./phase-1");

// Runs `addNums` in 10 increasing increments
// function addNums10(increment, answer = [], count = 0) {
function addNums10(increment) {
  // // addNums10 function only runs 10 times O(1)
  //   if(answer.length === 10){
  //     return answer
  //   }
  //   count+= increment
  //   answer.push(addNums(count))// runs n times Time = O(n) space = O(1)
  //   return addNums10(increment, answer, count) 
  let arr = []

  for(let i = increment; i <= increment * 10; i+=increment){
    arr.push(addNums(i))
  }
  return arr
  // let arr = []
  // let i = increment
  // for(let count = 0; count < 10; count++){
  //   arr.push(addNums(i))
  //   i+=increment
  // }
  // return arr
}

// Runs `addManyNums` in 10 increasing increments
function addManyNums10(increment) {
  let arr = [] // constant space
  for(let i = increment; i <= increment * 10; i+=increment){ // outer func constant loop only ten times
    arr.push(addManyNums(i))// O(n^2)
  }
  return arr
}

module.exports = [addNums10, addManyNums10];