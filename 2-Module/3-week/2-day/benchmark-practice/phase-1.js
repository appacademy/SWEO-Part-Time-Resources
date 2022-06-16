// Adds up positive integers from 1-n
function addNums(n) {
  //this would be O(n) time complexity 
  //because the number of input elements of n will make it so that the for loop will yield n amount of operations. 
  let total = 0; // O(1)
  for(let i=0; i<=n; i++){ // O(n)
    total += i;
  }
  return total; //O(1)

  //O(1) + O(1) + O(n) --> O(n) b/c we do not care about the constants if we have something bigger which in this case, is O(n)

}

//  addManyNums(5) -->
//  addNums(1)   addNums(2)   addNums(3)   addNums(4)     addNums(5) --> 
//  0 + 1        1 + 2        1 + 2 + 3    1 + 2 + 3 + 4  1 + 2 + 3 + 4 +5

// Adds up values of addNums(1) through addNums(n)
function addManyNums(n) {
  let total = 0;
  for(let i=0; i<=n; i++){ //O(n)
    const addNumsvalue = addNums(i); //O(n)
    total += addNumsvalue;
  }
  return total;
}

//O(n * n) --> O(n^2)


module.exports = [addNums, addManyNums];