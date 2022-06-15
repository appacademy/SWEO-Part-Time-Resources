// Adds up positive integers from 1-n

//O(n)
function addNums(n) { //5 --> 1 + 2 + 3 + 4 + 5
  // return n * (n+1) / 2
  let total = 0
  for(let i=0; i<=n; i++){
    total += i;
  }
  return total;
}

console.log(addNums(5)); //expect this to be 15
console.log(addNums(10)); //expect this to be 55


// Adds up values of addNums(1) through addNums(n)
function addManyNums(n) {
  let total = 0;
  for(let i=0; i<=n; i++){
    const addNumsRes = addNums(i);
    total += addNumsRes;

  }
  return total;
}

console.log(addManyNums(10));



module.exports = [addNums, addManyNums];