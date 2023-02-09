const [addNums, addManyNums] = require("./phase-1");

// Runs `addNums` in 10 increasing increments
function addNums10(increment) {
  // Fill this in
  let totals = []
  for(let i = increment; i <= increment * 10; i+= increment){
    totals.push(addNums(i))
  }
  return totals
}

// Runs `addManyNums` in 10 increasing increments
function addManyNums10(increment) {
  // Fill this in
  let totals = []
  for(let i = increment; i <= increment * 10; i+= increment){
    totals.push(addManyNums(i))
  }
  return totals

}

module.exports = [addNums10, addManyNums10];